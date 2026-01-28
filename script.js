// ============================================
// 1. Navigation & Scroll Logic (Existing)
// ============================================

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
        if (window.pageYOffset >= sectionTop - 200) current = section.getAttribute('id');
    });
    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${current}`) link.classList.add('active');
    });
});

const observerOptions = { threshold: 0.1, rootMargin: '0px 0px -50px 0px' };
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// ============================================
// 2. Dynamic Content Rendering (New)
// ============================================

document.addEventListener('DOMContentLoaded', () => {
    
    // Check Config
    if (typeof siteConfig === 'undefined') {
        console.error("Config file not loaded!");
        return;
    }

    // 执行所有渲染函数
    renderAbout();
    renderResearchFocus();
    renderPublications();
    renderCollaboration();
    renderTeam();

    // Attach Observer to all newly created animated elements
    const animatedClasses = '.research-card, .activity-item, .collab-item, .paper-item, .team-member';
    setTimeout(() => {
        document.querySelectorAll(animatedClasses).forEach(el => {
            el.style.opacity = '0';
            el.style.transform = 'translateY(20px)';
            el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
            observer.observe(el);
        });
    }, 100); // Slight delay to ensure DOM is ready
});

// --- Render Functions ---

function renderAbout() {
    const container = document.getElementById('about-container');
    container.innerHTML = '';
    siteConfig.about.forEach(item => {
        const p = document.createElement('p');
        p.innerHTML = item.text; // Allow HTML
        if (item.isLead) p.className = 'lead';
        container.appendChild(p);
    });
}

function renderResearchFocus() {
    const container = document.getElementById('research-container');
    container.innerHTML = '';
    siteConfig.researchFocus.forEach(item => {
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

function renderPublications() {
    const container = document.getElementById('paper-list-container');
    container.innerHTML = '';
    
    // Sort by date (Newest first) - Optional
    // siteConfig.publications.sort((a, b) => new Date(b.date) - new Date(a.date));

    siteConfig.publications.forEach(item => {
        const div = document.createElement('div');
        div.className = 'paper-item';

        // Title and Date wrapper
        const infoDiv = document.createElement('div');
        infoDiv.style.flex = '1';
        
        const titleSpan = document.createElement('h4'); // Changed to h4 for better hierarchy
        titleSpan.className = 'paper-title';
        titleSpan.textContent = item.title;
        titleSpan.style.marginBottom = '5px';

        // ✅ 新增：日期显示
        const dateSpan = document.createElement('div');
        dateSpan.className = 'paper-date';
        dateSpan.textContent = `📅 Published: ${item.date}`;

        infoDiv.appendChild(titleSpan);
        infoDiv.appendChild(dateSpan);

        // Buttons
        const btnGroup = document.createElement('div');
        btnGroup.className = 'paper-btn-group';

        if (item.file) {
            const btn = document.createElement('a');
            btn.href = item.file;
            btn.className = 'btn-sm btn-paper';
            btn.textContent = '📄 Paper';
            btn.target = '_blank';
            btnGroup.appendChild(btn);
        }
        if (item.code) {
            const btn = document.createElement('a');
            btn.href = item.code;
            btn.className = 'btn-sm btn-code';
            btn.textContent = '💻 Code';
            btn.target = '_blank';
            btnGroup.appendChild(btn);
        }

        div.appendChild(infoDiv);
        div.appendChild(btnGroup);
        container.appendChild(div);
    });
}

function renderCollaboration() {
    const container = document.getElementById('collaboration-container');
    container.innerHTML = '';
    siteConfig.collaboration.forEach(item => {
        const div = document.createElement('div');
        div.className = `collab-item ${item.buttonLink ? 'clickable-card' : ''}`;
        
        // If clickable, add onclick
        if (item.buttonLink) {
            div.onclick = () => {
                const targetId = item.buttonLink.replace('#', '');
                document.getElementById(targetId).scrollIntoView({ behavior: 'smooth' });
            };
        }

        let html = `<h3>${item.title}</h3><p>${item.description}</p>`;
        if (item.buttonText && item.buttonLink) {
            html += `<a href="${item.buttonLink}" class="btn btn-secondary">${item.buttonText}</a>`;
        }
        div.innerHTML = html;
        container.appendChild(div);
    });
}

function renderTeam() {
    const container = document.getElementById('team-container');
    container.innerHTML = '';
    siteConfig.team.forEach(member => {
        const div = document.createElement('div');
        div.className = 'team-member';
        
        let deptHtml = member.department ? `<p class="member-department">${member.department}</p>` : '';
        
        div.innerHTML = `
            <div class="member-icon">${member.icon}</div>
            <h3>${member.name}</h3>
            <p class="member-role">${member.role}</p>
            ${deptHtml}
            <p class="member-location">📍 ${member.location}</p>
        `;
        container.appendChild(div);
    });
}
