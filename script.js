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
        const sectionHeight = section.clientHeight;
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

// Add fade-in animation on scroll
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

// Observe all cards and items
document.addEventListener('DOMContentLoaded', () => {
    // 1. Existing Animation Logic
    const animatedElements = document.querySelectorAll('.research-card, .activity-item, .collab-item, .paper-item'); // Added .paper-item here
    animatedElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(20px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });

    // 2. 【新增】 Render Publications from config.js
    renderPublications();
});


/**
 * Function to render paper list from config.js
 */
function renderPublications() {
    const listContainer = document.getElementById('paper-list-container');
    
    // Check if config is loaded
    if (typeof paperList === 'undefined' || !paperList) {
        listContainer.innerHTML = '<p style="text-align:center; color:red;">Error: config.js not loaded.</p>';
        return;
    }

    if (paperList.length === 0) {
        listContainer.innerHTML = '<p style="text-align:center; color: var(--text-light);">No publications available yet.</p>';
        return;
    }

    // Clear loading text
    listContainer.innerHTML = '';

    paperList.forEach((item, index) => {
        // Create Item Container
        const paperDiv = document.createElement('div');
        paperDiv.className = 'paper-item';
        
        // Add animation styles (to match the observer logic above)
        paperDiv.style.opacity = '0';
        paperDiv.style.transform = 'translateY(20px)';
        paperDiv.style.transition = 'opacity 0.6s ease, transform 0.6s ease';

        // Title
        const titleSpan = document.createElement('span');
        titleSpan.className = 'paper-title';
        titleSpan.textContent = item.title;

        // Button Group
        const btnGroup = document.createElement('div');
        btnGroup.className = 'paper-btn-group';

        // Paper Button
        if (item.file) {
            const paperBtn = document.createElement('a');
            paperBtn.href = `papers/${item.file}`; // Path relative to index.html
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

        // Append to DOM
        paperDiv.appendChild(titleSpan);
        paperDiv.appendChild(btnGroup);
        listContainer.appendChild(paperDiv);

        // Register new item to the observer so it fades in
        observer.observe(paperDiv);
    });
}
