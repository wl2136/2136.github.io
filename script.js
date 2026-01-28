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

// ==========================================
// Initialization & Rendering
// ==========================================
document.addEventListener('DOMContentLoaded', () => {
    // 1. Render All Dynamic Sections
    renderAbout();
    renderResearchFocus();
    renderPublications();
    renderCollaboration();
    renderTeam();

    // 2. Initialize Animations for newly created elements
    // We select general classes that are used in the generated HTML
    const animatedElements = document.querySelectorAll('.research-card, .activity-item, .collab-item, .team-member, .paper-item');
    animatedElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(20px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });
});

// ------------------------------------------
// Render Functions
// ------------------------------------------

// 1. Render "About" Section
function renderAbout() {
    const container = document.getElementById('about-text-container');
    if (!container || typeof aboutContent === 'undefined') return;
    
    container.innerHTML = '';
    aboutContent.forEach((paragraph, index) => {
        const p = document.createElement('p');
        p.innerHTML = paragraph; // innerHTML allows <strong> tags
        // The first paragraph gets the 'lead' class for styling
        if (index === 0) p.className = 'lead'; 
        container.appendChild(p);
    });
}

// 2. Render "Research Focus" Section
function renderResearchFocus() {
    const container = document.getElementById('research-grid-container');
    if (!container || typeof researchFocus === 'undefined') return;

    container.innerHTML = '';
    researchFocus.forEach(item => {
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

// 3. Render "Publications" Section (with Date)
function renderPublications() {
    const listContainer = document.getElementById('paper-list-container');
    if (!listContainer || typeof paperList === 'undefined') return;

    if (paperList.length === 0) {
        listContainer.innerHTML = '<p style="text-align:center; color: var(--text-light);">No publications available yet.</p>';
        return;
    }

    listContainer.innerHTML = '';

    paperList.forEach((item) => {
        const paperDiv = document.createElement('div');
        paperDiv.className = 'paper-item';
        
        // --- Left: Text Content ---
        const textDiv = document.createElement('div');
        textDiv.className = 'paper-text-content';

        const titleSpan = document.createElement('div');
        titleSpan.className = 'paper-title';
        titleSpan.textContent = item.title;

        if (item.date) {
            const dateSpan = document.createElement('div');
            dateSpan.className = 'paper-date';
            dateSpan.innerHTML = `📅 ${item.date}`;
            textDiv.appendChild(dateSpan);
        }
        textDiv.prepend(titleSpan); 

        // --- Right: Button Group ---
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

        paperDiv.appendChild(textDiv);
        paperDiv.appendChild(btnGroup);
        listContainer.appendChild(paperDiv);
    });
}

// 4. Render "Collaboration" Section
function renderCollaboration() {
    const container = document.getElementById('collaboration-container');
    if (!container || typeof collaborationList === 'undefined') return;

    container.innerHTML = '';
    collaborationList.forEach(item => {
        const div = document.createElement('div');
        div.className = 'collab-item';
        
        // If it has a link, make the whole card clickable or add a button class logic
        if (item.link && item.scrollTarget) {
            div.classList.add('clickable-card');
            div.onclick = function() { 
                const target = document.querySelector(item.link);
                if(target) target.scrollIntoView({behavior: 'smooth'});
            };
        }

        let htmlContent = `<h3>${item.title}</h3><p>${item.description}</p>`;

        // If there is a button
        if (item.link && item.linkText) {
            htmlContent += `<a href="${item.link}" class="btn btn-secondary">${item.linkText}</a>`;
        }

        div.innerHTML = htmlContent;
        container.appendChild(div);
    });
}

// 5. Render "Research Team" Section
function renderTeam() {
    const container = document.getElementById('team-grid-container');
    if (!container || typeof teamMembers === 'undefined') return;

    container.innerHTML = '';
    teamMembers.forEach(member => {
        const div = document.createElement('div');
        div.className = 'team-member';
        
        let htmlContent = `
            <div class="member-icon">👤</div>
            <h3>${member.name}</h3>
            <p class="member-role">${member.role}</p>
        `;
        
        if (member.department) {
            htmlContent += `<p class="member-department">${member.department}</p>`;
        }
        
        htmlContent += `<p class="member-location">📍 ${member.location}</p>`;
        
        div.innerHTML = htmlContent;
        container.appendChild(div);
    });
}
