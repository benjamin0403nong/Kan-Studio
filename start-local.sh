#!/bin/bash

echo "🚀 啟動 Kan Studio 本地網站..."
echo ""
echo "網址: http://localhost:8000"
echo ""
echo "按 Ctrl+C 停止服務器"
echo ""

cd "$(dirname "$0")"
python3 -m http.server 8000
