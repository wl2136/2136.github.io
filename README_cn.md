# 研究机构网站模板

这是一个专为研究机构或学术个人设计的**纯静态网站模板**。它使用 HTML、CSS 和 JavaScript 构建，无需任何后端服务器（如 Node.js 或 Python），非常适合直接部署在 **GitHub Pages** 上。

本项目的核心特性是**数据驱动架构**：网站上几乎所有的内容（包括论文列表、团队成员、研究方向、关于我们等）都通过一个单一的配置文件 (`config.js`) 进行管理。您无需修改 HTML 代码即可更新网站内容。

## 📂 项目结构

请确保您的文件夹结构如下所示：

```text
my-website/
│
├── index.html       # 网站主文件 (负责整体结构、导航栏、布局)
├── style.css        # 样式表 (负责配色、排版、视觉效果)
├── script.js        # 逻辑脚本 (负责动画效果、从配置文件渲染内容)
├── config.js        # 【核心配置】在此文件中管理网站的所有数据
├── README.md        # 说明文档
│
└── papers/          # (可选) 用于存放本地 PDF 文件的文件夹
    ├── demo.pdf
    └── ...

```

---

## 🚀 快速开始

1. **下载或克隆**本项目到您的本地电脑。
2. 直接双击 `index.html` 在浏览器中打开。您将立即看到网站运行效果。

---

## 📝 如何管理网站内容

您可以通过编辑 **`config.js`** 文件来控制整个网站的内容。该文件主要分为 5 个部分：

### 1. 关于我们 (`aboutContent`)

这是一个字符串数组。数组中的每个字符串代表“关于我们”部分的一段话。您可以使用如 `<strong>` 等 HTML 标签来加粗文字。

```javascript
const aboutContent = [
    "<strong>My Institute</strong> 是一个致力于...", // 第一段
    "我们专注于人工智能与能源领域的研究..."           // 第二段
];

```

### 2. 研究方向 (`researchFocus`)

在此定义您的核心研究领域卡片。

* `icon`: 图标（可以使用 Emoji 或文字）。
* `title`: 卡片标题。
* `description`: 简短描述。

```javascript
const researchFocus = [
    {
        icon: "🌱",
        title: "可再生产品",
        description: "致力于可持续发展的创新解决方案研究..."
    }
];

```

### 3. 论文与成果 (`paperList`)

管理您的论文和项目代码。

* `title`: 论文标题。
* `date`: 发表日期 (例如 "2026-01-15")。
* `file`: PDF 文件的直接链接。
* **远程链接**: 填完整 URL，如 `"https://arxiv.org/..."`
* **本地文件**: 填相对路径，如 `"papers/filename.pdf"` (需确保文件在 papers 文件夹内)


* `code`: GitHub 仓库链接。如果留空 `""`，按钮会自动隐藏。

```javascript
const paperList = [
    {
        title: "Adaptive Gradient-Field Poisson Blending",
        date: "2025-12-20",
        file: "[https://arxiv.org/pdf/2101.00001.pdf](https://arxiv.org/pdf/2101.00001.pdf)", 
        code: "[https://github.com/your-username/project-2](https://github.com/your-username/project-2)"
    },
    {
        title: "我的本地论文",
        date: "2026-01-15",
        file: "papers/my-file.pdf", 
        code: ""
    }
];

```

### 4. 合作与伙伴 (`collaborationList`)

管理合作机会板块。

* `link`: (可选) 点击后的跳转链接。
* `scrollTarget`: 如果链接是当前页面的某个 ID（例如跳转到团队介绍 `#team`），请设为 `true` 以启用平滑滚动。

```javascript
const collaborationList = [
    {
        title: "学术合作伙伴",
        description: "我们与多所大学保持紧密合作..."
    },
    {
        title: "加入我们",
        description: "查看我们的开放职位。",
        link: "#contact",
        linkText: "联系我们",
        scrollTarget: true
    }
];

```

### 5. 研究团队 (`teamMembers`)

管理团队成员卡片。

* `department`: (可选) 部门或系所名称。

```javascript
const teamMembers = [
    {
        name: "张三 博士",
        role: "首席研究员",
        department: "AI 事业部",
        location: "中国, 北京"
    }
];

```

---

## 🎨 如何修改静态布局

如果您需要修改网站的基础结构、导航栏菜单项名称，或者底部的“联系我们”静态文本，您需要直接编辑 **`index.html`** 文件。

不过，网站 90% 的核心内容现在都可以通过 `config.js` 动态管理。

---

## ☁️ 如何部署到 GitHub Pages

1. **上传代码**: 将包含所有文件的文件夹上传到您的 GitHub 仓库。
2. **进入设置**: 点击仓库顶部的 **Settings** (设置) 选项卡。
3. **找到 Pages**: 在左侧边栏中点击 **Pages**。
4. **选择分支**: 在 "Build and deployment" 下方，选择 `main` (或 `master`) 分支，然后点击 **Save** (保存)。
5. **等待构建**: 等待约 1-2 分钟。GitHub 会生成一个链接（通常是 `https://您的用户名.github.io/仓库名/`）。点击该链接即可访问您的网站。

---

## ⚠️ 常见问题 (FAQ)

**Q: 我更新了 `config.js`，但网页内容没有变化？**
A: 这通常是浏览器缓存导致的。请尝试**强制刷新**页面：

* **Windows/Linux**: 按 `Ctrl + F5`
* **Mac**: 按 `Command + Shift + R`

**Q: 点击 "Paper" 按钮显示 404 Not Found 错误？**
A: 请检查以下几点：

1. 如果是本地文件，确保文件确实存在于 `papers/` 文件夹中，且**文件名大小写**与 `config.js` 中填写的完全一致。
2. 如果是远程链接，请确保该 URL 可以正常访问。

**Q: 我需要安装 Node.js 吗？**
A: **不需要**。这是一个纯静态项目，任何带有浏览器的电脑都可以直接运行。

---

## 📜 许可证

[在此处添加您的许可证，例如 MIT License]
