#!/bin/bash

# GitHub Pages 部署腳本

echo "🚀 部署到 GitHub Pages..."

# 確認在 gh-pages 分支
git checkout gh-pages

# 合併 master 的最新變更
echo "📥 合併 master 分支..."
git merge master

# 推送到 GitHub（推送分支之後需要在 GitHub 設定 Pages）
echo "📤 推送到 GitHub..."
git push origin gh-pages

echo ""
echo "✅ 推送完成！"
echo ""
echo "接下來請執行以下步驟："
echo "1. 到 GitHub 專案頁面"
echo "2. 點擊 Settings → Pages"
echo "3. 在「Source」選擇 'gh-pages' 分支"
echo "4. 點擊 Save"
echo "5. 等待幾分鐘，網站就會部署完成"
