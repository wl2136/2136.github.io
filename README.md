# Academic Sharing Platform

This is a **static website** designed for academic repositories, research labs, or preprint servers. It is built using **HTML5**, **JavaScript**, and **Tailwind CSS** (via CDN).

It requires **no backend server** (like Node.js, Python, or PHP), making it perfect for instant deployment on **GitHub Pages**, Netlify, or Vercel.

## ✨ Key Features

* **Data-Driven**: All content is managed via a single `config.js` file.
* **Zero Build Step**: Uses Tailwind via CDN for instant development.
* **Search & Filter**: Built-in real-time search by title, author, or abstract.
* **PDF Integration**: Integrated PDF viewer (via Google Docs Viewer or PDF.js) and download tracking UI.
* **Responsive**: Fully mobile-friendly layout.

## 📂 Project Structure

Ensure your folder structure looks like this:

```text
my-website/
│
├── index.html       # Main website structure (Tailwind classes & Layout)
├── config.js        # 【Core Config】Manage ALL data (Papers, Team, Contact) here
├── README.md        # Documentation
│
└── papers/          # (Optional) Folder to store local PDF files
    ├── demo.pdf
    └── ...

```

*(Note: `style.css` and `script.js` are no longer strictly necessary as logic is embedded or loaded from `config.js` and styling is handled by Tailwind, but you can keep them for custom overrides.)*

---

## 🚀 Quick Start

1. **Download** this project folder.
2. Double-click `index.html` to open it in your browser.
3. You will see the website running immediately.

---

## 📝 How to Manage Content

You can control the entire website content by editing **`config.js`**. The configuration is wrapped in a single object called `platformConfig`.

### 1. Papers & Resources (`platformConfig.papers`)

This is the main database. Add your research items here.

* `type`: Options are `'preprint'`, `'published'`, or `'assignment'`.
* `subject`: Options are `'computer'`, `'physics'`, `'biology'`, `'mathematics'` (matches the filter dropdown).
* `pdfUrl`: Can be a local path (`papers/doc.pdf`) or a remote URL (`https://arxiv.org/...`).

```javascript
papers: [
    {
        id: 1,
        title: "Optimization of Image Classification Algorithms",
        authors: "Wei Zhang, Na Li",
        type: "preprint",       // affects badge color
        subject: "computer",    // affects filtering
        abstract: "This paper proposes...",
        keywords: ["Deep Learning", "ResNet"],
        pdfUrl: "[https://arxiv.org/pdf/2305.12345.pdf](https://arxiv.org/pdf/2305.12345.pdf)",
        hasCode: true,
        codeUrl: "[https://github.com/example/repo](https://github.com/example/repo)",
        downloadCount: 1248,
        date: "2025-12-15",
        versions: ["v1.0 (2025-10-10)"],
        adminNote: "Passed initial review."
    }
    // ... add more papers here
],

```

### 2. About Us (`platformConfig.about`)

Define the content for the "About" tab.

```javascript
about: {
    title: "About The Platform",
    paragraphs: [
        "<strong>Academic Sharing Platform</strong> is an independent repository...",
        "Paragraph 2 content here..."
    ]
},

```

### 3. Research Team (`platformConfig.team`)

Manage team member cards. You can customize the avatar background color using Tailwind classes.

```javascript
team: [
    {
        name: "Dr. Faraji Hamid",
        role: "Platform Director",
        location: "Istanbul, Turkey",
        avatarColor: "bg-blue-100 text-blue-600" // Tailwind classes
    }
],

```

### 4. Contact Info (`platformConfig.contact`)

Update the contact section at the bottom of the "About" page.

```javascript
contact: {
    title: "Contact Us",
    description: "For inquiries about research submission...",
    email: "contact@academic-sharing.org",
    address: "123 Academic Avenue, Innovation District",
    note: "We typically respond within 24-48 hours."
}

```

---

## ☁️ How to Deploy to GitHub Pages

1. **Upload Code**: Push or upload all files to your GitHub repository.
2. **Go to Settings**: Click the **Settings** tab at the top of your repository.
3. **Find Pages**: In the left sidebar, click on **Pages**.
4. **Select Branch**: Under "Build and deployment", select the `main` (or `master`) branch and click **Save**.
5. **Wait**: Wait about 1-2 minutes. GitHub will provide a link. Click it to visit your site.

---

## ⚠️ FAQ

**Q: I updated `config.js`, but the website didn't change?**
A: Browser caching often keeps the old JavaScript file. Please perform a **Hard Refresh**:

* **Windows/Linux**: `Ctrl + F5`
* **Mac**: `Cmd + Shift + R`

**Q: Why do I see a "Google Docs Viewer" error for local PDFs?**
A: The template uses Google Docs Viewer for previews. This works great for remote URLs (like arXiv). For **local files** (e.g., `papers/test.pdf`), Google cannot access files on your hard drive (`file://`).

* **Solution**: Deploy the site to GitHub Pages. Once online, Google can access your files via the public URL.

**Q: How do I change the colors?**
A: The site uses **Tailwind CSS**. You can change colors in `config.js` (for team avatars) or by finding-and-replacing classes in `index.html` (e.g., replace `bg-blue-600` with `bg-red-600`).

---

## 📜 License

[Add your license here, e.g., MIT License]

```

```
