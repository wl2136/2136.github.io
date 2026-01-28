const fs = require('fs');
const path = require('path');

// 配置
const PAPERS_DIR = 'papers';
const OUTPUT_FILE = 'papers_data.js';
const VALID_EXTENSIONS = ['.pdf', '.doc', '.docx'];

function generateConfig() {
    let existingMap = new Map();
    
    // 1. 读取旧数据（为了保留你填写的 Code 链接）
    if (fs.existsSync(OUTPUT_FILE)) {
        try {
            const content = fs.readFileSync(OUTPUT_FILE, 'utf-8');
            const match = content.match(/const papers = (\[.*\]);/s);
            if (match && match[1]) {
                const data = JSON.parse(match[1]);
                data.forEach(item => existingMap.set(item.filename, item));
            }
        } catch (e) { console.log("Old data parse error, skipping."); }
    }

    // 2. 扫描文件夹
    if (!fs.existsSync(PAPERS_DIR)) {
        fs.mkdirSync(PAPERS_DIR);
        console.log(`Created folder: ${PAPERS_DIR}`);
    }

    const files = fs.readdirSync(PAPERS_DIR);
    const newData = [];
    files.sort();

    files.forEach(file => {
        const ext = path.extname(file).toLowerCase();
        if (!VALID_EXTENSIONS.includes(ext)) return;

        const relativePath = `${PAPERS_DIR}/${file}`;
        
        // 如果旧数据里有，就用旧的（保留 code_link），否则创建新的
        if (existingMap.has(relativePath)) {
            newData.push(existingMap.get(relativePath));
        } else {
            newData.push({
                "title": path.basename(file, ext),
                "filename": relativePath,
                "code_link": "" // 等待手动填写
            });
            console.log(`[New] ${file}`);
        }
    });

    // 3. 生成 JS 文件
    const jsContent = `const papers = ${JSON.stringify(newData, null, 4)};`;
    fs.writeFileSync(OUTPUT_FILE, jsContent, 'utf-8');
    console.log(`Done! Updated ${OUTPUT_FILE} with ${newData.length} items.`);
}

generateConfig();