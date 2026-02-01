# 学术资源分享平台 (Academic Sharing Platform)

这是一个**静态网站**，专为学术机构、实验室或个人研究者设计，用于展示和分享论文、预印本及课程作业。本项目使用 **HTML5**、**JavaScript** 和 **Tailwind CSS** (通过 CDN) 构建。

它**无需后端服务器**（如 Node.js、Python 或 PHP），非常适合直接部署在 **GitHub Pages**、Netlify 或 Vercel 上。

## ✨ 核心特性

* **数据驱动**: 网站的所有内容（论文、团队、关于我们等）均通过一个单一的 `config.js` 文件管理。
* **零构建步骤**: 直接使用 CDN 加载 Tailwind CSS，无需安装 npm 或运行 build 命令，即改即看。
* **搜索与筛选**: 内置实时搜索功能（按标题、作者或摘要），并支持按类型和学科筛选。
* **PDF 集成**: 集成 PDF 预览功能（支持 Google Docs Viewer 预览远程文件，及 PDF.js 渲染）和下载统计 UI。
* **响应式设计**: 完美适配手机、平板和桌面端。

## 📂 项目结构

请确保您的文件夹结构如下所示：

```text
my-website/
│
├── index.html       # 网站主文件 (包含 Tailwind 类名和页面布局)
├── config.js        # 【核心配置】在此文件中管理所有数据 (论文、团队、联系方式)
├── README.md        # 说明文档
│
└── papers/          # (可选) 用于存放本地 PDF 文件的文件夹
    ├── demo.pdf
    └── ...

```

*(注意：由于使用了 Tailwind CSS 和内嵌逻辑，旧版的 `style.css` 和 `script.js` 已不再必须，但您可以保留它们用于自定义扩展。)*

---

## 🚀 快速开始

1. **下载** 本项目文件夹到本地。
2. 双击 `index.html` 在浏览器中打开。
3. 您将立即看到网站运行效果。

---

## 📝 如何管理内容

您可以通过编辑 **`config.js`** 文件来控制整个网站。所有的配置都包裹在一个名为 `platformConfig` 的对象中。

### 1. 论文与资源 (`platformConfig.papers`)

这是核心数据库。在此处添加您的研究成果。

* `type`: 可选值 `'preprint'` (预印本), `'published'` (已发表), `'assignment'` (作业)。
* `subject`: 可选值 `'computer'`, `'physics'`, `'biology'`, `'mathematics'` (对应筛选下拉菜单)。
* `pdfUrl`: 可以是本地路径 (`papers/doc.pdf`) 或 远程链接 (`https://arxiv.org/...`)。

```javascript
papers: [
    {
        id: 1,
        title: "图像分类算法的优化研究",
        authors: "张三, 李四",
        type: "preprint",       // 决定标签颜色
        subject: "computer",    // 决定筛选分类
        abstract: "本文提出了一种改进的...",
        keywords: ["深度学习", "ResNet"],
        pdfUrl: "[https://arxiv.org/pdf/2305.12345.pdf](https://arxiv.org/pdf/2305.12345.pdf)",
        hasCode: true,
        codeUrl: "[https://github.com/example/repo](https://github.com/example/repo)",
        downloadCount: 1248,
        date: "2025-12-15",
        versions: ["v1.0 (2025-10-10)"],
        adminNote: "已通过初步审核。"
    }
    // ... 在此处添加更多论文
],

```

### 2. 关于我们 (`platformConfig.about`)

定义“About”页面中的介绍内容。

```javascript
about: {
    title: "关于本平台",
    paragraphs: [
        "<strong>学术分享平台</strong> 是一个独立的知识库...",
        "第二段内容..."
    ]
},

```

### 3. 研究团队 (`platformConfig.team`)

管理团队成员卡片。您可以使用 Tailwind CSS 类名来自定义头像背景色。

```javascript
team: [
    {
        name: "Faraji Hamid 博士",
        role: "平台总监",
        location: "土耳其, 伊斯坦布尔",
        avatarColor: "bg-blue-100 text-blue-600" // Tailwind 类名
    }
],

```

### 4. 联系方式 (`platformConfig.contact`)

更新“About”页面底部的联系信息板块。

```javascript
contact: {
    title: "联系我们",
    description: "如果您有任何关于投稿或合作的疑问...",
    email: "contact@academic-sharing.org",
    address: "创新区学术大道 123 号",
    note: "我们通常在 24-48 小时内回复。"
}

```

---

## ☁️ 如何部署到 GitHub Pages

1. **上传代码**: 将包含所有文件的文件夹上传到您的 GitHub 仓库。
2. **进入设置**: 点击仓库顶部的 **Settings** (设置) 选项卡。
3. **找到 Pages**: 在左侧边栏中点击 **Pages**。
4. **选择分支**: 在 "Build and deployment" 下方，选择 `main` (或 `master`) 分支，然后点击 **Save** (保存)。
5. **等待构建**: 等待约 1-2 分钟。GitHub 会生成一个链接。点击该链接即可访问您的网站。

---

## ⚠️ 常见问题 (FAQ)

**Q: 我更新了 `config.js`，但网页内容没有变化？**
A: 这通常是浏览器缓存了旧的 JS 文件导致的。请尝试**强制刷新**页面：

* **Windows/Linux**: 按 `Ctrl + F5`
* **Mac**: 按 `Cmd + Shift + R`

**Q: 为什么预览本地 PDF (`papers/test.pdf`) 时显示错误？**
A: 模板默认使用 Google Docs Viewer 预览远程链接。对于**本地文件**，由于浏览器安全限制（`file://` 协议），Google 无法访问您硬盘上的文件。

* **解决方法**: 将网站部署到 GitHub Pages 或本地服务器（如 Live Server）。一旦网站上线，Google 即可通过公网链接访问您的文件。或者，代码中已内置 PDF.js 作为备选方案。

**Q: 如何修改颜色主题？**
A: 网站使用 **Tailwind CSS**。

* 对于团队头像颜色，直接在 `config.js` 中修改类名。
* 对于全局主题色（如按钮颜色），请在 `index.html` 中全局搜索并替换类名（例如将 `bg-blue-600` 替换为 `bg-red-600`）。

---

## 📜 许可证

[在此处添加您的许可证，例如 MIT License]

```

```
