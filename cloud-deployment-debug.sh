#!/bin/bash

echo "==================================="
echo "Archon 云服务器部署诊断脚本"
echo "==================================="
echo ""

# 1. 检查环境变量
echo "1. 检查 .env 文件配置："
echo "------------------------"
if [ -f .env ]; then
    echo "✅ .env 文件存在"
    echo ""
    echo "关键配置检查："
    grep -E "SUPABASE_URL|SUPABASE_SERVICE_KEY|SUPABASE_ANON_KEY|HOST|OPENAI_API_KEY" .env | sed 's/=.*/=***隐藏***/'
    echo ""
    
    # 检查是否使用了 ANON key
    if grep -q "SUPABASE_SERVICE_KEY.*eyJ" .env; then
        echo "⚠️  警告：检测到 SUPABASE_SERVICE_KEY 可能使用了 ANON 密钥"
        echo "   请确保使用的是 SERVICE ROLE 密钥，而不是 ANON 密钥"
    fi
else
    echo "❌ .env 文件不存在！"
fi

echo ""
echo "2. 检查 Docker 容器状态："
echo "-------------------------"
docker ps -a --format "table {{.Names}}\t{{.Status}}\t{{.Ports}}"

echo ""
echo "3. 检查 Archon-Server 日志（最后 20 行）："
echo "----------------------------------------"
docker logs archon-server --tail 20 2>&1

echo ""
echo "4. 检查网络配置："
echo "-----------------"
echo "HOST 配置："
grep "^HOST=" .env || echo "未设置 HOST（将使用默认 localhost）"

echo ""
echo "5. 检查端口占用："
echo "----------------"
echo "检查必需端口："
for port in 3737 8181 8051 8052; do
    if lsof -Pi :$port -sTCP:LISTEN -t >/dev/null 2>&1; then
        echo "❌ 端口 $port 已被占用"
        lsof -Pi :$port -sTCP:LISTEN
    else
        echo "✅ 端口 $port 可用"
    fi
done

echo ""
echo "6. 检查 Docker 网络："
echo "--------------------"
docker network ls | grep archon

echo ""
echo "7. 内存和磁盘空间："
echo "------------------"
echo "内存使用："
free -h 2>/dev/null || vm_stat 2>/dev/null | head -5

echo ""
echo "磁盘空间："
df -h / | tail -1

echo ""
echo "==================================="
echo "诊断完成"
echo "==================================="