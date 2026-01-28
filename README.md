
# Renewable Product AND TCSC-AI Research Institute Website

This is a **pure static website template** designed for research institutes or academic individuals. It is built using HTML, CSS, and JavaScript, requiring no backend server (like Node.js or Python), making it perfect for deployment on **GitHub Pages**.

The core feature of this project is its **Data-Driven Architecture**: almost all website content (Publications, Team, Research Focus, etc.) is managed via a single configuration file (`config.js`). You do not need to edit HTML code to update your content.

## 📂 Project Structure

Ensure your folder structure looks like this:

```text
my-website/
│
├── index.html       # Main website file (Structure, Navigation, Layout)
├── style.css        # Stylesheet (Colors, Layouts, Visuals)
├── script.js        # Logic script (Renders content from config.js)
├── config.js        # 【Core Config】Manage ALL your content here
├── README.md        # Documentation
│
└── papers/          # (Optional) Folder to store local PDF files
    ├── demo.pdf
    └── ...

```

---

## 🚀 Quick Start

1. **Download or Clone** this project to your local machine.
2. Double-click `index.html` to open it in your browser. You will see the website running immediately.

---

## 📝 How to Manage Content

You can control the entire website content by editing **`config.js`**. The file is divided into 5 main sections:

### 1. About the Institute (`aboutContent`)

This is an array of strings. Each string represents a paragraph in the "About" section. You can use HTML tags like `<strong>` for bold text.

```javascript
const aboutContent = [
    "<strong>My Institute</strong> is a great place...", // Paragraph 1
    "We focus on AI and Energy..."                     // Paragraph 2
];

```

### 2. Research Focus (`researchFocus`)

Define your key research areas here.

* `icon`: An emoji or text icon.
* `title`: The title of the card.
* `description`: A short description.

```javascript
const researchFocus = [
    {
        icon: "🌱",
        title: "Renewable Products",
        description: "Research on sustainable development..."
    }
];

```

### 3. Publications (`paperList`)

Manage your papers and projects.

* `title`: Paper title.
* `date`: Publication date (e.g., "2026-01-15").
* `file`: Direct link to the PDF.
* **Remote**: `"https://arxiv.org/..."`
* **Local**: `"papers/filename.pdf"`


* `code`: GitHub URL. Leave empty `""` to hide the button.

```javascript
const paperList = [
    {
        title: "Adaptive Gradient-Field Poisson Blending",
        date: "2025-12-20",
        file: "[https://arxiv.org/pdf/2101.00001.pdf](https://arxiv.org/pdf/2101.00001.pdf)", 
        code: "[https://github.com/your-username/project-2](https://github.com/your-username/project-2)"
    },
    {
        title: "My Local Paper",
        date: "2026-01-15",
        file: "papers/my-file.pdf", 
        code: ""
    }
];

```

### 4. Collaboration (`collaborationList`)

Manage partnership opportunities.

* `link`: (Optional) URL to navigate to when clicked.
* `scrollTarget`: Set to `true` if the link is an ID on the same page (e.g., `#team`).

```javascript
const collaborationList = [
    {
        title: "Academic Partnerships",
        description: "We collaborate with universities..."
    },
    {
        title: "Join Us",
        description: "View our open positions.",
        link: "#contact",
        linkText: "Contact Us",
        scrollTarget: true
    }
];

```

### 5. Research Team (`teamMembers`)

Manage your team members.

* `department`: (Optional) Department name.

```javascript
const teamMembers = [
    {
        name: "Dr. John Doe",
        role: "Lead Researcher",
        department: "AI Division",
        location: "Tokyo, Japan"
    }
];

```

---

## 🎨 How to Edit Static Layout

To change the basic website structure, navigation menu items, or the "Contact Us" static text at the bottom, you will need to edit **`index.html`** directly.

However, 90% of the content is now managed dynamically via `config.js`.

---

## ☁️ How to Deploy to GitHub Pages

1. **Upload Code**: Push or upload all files to your GitHub repository.
2. **Go to Settings**: Click the **Settings** tab at the top of your repository.
3. **Find Pages**: In the left sidebar, click on **Pages**.
4. **Select Branch**: Under "Build and deployment", select the `main` (or `master`) branch and click **Save**.
5. **Wait**: Wait about 1-2 minutes. GitHub will provide a link (usually `https://your-username.github.io/repo-name/`). Click it to visit your site.

---

## ⚠️ FAQ

**Q: I updated `config.js`, but the website didn't change?**
A: This is usually due to browser caching. Please try a **Hard Refresh**:

* **Windows/Linux**: Press `Ctrl + F5`
* **Mac**: Press `Command + Shift + R`

**Q: The "Paper" button shows a 404 Not Found error?**
A: Please check:

1. If it's a local file, ensure the file is actually inside the `papers/` folder and the filename matches exactly (case-sensitive) with what is in `config.js`.
2. If it's a remote link, ensure the URL is correct and accessible.

**Q: Do I need to install Node.js?**
A: **No**. This is a pure static project. It runs on any computer with a browser.

---

## 📜 License

[Add your license here, e.g., MIT License]
