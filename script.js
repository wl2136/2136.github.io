/* ========================================== */
/* Reset and Base Styles */
/* ========================================== */
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

:root {
    --primary-color: #2c5f41;
    --secondary-color: #4a9d6f;
    --accent-color: #6bbf8f;
    --text-dark: #2c3e50;
    --text-light: #7f8c8d;
    --bg-light: #f8f9fa;
    --bg-white: #ffffff;
    --shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
    --shadow-hover: 0 4px 20px rgba(0, 0, 0, 0.15);
}

body {
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    line-height: 1.6;
    color: var(--text-dark);
    background-color: var(--bg-white);
}

.container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 20px;
}

/* ========================================== */
/* Navigation */
/* ========================================== */
.navbar {
    background-color: var(--bg-white);
    box-shadow: var(--shadow);
    position: sticky;
    top: 0;
    z-index: 1000;
    padding: 1rem 0;
}

.navbar .container {
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.nav-brand h1 {
    font-size: 1.5rem;
    color: var(--primary-color);
    font-weight: 600;
}

.nav-menu {
    display: flex;
    list-style: none;
    gap: 2rem;
}

.nav-menu a {
    text-decoration: none;
    color: var(--text-dark);
    font-weight: 500;
    transition: color 0.3s ease;
}

.nav-menu a:hover,
.nav-menu a.active {
    color: var(--secondary-color);
}

/* ========================================== */
/* Hero Section */
/* ========================================== */
.hero {
    background: linear-gradient(135deg, var(--primary-color) 0%, var(--secondary-color) 100%);
    color: white;
    padding: 6rem 0;
    text-align: center;
}

.hero-content {
    max-width: 800px;
    margin: 0 auto;
}

.hero-title {
    font-size: 2.5rem;
    margin-bottom: 1.5rem;
    font-weight: 700;
    line-height: 1.2;
}

.hero-subtitle {
    font-size: 1.2rem;
    margin-bottom: 2rem;
    opacity: 0.95;
    line-height: 1.6;
}

/* ========================================== */
/* Buttons */
/* ========================================== */
.btn {
    display: inline-block;
    padding: 0.75rem 2rem;
    text-decoration: none;
    border-radius: 5px;
    font-weight: 600;
    transition: all 0.3s ease;
    border: none;
    cursor: pointer;
}

.btn-primary {
    background-color: white;
    color: var(--primary-color);
}

.btn-primary:hover {
    background-color: var(--bg-light);
    transform: translateY(-2px);
    box-shadow: var(--shadow-hover);
}

.btn-secondary {
    background-color: var(--secondary-color);
    color: white;
    margin-top: 1rem;
}

.btn-secondary:hover {
    background-color: var(--accent-color);
    transform: translateY(-2px);
    box-shadow: var(--shadow-hover);
}

/* ========================================== */
/* General Sections */
/* ========================================== */
.section {
    padding: 5rem 0;
}

.section-alt {
    background-color: var(--bg-light);
}

.section-title {
    font-size: 2.5rem;
    text-align: center;
    margin-bottom: 3rem;
    color: var(--primary-color);
    font-weight: 700;
}

/* ========================================== */
/* Content Grids (Research, Activities, Team) */
/* ========================================== */
.research-grid,
.activities-grid,
.collaboration-content,
.team-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 2rem;
    margin-top: 2rem;
}

/* Cards */
.research-card,
.activity-item,
.collab-item,
.team-member {
    background-color: var(--bg-white);
    border-radius: 10px;
    box-shadow: var(--shadow);
    transition: transform 0.3s ease, box-shadow 0.3s ease;
}

/* Specific Card Styles */
.research-card { padding: 2.5rem; text-align: center; }
.research-card:hover { transform: translateY(-5px); box-shadow: var(--shadow-hover); }
.research-card h3 { font-size: 1.5rem; color: var(--primary-color); margin-bottom: 1rem; }
.research-card p { color: var(--text-light); line-height: 1.7; }
.card-icon { font-size: 3rem; margin-bottom: 1rem; }

.activity-item { padding: 2rem; border-left: 4px solid var(--secondary-color); }
.activity-item:hover { transform: translateX(5px); }
.activity-item h3 { font-size: 1.3rem; color: var(--primary-color); margin-bottom: 1rem; }
.activity-item p { color: var(--text-light); line-height: 1.7; }

