# Renewable Product AND TCSC-AI Research Institute Website

This is a **pure static website template** designed for research institutes or academic individuals. It is built using HTML, CSS, and JavaScript, requiring no backend server (like Node.js or Python), making it perfect for deployment on **GitHub Pages**.

The core feature of this project is the **Dynamic Publications List**: simply edit a single configuration file (`config.js`), and the "Publications" section on the website will update automatically. It supports both local PDF files and remote links (e.g., arXiv).

## 📂 Project Structure

Ensure your folder structure looks like this:

```text
my-website/
│
├── index.html       # Main website file (Structure, Navigation, Content)
├── style.css        # Stylesheet (Colors, Layouts, Visuals)
├── script.js        # Logic script (Animations, Rendering the paper list)
├── config.js        # 【Core Config】Manage your publications data here
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

## 📝 How to Manage Publications

This is the main feature of the project. You do not need to touch the HTML code; just edit the `config.js` file.

### 1. Open `config.js`

Open the file using a text editor (like Notepad) or a code editor (like VS Code).

### 2. Add or Edit Entries

Add new objects to the `paperList` array. Each paper object contains three properties:

* `title`: The title displayed on the list.
* `file`: The link opened when the "Paper" button is clicked.
* **Remote Link**: Enter the full URL (e.g., `https://arxiv.org/pdf/xxx`).
* **Local File**: Enter the relative path (e.g., `papers/my-file.pdf`), ensuring the file exists in the `papers` folder.


* `code`: The link opened when the "Code" button is clicked. If left empty `""`, the button will automatically hide.

### ✅ Configuration Examples

```javascript
const paperList = [
    // Example 1: Remote Link (e.g., arXiv)
    {
        title: "Adaptive Gradient-Field Poisson Blending for Video Synthesis",
        file: "[https://arxiv.org/pdf/2101.00001.pdf](https://arxiv.org/pdf/2101.00001.pdf)", 
        code: "[https://github.com/your-username/project-2](https://github.com/your-username/project-2)"
    },

    // Example 2: Local File (File must be in the 'papers' folder)
    {
        title: "Variational Causal-Graph Enhanced Network",
        file: "papers/my-local-paper.pdf",
        code: "[https://github.com/your-username/project-1](https://github.com/your-username/project-1)"
    },

    // Example 3: No Code Link (The Code button will be hidden)
    {
        title: "A Pure Theoretical Review of TCSC-AI",
        file: "[https://example.com/paper.pdf](https://example.com/paper.pdf)", 
        code: "" 
    }
];

```

---

## 🎨 How to Edit Content

To change static text like "About Us," "Team Members," or "Contact Info," you need to edit `index.html` directly.

### Editing Team Members

Find the `<section id="team">` part in the HTML file:

```html
<div class="team-member">
    <div class="member-icon">👤</div>
    <h3>Member Name</h3> <p class="member-role">Position/Role</p> <p class="member-location">📍 Location</p> </div>

```

### Editing Contact Info

Find the `<section id="contact">` part and edit the text content directly.

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
