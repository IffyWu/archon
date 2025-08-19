<div align="center">

**简体中文** | [English](./README_en.md)

</div>

---

<p align="center">
  <img src="./archon-ui-main/public/archon-main-graphic.png" alt="Archon 主图" width="853" height="422">
</p>

<p align="center">
  <em>为您的 AI 编程助手提供自定义知识库和任务管理功能，作为 MCP 服务器</em>
</p>

<p align="center">
  <a href="#快速开始">快速开始</a> •
  <a href="#功能特性">功能特性</a> •
  <a href="#架构设计">架构设计</a>
</p>

---

## 🎯 什么是 Archon？

> Archon 目前处于测试阶段！预期可能会有一些功能不完善，请随时分享您的反馈并贡献修复/新功能！

Archon 是 AI 编程助手的**指挥中心**。对您而言，它是一个优雅的界面，用于管理项目的知识、上下文和任务。对 AI 编程助手而言，它是一个**模型上下文协议 (MCP) 服务器**，用于协作和利用相同的知识、上下文和任务。

连接 Claude Code、Kiro、Cursor、Windsurf 等，为您的 AI 代理提供访问：
- **您的文档**（爬取的网站、上传的 PDF/文档）
- **智能搜索功能**，具备先进的 RAG 策略
- **任务管理**，与您的知识库集成
- **实时更新**，当您添加新内容并与编程助手协作任务时

## 🔗 重要链接

- **[GitHub 讨论](https://github.com/coleam00/Archon/discussions)** - 加入对话并分享关于 Archon 的想法
- **[贡献指南](CONTRIBUTING.md)** - 如何参与并为 Archon 做贡献
- **[介绍视频](https://youtu.be/8pRc_s2VQIo)** - 入门指南和 Archon 愿景

## 快速开始

### 前置要求

- [Docker Desktop](https://www.docker.com/products/docker-desktop/)
- [Supabase](https://supabase.com/) 账户
- [OpenAI API 密钥](https://platform.openai.com/api-keys)

### 安装说明

1. **克隆仓库**：
```bash
git clone https://github.com/IffyWu/archon.git
cd archon
```

2. **配置环境变量**：
```bash
cp .env.example .env
```

3. **启动 Docker 服务**：
```bash
docker-compose up -d
```

4. **访问 Archon**：
打开浏览器访问 `http://localhost:3737`

## 🎯 功能特性

### 知识管理
- 📚 **网站爬取** - 自动抓取和索引在线文档
- 📄 **文档上传** - 支持 PDF、Markdown、Word 文档
- 🔍 **智能搜索** - 使用先进的 RAG 策略进行语义搜索
- 🏷️ **标签系统** - 组织和分类您的知识

### MCP 服务器功能
- 🔧 **10+ MCP 工具** - 知识搜索、任务管理、文档操作等
- 🔄 **实时同步** - 前端和 AI 客户端之间的即时更新
- 🤖 **多客户端支持** - 同时连接多个 AI 编程助手

### 任务管理
- ✅ **看板视图** - 可视化的任务工作流
- 📝 **富文本编辑** - 使用 Markdown 支持的任务描述
- 🔗 **知识集成** - 将任务与相关文档链接
- 📊 **测试跟踪** - 监控代码覆盖率和测试结果

## 📄 许可证

Archon 社区许可证 (ACL) v1.2 - 详见 [LICENSE](LICENSE) 文件。

## 🤝 贡献

我们欢迎贡献！请查看我们的[贡献指南](CONTRIBUTING.md)了解如何开始。

---

<p align="center">用 ❤️ 构建，为 AI 增强开发的未来</p>