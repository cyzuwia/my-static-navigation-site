# 多功能静态导航网站
## 项目简介
这是一个多功能的静态导航网站，提供友链管理、实时天气和新闻信息、多语言支持、个性化设置等功能。该项目通过现代前端技术栈实现，旨在为用户提供良好的导航体验。
## 功能特性
- **友链管理**: 动态加载和展示友链信息。
- **多语言支持**: 支持中英文切换，自动检测用户语言。
- **实时数据**: 集成天气和新闻API，展示实时信息。
- **个性化设置**: 允许用户切换浅色/深色主题。
- **社交分享**: 提供社交媒体分享功能。
- **离线支持**: 使用Service Worker实现离线访问。
## 技术栈
- **前端**: React, React Router
- **样式**: CSS, Tailwind CSS（可选）
- **国际化**: i18next
- **构建工具**: Vite
- **API集成**: Fetch API
- **PWA支持**: Workbox
## 文件结构
```
/my-static-navigation-site
├── /public
│   ├── index.html
│   ├── favicon.ico
│   └── manifest.json
├── /src
│   ├── /components
│   ├── /pages
│   ├── /i18n
│   ├── /utils
│   ├── App.js
│   └── index.js
├── /config
│   ├── config.js
│   └── links.json
├── .env
├── package.json
├── vite.config.js
├── workbox-config.js
└── README.md
```
## 安装和使用
1. **克隆仓库**
   ```bash
   git clone https://github.com/yourusername/my-static-navigation-site.git
   cd my-static-navigation-site
   ```
2. **安装依赖**
   ```bash
   npm install
   ```
3. **配置环境变量**
   在项目根目录创建一个`.env`文件，并添加API密钥：
   ```plaintext
   VITE_WEATHER_API_KEY=你的天气API密钥
   VITE_NEWS_API_KEY=你的新闻API密钥
   ```
4. **运行项目**
   ```bash
   npm run dev
   ```
5. **构建项目**
   ```bash
   npm run build
   ```
6. **部署**
   将`dist`目录中的文件部署到静态服务器或使用服务如Vercel、GitHub Pages。

## 部署教程
### 部署到 GitHub Pages
1. **构建项目**
   在项目根目录运行以下命令以构建项目：
   ```bash
   npm run build
   ```
   这将生成一个`dist`目录，包含了可以部署的静态文件。
2. **创建 GitHub 仓库**
   如果还没有，请在GitHub上创建一个新的仓库。
3. **推送代码到 GitHub**
   确保在项目根目录下，初始化Git仓库（如果尚未初始化），并将代码推送到GitHub：
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git branch -M main
   git remote add origin https://github.com/yourusername/your-repo-name.git
   git push -u origin main
   ```
4. **配置 GitHub Pages**
   - 进入你的GitHub仓库，点击“Settings”。
   - 在左侧菜单中，找到“Pages”。
   - 在“Source”部分，选择“Branch: main”，并选择“/ (root)”或“/dist”目录（如果使用分支策略）。
   - 保存设置，GitHub Pages将自动部署。
5. **访问你的网站**
   部署完成后，你可以通过`https://yourusername.github.io/your-repo-name`访问你的静态网站。
### 部署到 Vercel
1. **注册 Vercel**
   如果还没有Vercel账户，请先注册并登录到Vercel。
2. **连接 GitHub 仓库**
   - 在Vercel仪表板中，点击“New Project”。
   - 选择“Import Git Repository”，并选择你的GitHub仓库。
   - Vercel会自动检测项目的框架（如React）并提供默认的构建设置。
3. **配置部署设置**
   - 确保“Build Command”设置为`npm run build`。
   - “Output Directory”应设置为`dist`。
   - 点击“Deploy”按钮开始部署。
4. **访问你的网站**
   部署完成后，Vercel将提供一个临时域名，你可以通过该域名访问你的网站。此外，你可以在Vercel设置中配置自定义域名。
### 部署到 Netlify
1. **注册 Netlify**
   如果还没有Netlify账户，请先注册并登录到Netlify。
2. **连接 GitHub 仓库**
   - 在Netlify仪表板中，点击“New site from Git”。
   - 选择GitHub，并授权Netlify访问你的仓库。
   - 选择你的项目仓库。
3. **配置部署设置**
   - “Build Command”设置为`npm run build`。
   - “Publish directory”设置为`dist`。
   - 点击“Deploy site”按钮开始部署。
4. **访问你的网站**
   部署完成后，Netlify将提供一个临时域名，你可以通过该域名访问你的网站。你也可以在Netlify设置中配置自定义域名。

## 贡献
欢迎对本项目的贡献！请提交Pull Request或Issue以提出建议或报告问题。

## 许可证
该项目使用MIT许可证，详情请参阅LICENSE文件。