.collab-item { padding: 2.5rem; }
.collab-item h3 { font-size: 1.5rem; color: var(--primary-color); margin-bottom: 1rem; }
.collab-item p { color: var(--text-light); line-height: 1.7; }
.clickable-card { cursor: pointer; }
.clickable-card:hover { transform: translateY(-5px); box-shadow: var(--shadow-hover); }

.team-intro { max-width: 800px; margin: 0 auto 3rem; text-align: center; }
.team-intro p { font-size: 1.1rem; color: var(--text-dark); line-height: 1.8; }
.team-member { padding: 2rem; text-align: center; border-top: 4px solid var(--secondary-color); }
.team-member:hover { transform: translateY(-5px); box-shadow: var(--shadow-hover); }
.member-icon { font-size: 3rem; margin-bottom: 1rem; opacity: 0.8; }
.team-member h3 { font-size: 1.3rem; color: var(--primary-color); margin-bottom: 0.5rem; font-weight: 600; }
.member-role { color: var(--secondary-color); font-weight: 500; margin-bottom: 0.5rem; font-size: 0.95rem; }
.member-department { color: var(--text-light); font-size: 0.9rem; margin-bottom: 0.5rem; font-style: italic; }
.member-location { color: var(--text-light); font-size: 0.9rem; margin-top: 0.5rem; }

/* Contact Section */
.contact-content { max-width: 700px; margin: 0 auto; text-align: center; }
.contact-content > p { font-size: 1.1rem; margin-bottom: 2rem; color: var(--text-dark); }
.contact-info { background-color: var(--bg-light); padding: 2rem; border-radius: 10px; box-shadow: var(--shadow); }
.contact-info p { margin-bottom: 1rem; font-size: 1.1rem; }
.contact-info strong { color: var(--primary-color); }
.contact-note { margin-top: 1.5rem; font-style: italic; color: var(--text-light); }

/* Footer */
.footer { background-color: var(--text-dark); color: white; padding: 2rem 0; text-align: center; }
.footer p { margin-bottom: 0.5rem; }
.footer-note { opacity: 0.8; font-size: 0.9rem; }

/* ================================================== */
/* 【Updated】 Publications List Styles */
/* ================================================== */
.paper-list-container {
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
    max-width: 1000px;
    margin: 0 auto;
}

.paper-item {
    background-color: var(--bg-white);
    padding: 1.5rem 2rem;
    border-radius: 10px;
    box-shadow: var(--shadow);
    border-left: 4px solid var(--primary-color);
    display: flex;
    justify-content: space-between;
    align-items: center; /* Vertically center buttons */
    transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.paper-item:hover {
    transform: translateY(-2px);
    box-shadow: var(--shadow-hover);
}

/* Wrapper for Title and Date */
.paper-text-content {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
    flex: 1; /* Takes up remaining space */
    margin-right: 2rem; /* Space between text and buttons */
}

.paper-title {
    font-size: 1.1rem;
    font-weight: 600;
    color: var(--text-dark);
}

/* Date Style */
.paper-date {
    font-size: 0.9rem;
    color: var(--secondary-color); /* Uses your secondary green theme */
    font-weight: 500;
    display: flex;
    align-items: center;
    gap: 5px;
}

.paper-btn-group {
    display: flex;
    gap: 10px;
    flex-shrink: 0; /* Prevents buttons from shrinking */
}

/* Buttons for Paper List */
.btn-sm {
    padding: 0.5rem 1rem;
    font-size: 0.9rem;
    border-radius: 4px;
    text-decoration: none;
    font-weight: 500;
    transition: all 0.3s ease;
    display: inline-block;
    text-align: center;
}

.btn-paper {
    background-color: var(--bg-light);
    color: var(--primary-color);
    border: 1px solid var(--accent-color);
}

.btn-paper:hover {
    background-color: var(--accent-color);
    color: white;
}

.btn-code {
    background-color: var(--text-dark);
    color: white;
    border: 1px solid var(--text-dark);
}

.btn-code:hover {
    background-color: #000;
    transform: translateY(-2px);
}

/* Responsive adjustments */
@media (max-width: 768px) {
    .navbar .container,
    .nav-menu { flex-direction: column; gap: 1rem; text-align: center; }
    .hero-title, .section-title { font-size: 2rem; }
    .research-grid, .activities-grid, .collaboration-content, .team-grid { grid-template-columns: 1fr; }
}

@media (max-width: 600px) {
    .paper-item {
        flex-direction: column;
        align-items: flex-start;
        gap: 1rem;
    }
    .paper-text-content {
        margin-right: 0;
    }
    .paper-btn-group {
        width: 100%;
    }
    .btn-sm {
        flex: 1;
    }
}
