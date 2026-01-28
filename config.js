// =====================================================================
// 🟢 全局配置文件 (Global Configuration)
// =====================================================================

const siteConfig = {
    
    // 1. 关于我们 (About Section)
    // 支持 HTML 标签，例如 <strong> 加粗
    about: [
        {
            text: "<strong>Renewable Product AND TCSC-AI</strong> is an independent, non-profit research organization committed to advancing knowledge and innovation at the intersection of renewable products and artificial intelligence, with a specific emphasis on TCSC-AI technologies. TCSC-AI was created in 2023.",
            isLead: true //这一段会用大号字体显示
        },
        {
            text: "Our institute operates with a mission to bridge the gap between theoretical research and practical applications, fostering innovation that addresses real-world challenges in renewable energy and artificial intelligence domains.",
            isLead: false
        },
        {
            text: "As a non-profit organization, we are driven by the pursuit of knowledge and the advancement of science, rather than commercial interests. This allows us to focus on long-term research goals and collaborative partnerships that benefit the broader scientific community.",
            isLead: false
        }
    ],

    // 2. 研究方向 (Research Focus)
    researchFocus: [
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
    ],

    // 3. 论文列表 (Publications & Open Source)
    // ✅ 新增：date 字段 (YYYY-MM-DD)
    publications: [
        {
            title: "Variational Causal-Graph Enhanced Network for Robust Fashion Popularity Forecasting",
            date: "2024-01-15", // 精确到日
            file: "papers/paper1.pdf",
            code: "https://github.com/your-username/project-1"
        },
        {
            title: "Adaptive Gradient-Field Poisson Blending for High-Fidelity Facial Video Synthesis",
            date: "2023-11-20",
            file: "https://arxiv.org/pdf/2101.00001.pdf", // 远程链接示例
            code: "https://github.com/your-username/project-2"
        },
        {
            title: "Penetrative Cross-Domain Financial Risk Monitoring via Distributed Knowledge-Graph",
            date: "2023-09-05",
            file: "papers/paper3.pdf", 
            code: "" // 无代码
        },
        {
            title: "Analyzing Geometric Parameters in Inclined Enclosures Using Artificial Neural Networks",
            date: "2023-08-12",
            file: "papers/paper4.pdf",
            code: "https://github.com/your-username/project-4"
        }
    ],

    // 4. 合作与伙伴 (Collaboration)
    collaboration: [
        {
            title: "Academic Partnerships",
            description: "We actively collaborate with academic institutions and individual researchers on joint projects, fostering a collaborative research environment that leverages diverse expertise and resources."
        },
        {
            title: "Research Team",
            description: "To support our mission and research activities, the institute directly employs individual researchers as part of our core team, bringing together talented professionals dedicated to advancing our research goals.",
            buttonText: "View Team Members",
            buttonLink: "#team" // 点击跳转到团队部分的锚点
        },
        {
            title: "Open Collaboration",
            description: "We welcome opportunities to work with researchers, institutions, and organizations that share our commitment to advancing knowledge in renewable products and artificial intelligence."
        }
    ],

    // 5. 研究团队 (Research Team)
    team: [
        { name: "Faraji Hamid", role: "Renewable Product and TCSC-AI Management", location: "Istanbul, Turkey", icon: "👤" },
        { name: "Furukawa Noritoshi", role: "Renewable Product and TCSC-AI Management", department: "Department of Electrical Engineering", location: "Tokyo, Japan", icon: "👤" },
        { name: "Jamal Farah", role: "Renewable Product and TCSC-AI Management", location: "Istanbul, Turkey", icon: "👤" },
        { name: "Karam Iman", role: "Renewable Product and TCSC-AI Management", location: "Ankara, Turkey", icon: "👤" },
        { name: "Khaki Mehrdad", role: "Renewable Product and TCSC-AI Management", location: "Tehran, Iran", icon: "👤" },
        { name: "Oikawa Hitoshi", role: "Renewable Product and TCSC-AI Management", department: "Department of Electrical Engineering", location: "Tokyo, Japan", icon: "👤" },
        { name: "Samad Nasir", role: "Renewable Product and TCSC-AI Management", location: "Tokyo, Japan", icon: "👤" },
        { name: "Suzuki Kengo", role: "Renewable Product and TCSC-AI Management", location: "Hokkaido, Japan", icon: "👤" }
    ]
};
