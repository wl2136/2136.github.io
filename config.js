const platformConfig = {
    // ==========================================
    // 1. Papers & Resources Data
    // ==========================================
    // type options: 'preprint', 'published', 'assignment'
    // subject options: 'computer', 'physics', 'biology', 'mathematics'
    // ==========================================
    papers: [
        {
            id: 1,
            title: "Optimization of Image Classification Algorithms Based on Deep Learning",
            authors: "Wei Zhang, Na Li, Lei Wang",
            type: "preprint",
            subject: "computer",
            abstract: "This paper proposes an improved ResNet architecture that achieves 96.8% accuracy on the CIFAR-10 dataset. We introduce a novel attention mechanism...",
            keywords: ["Deep Learning", "ResNet", "Image Classification"],
            pdfUrl: "https://arxiv.org/pdf/2305.12345.pdf",
            hasCode: true,
            codeUrl: "https://github.com/example/repo",
            downloadCount: 1248,
            date: "2025-12-15",
            versions: ["v1.2 (2025-12-15)", "v1.1 (2025-11-28)", "v1.0 (2025-10-10)"],
            adminNote: "Passed initial review. Code repository is publicly available."
        },
        {
            id: 2,
            title: "Applications of Quantum Entanglement in Quantum Communication",
            authors: "Jing Chen, Ming Liu",
            type: "published",
            subject: "physics",
            abstract: "This review summarizes recent advances in quantum entanglement for quantum key distribution and quantum repeaters.",
            keywords: ["Quantum Entanglement", "Quantum Communication", "QKD"],
            pdfUrl: "https://arxiv.org/pdf/2401.09876.pdf",
            hasCode: false,
            codeUrl: "",
            downloadCount: 892,
            date: "2025-01-20",
            versions: ["v1.0 (2025-01-20)"],
            adminNote: "Formally published in Acta Physica Sinica, Volume 2025, Issue 3."
        },
        {
            id: 3,
            title: "Machine Learning-Assisted Protein Structure Prediction - Course Assignment",
            authors: "Student: Yang Zhao (Supervisor: Professor Sun)",
            type: "assignment",
            subject: "biology",
            abstract: "Using AlphaFold3 to predict the structures of 10 unknown proteins and analyze confidence scores.",
            keywords: ["AlphaFold", "Protein Structure", "Bioinformatics"],
            pdfUrl: "https://arxiv.org/pdf/2310.04567.pdf",
            hasCode: true,
            codeUrl: "https://github.com/student/alphafold-project",
            downloadCount: 342,
            date: "2025-11-05",
            versions: ["v1.0 (2025-11-05)"],
            adminNote: "Outstanding course assignment. Code includes complete training scripts."
        },
        {
            "id": 4,
            "title": "Utilizing the Thermal Energy from Natural Gas Engines and the Cold Energy of LNG to Satisfy the Heat, Power, and Cooling Demands of Carbon Capture and Storage in Maritime Decarbonization: Engineering, Enhancement, and 4E Analysis",
            "authors": "Student name: an unnamed individual (Supervisor: Ali Basem)",
            "type": "assignment",
            "subject": "physics",
            "abstract": "This course design explores an integrated maritime energy system that combines waste thermal energy from natural gas engines with the cold energy released during LNG regasification to satisfy the heat, power, and cooling requirements of onboard carbon capture and storage (CCS) systems. The project emphasizes engineering system configuration, performance enhancement strategies, and a comprehensive 4E (energy, exergy, economic, and environmental) analysis to evaluate efficiency improvements and decarbonization potential.",
            "keywords": ["Maritime Decarbonization", "Carbon Capture and Storage", "LNG Cold Energy", "Natural Gas Engine", "4E Analysis"],
            "pdfUrl": "https://academic.oup.com/ijlct/article-pdf/doi/10.1093/ijlct/ctae160/59035230/ctae160.pdf",
            "hasCode": false,
            "codeUrl": "",
            "downloadCount": 0,
            "date": "2024-02-25",
            "versions": ["v1.0 (2024-02-25)"],
            "adminNote": "Course design project. The topic is aligned with a later Open Access journal publication in International Journal of Low-Carbon Technologies (2024)."
        }
    ],

    // // ==========================================
    // // 2. About Section
    // // ==========================================
    // // Each string in the array represents a new paragraph.
    // // HTML tags (like <strong>) are supported.
    // // ==========================================
    // about: {
    //     title: "About The Platform",
    //     paragraphs: [
    //         "<strong>Academic Sharing Platform</strong> is an independent repository dedicated to the dissemination of student assignments, preprints, and published research. Our mission is to facilitate open access to knowledge across various disciplines.",
    //         "Established in 2024, we provide a streamlined environment for students and researchers to showcase their work, receive feedback, and collaborate on future projects. We strictly adhere to academic integrity standards.",
    //         "This platform serves as a bridge between theoretical learning and practical application, ensuring that valuable academic outputs are preserved and accessible."
    //     ]
    // },

    // // ==========================================
    // // 3. Research Team
    // // ==========================================
    // // avatarColor: Use Tailwind CSS classes (e.g., 'bg-blue-100 text-blue-600')
    // // ==========================================
    // team: [
    //     {
    //         name: "Dr. Faraji Hamid",
    //         role: "Platform Director",
    //         location: "Istanbul, Turkey",
    //         avatarColor: "bg-blue-100 text-blue-600"
    //     },
    //     {
    //         name: "Prof. Furukawa Noritoshi",
    //         role: "Technical Advisor",
    //         location: "Tokyo, Japan",
    //         avatarColor: "bg-purple-100 text-purple-600"
    //     },
    //     {
    //         name: "Dr. Oikawa Hitoshi",
    //         role: "Content Manager",
    //         location: "Tokyo, Japan",
    //         avatarColor: "bg-amber-100 text-amber-600"
    //     },
    //     {
    //         name: "Khaki Mehrdad",
    //         role: "System Administrator",
    //         location: "Tehran, Iran",
    //         avatarColor: "bg-emerald-100 text-emerald-600"
    //     }
    // ],

    // // ==========================================
    // // 4. Contact Information
    // // ==========================================
    // contact: {
    //     title: "Contact Us",
    //     description: "For inquiries about research submission, collaboration opportunities, or platform issues, please reach out to us.",
    //     email: "contact@academic-sharing.org",
    //     address: "123 Academic Avenue, Innovation District",
    //     note: "We typically respond within 24-48 hours."
    // }
};
