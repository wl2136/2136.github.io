// ==========================================
// Navigation & Animation Logic
// ==========================================

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Add active class to navigation items on scroll
const sections = document.querySelectorAll('section[id]');
const navLinks = document.querySelectorAll('.nav-menu a');

window.addEventListener('scroll', () => {
    let current = '';
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        if (window.pageYOffset >= sectionTop - 200) {
            current = section.getAttribute('id');
        }
    });

    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${current}`) {
            link.classList.add('active');
        }
    });
});

// Intersection Observer for fade-in animation
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Initialize animations on load
document.addEventListener('DOMContentLoaded', () => {
    // 1. Observe static elements
    const animatedElements = document.querySelectorAll('.research-card, .activity-item, .collab-item, .team-member');
    animatedElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(20px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });

    // 2. Render and observe publication list
    renderPublications();
});


// Function to render paper list from config.js
function renderPublications() {
    const listContainer = document.getElementById('paper-list-container');
    
    // Safety check: ensure config is loaded
    if (typeof paperList === 'undefined' || !paperList) {
        listContainer.innerHTML = '<p style="text-align:center; color:red;">Error: config.js not loaded.</p>';
        return;
    }

    if (paperList.length === 0) {
        listContainer.innerHTML = '<p style="text-align:center; color: var(--text-light);">No publications available yet.</p>';
        return;
    }

    // Clear loading placeholder
    listContainer.innerHTML = '';

    paperList.forEach((item) => {
        // Create Main Card
        const paperDiv = document.createElement('div');
        paperDiv.className = 'paper-item';
        
        // Apply animation styles dynamically
        paperDiv.style.opacity = '0';
        paperDiv.style.transform = 'translateY(20px)';
        paperDiv.style.transition = 'opacity 0.6s ease, transform 0.6s ease';

        // --- Left Side: Text Content (Title + Date) ---
        const textDiv = document.createElement('div');
        textDiv.className = 'paper-text-content';

        // Title
        const titleSpan = document.createElement('div'); // Changed to div for block display
        titleSpan.className = 'paper-title';
        titleSpan.textContent = item.title;

        // Date (New Feature)
        if (item.date) {
            const dateSpan = document.createElement('div');
            dateSpan.className = 'paper-date';
            dateSpan.innerHTML = `📅 ${item.date}`; // Add a small icon
            textDiv.appendChild(dateSpan);
        }
        
        // Append Title (and Date) to text container
        textDiv.prepend(titleSpan); 


        // --- Right Side: Button Group ---
        const btnGroup = document.createElement('div');
        btnGroup.className = 'paper-btn-group';

        // Paper Button
        if (item.file) {
            const paperBtn = document.createElement('a');
            paperBtn.href = item.file; // Direct link from config
            paperBtn.className = 'btn-sm btn-paper';
            paperBtn.textContent = '📄 Paper';
            paperBtn.target = '_blank';
            btnGroup.appendChild(paperBtn);
        }

        // Code Button
        if (item.code) {
            const codeBtn = document.createElement('a');
            codeBtn.href = item.code;
            codeBtn.className = 'btn-sm btn-code';
            codeBtn.textContent = '💻 Code';
            codeBtn.target = '_blank';
            btnGroup.appendChild(codeBtn);
        }

        // Assemble the card
        paperDiv.appendChild(textDiv);
        paperDiv.appendChild(btnGroup);
        
        // Add to DOM
        listContainer.appendChild(paperDiv);

        // Trigger animation observer
        observer.observe(paperDiv);
    });
}

