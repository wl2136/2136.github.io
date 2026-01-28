/**
 * ===================================================================================
 * MAIN LOGIC SCRIPT
 * Handles animations, smooth scrolling, and dynamic content rendering.
 * ===================================================================================
 */

// --- 1. Navigation & Scroll Interactions ---

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    });
});

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

// --- 2. Animations (Intersection Observer) ---

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

function observeElements(selector) {
    const elements = document.querySelectorAll(selector);
    elements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(20px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });
}

// --- 3. Dynamic Content Rendering ---

document.addEventListener('DOMContentLoaded', () => {
    // Render all dynamic sections
    renderAbout();
    renderResearchFocus();
    renderPublications();
    renderCollaboration();
    renderTeam();

    // Start animations for newly created elements
    // We observe typical card classes
    observeElements('.research-card, .activity-item, .collab-item, .team-member, .paper-item');
});


// A. Render About Section
function renderAbout() {
    if (typeof aboutConfig === 'undefined') return;
    
    // Inject Title if needed (Optional, currently hardcoded in HTML as well)
    const container = document.getElementById('about-text-container');
    if (!container) return;
    
    // Inject Paragraphs
    if (aboutConfig.paragraphs && aboutConfig.paragraphs.length > 0) {
        aboutConfig.paragraphs.forEach(text => {
            const p = document.createElement('p');
            p.innerHTML = text; // innerHTML allows <strong> tags
            container.appendChild(p);
        });
    }
}

// B. Render Research Focus
function renderResearchFocus() {
    const container = document.getElementById('research-grid');
    if (!container || typeof researchFocusList === 'undefined') return;

    researchFocusList.forEach(item => {
        const card = document.createElement('div');
        card.className = 'research-card';
        card.innerHTML = `
            <div class="card-icon">${item.icon}</div>
            <h3>${item.title}</h3>
            <p>${item.description}</p>
        `;
        container.appendChild(card);
    });
}

// C. Render Publications (Updated with Date)
function renderPublications() {
    const container = document.getElementById('paper-list-container');
    if (!container || typeof paperList === 'undefined') return;

    container.innerHTML = ''; // Clear loading text
    if (paperList.length === 0) {
        container.innerHTML = '<p style="text-align:center; color: var(--text-light);">No publications available.</p>';
        return;
    }

    paperList.forEach(item => {
        const paperDiv = document.createElement('div');
        paperDiv.className = 'paper-item';

        // Left side: Text info (Title + Date)
        const infoDiv = document.createElement('div');
        infoDiv.className = 'paper-info';
        
        // Date Element
        if (item.date) {
            const dateSpan = document.createElement('div');
            dateSpan.className = 'paper-date';
            dateSpan.textContent = item.date;
            infoDiv.appendChild(dateSpan);
        }
        
        // Title Element
        const titleSpan = document.createElement('div');
        titleSpan.className = 'paper-title';
        titleSpan.textContent = item.title;
        infoDiv.appendChild(titleSpan);

        // Right side: Buttons
        const btnGroup = document.createElement('div');
        btnGroup.className = 'paper-btn-group';

        if (item.file) {
            const paperBtn = document.createElement('a');
            paperBtn.href = item.file;
            paperBtn.className = 'btn-sm btn-paper';
            paperBtn.textContent = '📄 Paper';
            paperBtn.target = '_blank';
            btnGroup.appendChild(paperBtn);
        }

        if (item.code) {
            const codeBtn = document.createElement('a');
            codeBtn.href = item.code;
            codeBtn.className = 'btn-sm btn-code';
            codeBtn.textContent = '💻 Code';
            codeBtn.target = '_blank';
            btnGroup.appendChild(codeBtn);
        }

        paperDiv.appendChild(infoDiv);
        paperDiv.appendChild(btnGroup);
        container.appendChild(paperDiv);
    });
}

// D. Render Collaboration
function renderCollaboration() {
    const container = document.getElementById('collaboration-grid');
    if (!container || typeof collaborationList === 'undefined') return;

    collaborationList.forEach(item => {
        const colItem = document.createElement('div');
        colItem.className = 'collab-item';
        
        let buttonHtml = '';
        if (item.actionBtn) {
            // If there's an action button configured
            colItem.classList.add('clickable-card'); // Optional style
            buttonHtml = `<a href="${item.actionBtn.link}" class="btn btn-secondary" style="margin-top:1rem; display:inline-block;">${item.actionBtn.text}</a>`;
            
            // Allow whole card click
            colItem.onclick = () => {
                // Check if link is anchor
                if(item.actionBtn.link.startsWith('#')) {
                   const target = document.querySelector(item.actionBtn.link);
                   if(target) target.scrollIntoView({behavior: 'smooth'});
                } else {
                   window.location.href = item.actionBtn.link;
                }
            };
        }

        colItem.innerHTML = `
            <h3>${item.title}</h3>
            <p>${item.description}</p>
            ${buttonHtml}
        `;
        container.appendChild(colItem);
    });
}

// E. Render Team
function renderTeam() {
    const container = document.getElementById('team-grid');
    if (!container || typeof teamMembers === 'undefined') return;

    teamMembers.forEach(member => {
        const memberDiv = document.createElement('div');
        memberDiv.className = 'team-member';
        
        const departmentHtml = member.department 
            ? `<p class="member-department">${member.department}</p>` 
            : '';

        memberDiv.innerHTML = `
            <div class="member-icon">👤</div>
            <h3>${member.name}</h3>
            <p class="member-role">${member.role}</p>
            ${departmentHtml}
            <p class="member-location">📍 ${member.location}</p>
        `;
        container.appendChild(memberDiv);
    });
}
