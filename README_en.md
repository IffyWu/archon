<div align="center">

[简体中文](./README.md) | **English**

</div>

---

<p align="center">
  <img src="./archon-ui-main/public/archon-main-graphic.png" alt="Archon Main Graphic" width="853" height="422">
</p>

<p align="center">
  <em>Power up your AI coding assistants with your own custom knowledge base and task management as an MCP server</em>
</p>

<p align="center">
  <a href="#quick-start">Quick Start</a> •
  <a href="#whats-included">What's Included</a> •
  <a href="#architecture">Architecture</a>
</p>

---

## 🎯 What is Archon?

> Archon is currently in beta! Expect things to not work 100%, and please feel free to share any feedback and contribute with fixes/new features!

Archon is the **command center** for AI coding assistants. For you, it's a sleek interface to manage knowledge, context, and tasks for your projects. For the AI coding assistant(s), it's a **Model Context Protocol (MCP) server** to collaborate on and leverage the same knowledge, context, and tasks.

Connect Claude Code, Kiro, Cursor, Windsurf, etc. to give your AI agents access to:
- **Your documentation** (crawled websites, uploaded PDFs/docs)
- **Smart search capabilities** with advanced RAG strategies
- **Task management** integrated with your knowledge base
- **Real-time updates** as you add new content and collaborate with your coding assistant on tasks

## 🔗 Important Links

- **[GitHub Discussions](https://github.com/coleam00/Archon/discussions)** - Join the conversation and share ideas about Archon
- **[Contributing Guide](CONTRIBUTING.md)** - How to get involved and contribute to Archon
- **[Introduction Video](https://youtu.be/8pRc_s2VQIo)** - Getting Started Guide and Vision for Archon

## Quick Start

### Prerequisites

- [Docker Desktop](https://www.docker.com/products/docker-desktop/)
- [Supabase](https://supabase.com/) account
- [OpenAI API key](https://platform.openai.com/api-keys)

### Setup Instructions

1. **Clone Repository**:
```bash
git clone https://github.com/IffyWu/archon.git
cd archon
```

2. **Configure Environment**:
```bash
cp .env.example .env
```

3. **Start Docker Services**:
```bash
docker-compose up -d
```

4. **Access Archon**:
Open your browser to `http://localhost:3737`

## 🎯 What's Included

### Knowledge Management
- 📚 **Website Crawling** - Automatically fetch and index online documentation
- 📄 **Document Upload** - Support for PDFs, Markdown, Word documents
- 🔍 **Smart Search** - Semantic search using advanced RAG strategies
- 🏷️ **Tagging System** - Organize and categorize your knowledge

### MCP Server Features
- 🔧 **10+ MCP Tools** - Knowledge search, task management, document operations
- 🔄 **Real-time Sync** - Instant updates between frontend and AI clients
- 🤖 **Multi-client Support** - Connect multiple AI coding assistants simultaneously

### Task Management
- ✅ **Kanban Board** - Visual task workflow
- 📝 **Rich Text Editing** - Task descriptions with Markdown support
- 🔗 **Knowledge Integration** - Link tasks with relevant documents
- 📊 **Test Tracking** - Monitor code coverage and test results

## 📄 License

Archon Community License (ACL) v1.2 - see [LICENSE](LICENSE) file for details.

## 🤝 Contributing

We welcome contributions! Please see our [Contributing Guide](CONTRIBUTING.md) to get started.

---

<p align="center">Built with ❤️ for the future of AI-powered development</p>