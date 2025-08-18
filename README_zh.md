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

> Archon 目前处于测试阶段！预期可能会有一些功能不完善，请随时分享您的反馈并贡献修复/新功能！感谢大家对 Archon 的热情支持，以及提供的错误报告、PR 和讨论。对于我们的小团队来说，处理这些内容确实很多，但我们致力于解决所有问题，将 Archon 打造成最好的工具！

Archon 是 AI 编程助手的**指挥中心**。对您而言，它是一个优雅的界面，用于管理项目的知识、上下文和任务。对 AI 编程助手而言，它是一个**模型上下文协议 (MCP) 服务器**，用于协作和利用相同的知识、上下文和任务。连接 Claude Code、Kiro、Cursor、Windsurf 等，为您的 AI 代理提供访问：

- **您的文档**（爬取的网站、上传的 PDF/文档）
- **智能搜索功能**，具备先进的 RAG 策略
- **任务管理**，与您的知识库集成
- **实时更新**，当您添加新内容并与编程助手协作任务时
- **更多功能**即将推出，将 Archon 构建为所有上下文工程的集成环境

这个新的 Archon 愿景取代了旧版本（代理构建器）。Archon 过去是构建其他代理的 AI 代理，现在您可以使用 Archon 来做这些以及更多事情。

> 无论您在构建什么，或者是新的/现有的代码库 - Archon 的知识和任务管理功能都将改善**任何** AI 驱动编程的输出。

## 🔗 重要链接

