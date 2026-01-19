```markdown
# 📚 MERN 全栈应用商店（Bookstore）

> 目前阶段：✅ 后端 RESTful 接口全部完成 | 🚧 React 前端开发中

这是一个用 **MongoDB + Express + React + Node.js** 搭建的**“类应用商店”**全栈项目。  
后端已上线，前端开发完成后即可**一键部署**，可直接作为**校招/转行作品集**里的高能项目。

---

## ✨ 已实现功能（后端）

| 模块 | 接口 | 状态 |
|---|---|---|
| 书籍管理 | 增删改查 `/books` | ✅ 完成 |
| 数据验证 | Joi 参数校验 |  未完成 |
| 跨域 | CORS 白名单配置 |  未完成 |
| 数据库 | MongoDB Atlas 云库 | 未连接(本地数据库已来凝结) |
| 文档 | Swagger 自动化文档 | 暂不访问 |

---

## 🚀 技术栈（当前）

| 层级 | 技术 |
|---|---|
| 后端 | Node.js · Express · Mongoose |
| 数据库 | MongoDB  |
| 工具 | nodemon · dotenv · cors · swagger-ui-express |


---

## 📦 快速体验（无需安装）

1. 获取全部书籍  
   ```http
   GET https://book-mern-project.onrender.com/books
   ```
2. 添加一本书（POST 示例）  
   ```http
   POST https://book-mern-project.onrender.com/books
   Content-Type: application/json

   {
     "title": "React 设计模式",
     "author": "张三",
     "publishYear": 2024
   }
   ```

---

## 🛠️ 本地开发（后端）

```bash
# 1. 克隆
git clone https://github.com/macrohao/book-mern-project.git
cd book-mern-project/backend

# 2. 安装依赖
npm install

# 3. 配置环境变量
cp .env.example .env
# 填写 MongoDB 连接串与端口

# 4. 启动
npm run dev
```
服务默认运行在 [http://localhost:5555](http://localhost:5555)

---

## 📋 下一步计划（前端 & 功能）

- [ ] React + Vite 初始化  
- [ ] 书籍列表页（分页 + 搜索）  
- [ ] 新增/编辑弹窗  
- [ ] 删除确认 + 乐观更新  
- [ ] 图片上传（封面）  
- [ ] JWT 登录 & 角色区分（用户 / 管理员）  
- [ ] Docker 化 & GitHub Action 自动部署

---

## 📂 项目结构

```
BOOKSTORE_MERN_PROJECT
├─ backend        # Express 后端（已完成）
├─ frontend       # React 前端（开发中）
├─ docs           # 截图、API 文档、流程图
└─ README.md      # 此文件
```

---

## 🤝 参与贡献

欢迎提 Issue 和 Pull Request，一起把项目做成**面试级模板仓库**！

---

## 📄 许可

MIT License © 2024 macrohao
```