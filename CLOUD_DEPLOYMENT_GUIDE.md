# 🚀 Archon 云服务器部署指南

## 🔴 常见问题：后端服务启动失败

### 最常见原因和解决方案

## 1. ⚠️ **SUPABASE_SERVICE_KEY 配置错误**

**必须使用 SERVICE ROLE 密钥，而不是 ANON 密钥！**

在 Supabase Dashboard：Settings → API → 复制 **service_role** 密钥

## 2. 🌐 **HOST 配置问题**

```bash
# ✅ 正确：使用服务器 IP 或域名
HOST=123.456.789.0
```

## 3. 🔥 **防火墙配置**

开放端口：3737, 8181, 8051, 8052

## 📋 快速部署步骤

1. **准备环境**
```bash
# 安装 Docker
curl -fsSL https://get.docker.com | sh
sudo usermod -aG docker $USER
```

2. **克隆项目**
```bash
git clone https://github.com/IffyWu/archon.git
cd archon
```

3. **配置环境变量**
```bash
cp .env.cloud.example .env
nano .env  # 编辑配置
```

4. **启动服务**
```bash
docker-compose up -d
```

## 🔧 故障排查

```bash
# 运行诊断脚本
./cloud-deployment-debug.sh

# 查看日志
docker logs archon-server --tail 50

# 重建容器
docker-compose down
docker-compose up -d --build
```

## 📝 部署检查清单

- [ ] 使用 SERVICE ROLE 密钥（不是 ANON 密钥）
- [ ] HOST 设置为服务器 IP 或域名
- [ ] 防火墙/安全组已开放必要端口
- [ ] 服务器有足够的内存（4GB+）
- [ ] 所有 API 密钥都已正确配置

## 🆘 常见错误及解决

- `Invalid API key` → 使用 SERVICE ROLE 密钥
- `Connection refused` → 检查 HOST 配置
- `Out of memory` → 增加服务器内存
- `Port already in use` → 修改端口配置

---

💡 **提示**：确保使用正确的 Supabase SERVICE ROLE 密钥是成功部署的关键！