- **[GitHub 讨论](https://github.com/coleam00/Archon/discussions)** - 加入对话并分享关于 Archon 的想法
- **[贡献指南](CONTRIBUTING.md)** - 如何参与并为 Archon 做贡献
- **[介绍视频](https://youtu.be/8pRc_s2VQIo)** - 入门指南和 Archon 愿景
- **[Dynamous AI Mastery](https://dynamous.ai)** - Archon 的诞生地 - 加入一个充满活力的早期 AI 采用者社区，大家互相帮助转变职业和业务！

## 快速开始

### 前置要求

- [Docker Desktop](https://www.docker.com/products/docker-desktop/)
- [Supabase](https://supabase.com/) 账户（免费版或本地 Supabase 都可以）
- [OpenAI API 密钥](https://platform.openai.com/api-keys)（也支持 Gemini 和 Ollama！）

### 安装说明

1. **克隆仓库**：

   ```bash
   git clone https://github.com/coleam00/archon.git
   cd archon
   ```

2. **环境配置**：

   ```bash
   cp .env.example .env
   # 编辑 .env 并添加您的 Supabase 凭据：
   # SUPABASE_URL=https://your-project.supabase.co
   # SUPABASE_SERVICE_KEY=your-service-key-here
   ```

   注意：Supabase 引入了新类型的服务密钥，但请使用传统密钥（较长的那个）。

   可选：如果您想启用重新排序 RAG 策略，请取消注释 `python\requirements.server.txt` 中的第 20-22 行。这将显著增加 Archon 服务器容器的大小，这就是为什么默认关闭的原因。

3. **数据库设置**：在您的 [Supabase 项目](https://supabase.com/dashboard) SQL 编辑器中，复制、粘贴并执行 `migration/complete_setup.sql` 的内容

4. **启动服务**：

   ```bash
   docker-compose up --build -d
   ```

   这将启动核心微服务：
   - **服务器**：核心 API 和业务逻辑（端口：8181）
   - **MCP 服务器**：AI 客户端的协议接口（端口：8051）
   - **代理（即将推出！）**：AI 操作和流式处理（端口：8052）
   - **UI**：Web 界面（端口：3737）

   端口也可以在您的 .env 中配置！

5. **配置 API 密钥**：
   - 打开 http://localhost:3737
   - 转到**设置** → 选择您的 LLM/嵌入提供商并设置 API 密钥（默认为 OpenAI）
   - 通过上传文档或爬取网站进行测试

## 🔄 数据库重置（如需要重新开始）

如果您需要完全重置数据库并重新开始：

<details>
<summary>⚠️ <strong>重置数据库 - 这将删除 Archon 的所有数据！</strong></summary>

1. **运行重置脚本**：在您的 Supabase SQL 编辑器中，运行 `migration/RESET_DB.sql` 的内容

   ⚠️ 警告：这将删除所有 Archon 特定的表和数据！不过数据库中的其他内容不会受到影响。

2. **重建数据库**：重置后，运行 `migration/complete_setup.sql` 重新创建所有表。

3. **重启服务**：

   ```bash
   docker-compose up -d
   ```

4. **重新配置**：
   - 再次选择您的 LLM/嵌入提供商并设置 API 密钥
   - 重新上传任何文档或重新爬取网站

重置脚本安全地删除所有表、函数、触发器和策略，并正确处理依赖关系。

</details>

## ⚡ 快速测试

一切运行后：

1. **测试网站爬取**：转到 http://localhost:3737 → 知识库 → "爬取网站" → 输入文档 URL（如 https://ai.pydantic.dev/llms-full.txt）
2. **测试文档上传**：知识库 → 上传 PDF
3. **测试项目**：项目 → 创建新项目并添加任务
4. **与您的 AI 编程助手集成**：MCP 仪表板 → 复制您的 AI 编程助手的连接配置

## 📚 文档

### 核心服务

| 服务               | 容器名称       | 默认 URL              | 用途                     |
| ------------------ | -------------- | --------------------- | ------------------------ |
| **Web 界面**       | archon-ui      | http://localhost:3737 | 主仪表板和控制           |
| **API 服务**       | archon-server  | http://localhost:8181 | 网站爬取、文档处理       |
| **MCP 服务器**     | archon-mcp     | http://localhost:8051 | 模型上下文协议接口       |
| **代理服务**       | archon-agents  | http://localhost:8052 | AI/ML 操作、重新排序     |

## 功能特性

### 🧠 知识管理

- **智能网站爬取**：自动检测并爬取整个文档站点、站点地图和单个页面
- **文档处理**：上传和处理 PDF、Word 文档、markdown 文件和文本文档，具备智能分块功能
- **代码示例提取**：自动识别并索引文档中的代码示例，以增强搜索功能
- **向量搜索**：具有上下文嵌入的高级语义搜索，实现精确的知识检索
- **源管理**：按源、类型和标签组织知识，便于过滤

### 🤖 AI 集成

- **模型上下文协议 (MCP)**：连接任何兼容 MCP 的客户端（Claude Code、Cursor，甚至非 AI 编程助手如 Claude Desktop）
- **10 个 MCP 工具**：用于 RAG 查询、任务管理和项目操作的全面而简单的工具集
- **多 LLM 支持**：支持 OpenAI、Ollama 和 Google Gemini 模型
- **RAG 策略**：混合搜索、上下文嵌入和结果重新排序，以获得最佳 AI 响应
- **实时流式处理**：来自 AI 代理的实时响应，具有进度跟踪

### 📋 项目和任务管理

- **分层项目**：在结构化工作流程中组织项目、功能和任务
- **AI 辅助创建**：使用集成的 AI 代理生成项目需求和任务
- **文档管理**：具有协作编辑功能的版本控制文档
- **进度跟踪**：跨所有项目活动的实时更新和状态管理

### 🔄 实时协作

- **WebSocket 更新**：爬取、处理和 AI 操作的实时进度跟踪
- **多用户支持**：协作知识构建和项目管理
- **后台处理**：不阻塞用户界面的异步操作
- **健康监控**：内置服务健康检查和自动重连

## 架构设计

### 微服务结构

Archon 使用真正的微服务架构，具有清晰的关注点分离：

```
┌─────────────────┐    ┌─────────────────┐    ┌─────────────────┐    ┌─────────────────┐
│   前端 UI       │    │  服务器 (API)   │    │   MCP 服务器    │    │   代理服务      │
│                 │    │                 │    │                 │    │                 │
│  React + Vite   │◄──►│    FastAPI +    │◄──►│    轻量级       │◄──►│   PydanticAI    │
│  端口 3737      │    │    SocketIO     │    │    HTTP 包装器  │    │   端口 8052     │
│                 │    │    端口 8181    │    │    端口 8051    │    │                 │
└─────────────────┘    └─────────────────┘    └─────────────────┘    └─────────────────┘
         │                        │                        │                        │
         └────────────────────────┼────────────────────────┼────────────────────────┘
                                  │                        │
                         ┌─────────────────┐               │
                         │     数据库      │               │
                         │                 │               │
                         │    Supabase     │◄──────────────┘
                         │    PostgreSQL   │
                         │    PGVector     │
                         └─────────────────┘
```

### 服务职责

| 服务           | 位置                 | 用途                         | 主要功能                                                           |
| -------------- | -------------------- | ---------------------------- | ------------------------------------------------------------------ |
| **前端**       | `archon-ui-main/`    | Web 界面和仪表板             | React、TypeScript、TailwindCSS、Socket.IO 客户端                   |
| **服务器**     | `python/src/server/` | 核心业务逻辑和 API           | FastAPI、服务层、Socket.IO 广播、所有 ML/AI 操作                   |
| **MCP 服务器** | `python/src/mcp/`    | MCP 协议接口                 | 轻量级 HTTP 包装器、10 个 MCP 工具、会话管理                       |
| **代理**       | `python/src/agents/` | PydanticAI 代理托管          | 文档和 RAG 代理、流式响应                                          |

### 通信模式

- **基于 HTTP**：所有服务间通信使用 HTTP API
- **Socket.IO**：从服务器到前端的实时更新
- **MCP 协议**：AI 客户端通过 SSE 或 stdio 连接到 MCP 服务器
- **无直接导入**：服务真正独立，没有共享代码依赖

### 主要架构优势

- **轻量级容器**：每个服务只包含所需的依赖项
- **独立扩展**：服务可以根据负载独立扩展
- **开发灵活性**：团队可以在不同服务上工作而不产生冲突
- **技术多样性**：每个服务使用最适合其特定用途的工具

## 🔧 配置自定义端口和主机名

默认情况下，Archon 服务运行在以下端口：

- **Archon-UI**：3737
- **Archon-Server**：8181
- **Archon-MCP**：8051
- **Archon-Agents**：8052
- **Archon-Docs**：3838（可选）

### 更改端口

要使用自定义端口，请将这些变量添加到您的 `.env` 文件中：

```bash
# 服务端口配置
ARCHON_UI_PORT=3737
ARCHON_SERVER_PORT=8181
ARCHON_MCP_PORT=8051
ARCHON_AGENTS_PORT=8052
ARCHON_DOCS_PORT=3838
```

示例：在不同端口上运行：

```bash
ARCHON_SERVER_PORT=8282
ARCHON_MCP_PORT=8151
```

### 配置主机名

默认情况下，Archon 使用 `localhost` 作为主机名。您可以通过在 `.env` 文件中设置 `HOST` 变量来配置自定义主机名或 IP 地址：

```bash
# 主机名配置
HOST=localhost  # 默认

# 自定义主机名示例：
HOST=192.168.1.100     # 使用特定 IP 地址
HOST=archon.local      # 使用自定义域名
HOST=myserver.com      # 使用公共域名
```

这在以下情况下很有用：

- 在不同机器上运行 Archon 并远程访问
- 为您的安装使用自定义域名
- 在 `localhost` 不可访问的网络环境中部署

更改主机名或端口后：

1. 重启 Docker 容器：`docker-compose down && docker-compose up -d`
2. 访问 UI：`http://${HOST}:${ARCHON_UI_PORT}`
3. 使用新的主机名和 MCP 端口更新您的 AI 客户端配置

## 🔧 开发

用于热重载的开发：

```bash
# 后端服务（带自动重载）
docker-compose up archon-server archon-mcp archon-agents --build

# 前端（带热重载）
cd archon-ui-main && npm run dev

# 文档（带热重载）
cd docs && npm start
```

**注意**：后端服务在其 uvicorn 命令中配置了 `--reload` 标志，并将源代码挂载为卷，以便在您进行更改时自动热重载。

## 📄 许可证

Archon 社区许可证 (ACL) v1.2 - 详情请参见 [LICENSE](LICENSE) 文件。

**简而言之**：Archon 是免费、开放和可修改的。运行它、分叉它、分享它 - 只是不要在未经许可的情况下将其作为服务出售。