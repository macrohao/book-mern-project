# 图书管理系统 (MERN Stack)

一个基于 MERN (MongoDB, Express, React, Node.js) 全栈技术栈开发的简易图书管理系统，实现了图书信息的增删改查(CRUD)核心功能。

## 项目介绍
该图书管理系统旨在提供一个轻量、易用的图书信息管理工具，支持图书的添加、查看、编辑和删除操作，前后端分离架构保证了系统的可扩展性和维护性。

### 核心功能
- ✅ 图书列表展示（支持查看所有图书信息）
- ✅ 新增图书（录入图书名称、作者出版日期信息）
- ✅ 编辑图书（修改已有图书的信息）
- ✅ 删除图书（移除不需要的图书记录）
- ✅ 图书信息校验（基础的表单验证）

## 技术栈
### 前端 (Frontend)
- React (UI 框架)
- React Router (路由管理)
- Axios (HTTP 请求库)
- TailwindCSS
- React Hook (状态管理，如 useState, useEffect)

### 后端 (Backend)
- Node.js (JavaScript 运行环境)
- Express (Node.js Web 框架)
- MongoDB (NoSQL 数据库)
- Mongoose (MongoDB ODM 工具)
- CORS (跨域资源共享)


## 环境要求
- Node.js (25.2.1荐)
- npm  (包管理工具)
- MongoDB (本地部署)
- Git (版本控制)

## 快速开始

### 1. 克隆项目
```bash
git clone git@github.com:macrohao/book-mern-project.git
cd book-mern-project
```

### 2. 安装依赖

#### 后端依赖安装
```bash
# 进入后端目录
cd backend
npm install
```

#### 前端依赖安装
```bash
# 回到项目根目录
cd ..
# 进入前端目录
cd frontend
npm install
```

### 3. 配置环境变量
#### 后端环境变量
在后端目录下 `config.js` 文件中，添加以下配置（根据你的实际情况修改）：
```
# 端口号
PORT=5555
# MongoDB 连接字符串
MONGO_URI=mongodb://localhost:27017/book-store-mern
```

### 4. 启动项目
#### 启动后端服务
```bash
# 进入后端目录
cd backend
# 开发模式启动（需提前安装nodemon：npm install -g nodemon）
npm run dev
```
后端服务启动后，访问 `http://localhost:5555` 可验证是否运行（可根据你的端口修改）。

#### 启动前端服务
```bash
# 进入前端目录
cd frontend
# 启动开发服务器
npm run dev
```
前端启动后，浏览器会自动打开 `http://localhost:5173`（默认端口）。

### 5. 访问系统
- 前端页面：`http://localhost:5173`
- 后端API示例：
  - 获取所有图书：`GET http://localhost:5555/books`
  - 添加图书：`POST http://localhost:5555/books`
  - 编辑图书：`PUT http://localhost:5555/books/:id`
  - 删除图书：`DELETE http://localhost:5555/books/:id`

## 项目结构（参考）
```
BOOKSTORE_MERN_PROJECT/
├── backend/                      # 后端服务目录
│   ├── model/                    # 数据模型
│   │   └── bookModel.js          # 图书数据模型
│   ├── node_modules/             # 后端依赖包
│   ├── routes/                   # 路由定义
│   │   └── bookRoute.js          # 图书相关API路由
│   ├── api.http                  # HTTP接口测试文件
│   ├── config.js                 # 配置文件（MongoDB连接）
│   ├── index.js                  # 后端服务入口
│   ├── package-lock.json         # 依赖版本锁定
│   └── package.json              # 后端项目配置
├── frontend/                     # 前端应用目录
│   ├── node_modules/             # 前端依赖包
│   ├── public/                   # 静态文件
│   ├── src/                      # 前端源码
│   │   ├── assets/               # 静态资源
│   │   ├── components/           # 通用组件
│   │   │   ├── BackButton.jsx    # 返回按钮
│   │   │   ├── Spinner.jsx       # 加载动画
│   │   │   └── home/             # 首页组件
│   │   │       ├── BookModel.jsx
│   │   │       ├── BooksCard.jsx
│   │   │       ├── BookSingleCard.jsx
│   │   │       └── BooksTable.jsx
│   │   ├── pages/                # 页面组件
│   │   │   ├── CreateBooks.jsx   # 新增图书
│   │   │   ├── DeleteBook.jsx    # 删除图书
│   │   │   ├── EditBook.jsx      # 编辑图书
│   │   │   ├── Home.jsx          # 首页
│   │   │   └── ShowBook.jsx      # 图书详情
│   │   ├── App.jsx               # 根组件
│   │   ├── index.css             # 全局样式
│   │   └── main.jsx              # 前端入口
│   ├── .eslintrc.cjs             # ESLint配置
│   ├── .gitignore                # Git忽略规则
│   ├── index.html                # HTML模板
│   ├── package-lock.json         # 依赖版本锁定
│   ├── package.json              # 前端项目配置
│   ├── postcss.config.js         # PostCSS配置
│   ├── README.md                 # 前端说明文档
│   ├── tailwind.config.js        # TailwindCSS配置
│   └── vite.config.js            # Vite配置
└── README.md                     # 项目根说明文档
```

## 待优化/扩展功能（可选）
- 添加用户认证（JWT）
- 图书分类/搜索功能
- 分页展示图书列表
- 数据导出（Excel/PDF）
- 前端UI美化
- 单元测试/集成测试

## 常见问题
1. **MongoDB连接失败**：检查 `MONGO_URI` 是否正确，本地MongoDB是否启动，Atlas需配置IP白名单。


## 许可证（可选）
MIT License - 可自由使用、修改和分发本项目。

