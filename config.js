/**
 * ===================================================================================
 * GLOBAL CONFIGURATION FILE
 * Manage all website content here. No need to touch HTML for content updates.
 * ===================================================================================
 */

// 1. ABOUT SECTION
const aboutConfig = {
    title: "About the Institute",
    paragraphs: [
        "<strong>Renewable Product AND TCSC-AI</strong> is an independent, non-profit research organization committed to advancing knowledge and innovation at the intersection of renewable products and artificial intelligence, with a specific emphasis on TCSC-AI technologies. TCSC-AI was created in 2023.",
        "Our institute operates with a mission to bridge the gap between theoretical research and practical applications, fostering innovation that addresses real-world challenges in renewable energy and artificial intelligence domains.",
        "As a non-profit organization, we are driven by the pursuit of knowledge and the advancement of science, rather than commercial interests. This allows us to focus on long-term research goals and collaborative partnerships that benefit the broader scientific community."
    ]
};

// 2. RESEARCH FOCUS SECTION
const researchFocusList = [
    {
        icon: "🌱",
        title: "Renewable Products",
        description: "Research and development of innovative renewable product solutions that contribute to sustainable development and environmental conservation."
    },
    {
        icon: "🤖",
        title: "Artificial Intelligence",
        description: "Advanced AI research focusing on applications that enhance efficiency, decision-making, and innovation across various domains."
    },
    {
        icon: "🔬",
        title: "TCSC-AI",
        description: "Specialized research in TCSC-AI technologies, exploring the unique intersection and applications of this cutting-edge field. TCSC-AI was created in 2023."
    }
];

// 3. PUBLICATIONS & OPEN SOURCE SECTION
// Added 'date' field (YYYY-MM-DD)
const paperList = [
    {
        title: "Variational Causal-Graph Enhanced Network for Robust Forecasting",
        date: "2026-01-10",
        file: "papers/paper1.pdf", 
        code: "https://github.com/your-username/project-1"
    },
    {
        title: "Adaptive Gradient-Field Poisson Blending for Video Synthesis",
        date: "2025-12-05",
        file: "https://arxiv.org/pdf/2101.00001.pdf",
        code: "https://github.com/your-username/project-2"
    },
    {
        title: "Penetrative Cross-Domain Financial Risk Monitoring",
        date: "2025-11-20",
        file: "papers/paper3.pdf", 
        code: "" // Empty string hides the code button
    },
    {
        title: "Analyzing Geometric Parameters in Inclined Enclosures",
        date: "2025-10-15",
        file: "papers/paper4.pdf",
        code: "https://github.com/your-username/project-4"
    }
];

// 4. COLLABORATION & PARTNERSHIPS SECTION
const collaborationList = [
    {
        title: "Academic Partnerships",
        description: "We actively collaborate with academic institutions and individual researchers on joint projects, fostering a collaborative research environment."
    },
    {
        title: "Research Team",
        description: "To support our mission, the institute directly employs individual researchers as part of our core team.",
        actionBtn: {
            text: "View Team Members",
            link: "#team" // Anchors (#id) or external links (https://...)
        }
    },
    {
        title: "Open Collaboration",
        description: "We welcome opportunities to work with researchers, institutions, and organizations that share our commitment to advancing knowledge."
    }
];

// 5. RESEARCH TEAM SECTION
const teamMembers = [
    {
        name: "Faraji Hamid",
        role: "Renewable Product and TCSC-AI Management",
        location: "Istanbul, Turkey"
    },
    {
        name: "Furukawa Noritoshi",
        role: "Renewable Product and TCSC-AI Management",
        department: "Department of Electrical Engineering",
        location: "Tokyo, Japan"
    },
    {
        name: "Jamal Farah",
        role: "Renewable Product and TCSC-AI Management",
        location: "Istanbul, Turkey"
    },
    {
        name: "Karam Iman",
        role: "Renewable Product and TCSC-AI Management",
        location: "Ankara, Turkey"
    },
    {
        name: "Khaki Mehrdad",
        role: "Renewable Product and TCSC-AI Management",
        location: "Tehran, Iran"
    },
    {
        name: "Oikawa Hitoshi",
        role: "Renewable Product and TCSC-AI Management",
        department: "Department of Electrical Engineering",
        location: "Tokyo, Japan"
    },
    {
        name: "Samad Nasir",
        role: "Renewable Product and TCSC-AI Management",
        location: "Tokyo, Japan"
    },
    {
        name: "Suzuki Kengo",
        role: "Renewable Product and TCSC-AI Management",
        location: "Hokkaido, Japan"
    }
];
