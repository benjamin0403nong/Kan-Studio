#!/bin/bash

echo "========================================="
echo "🚀 Kan Studio 自動化部署腳本"
echo "========================================="
echo ""

# 方法選擇
echo "請選擇部署方式："
echo "1. Surge.sh (最簡單，需要 email 登入)"
echo "2. GitHub + Vercel (推薦，需要 GitHub 賬號)"
echo ""
read -p "輸入選項 [1-2]: " choice

case $choice in
    1)
        echo ""
        echo "📱 正在部署到 Surge.sh..."
        echo ""
        echo "請輸入你的 Email（用於 Surge 登入或註冊）："
        surge .
        ;;
    2)
        echo ""
        echo "📱 正在部署到 GitHub + Vercel..."
        echo ""

        # 檢查是否有遠端倉庫
        if ! git remote | grep -q origin; then
            echo "請輸入你的 GitHub 用戶名："
            read -p "GitHub 用戶名: " github_user

            echo "正在添加遠端倉庫..."
            git remote add origin "https://github.com/$github_user/kan-studio.git"

            echo ""
            echo "請先在 GitHub 創建一個新倉庫："
            echo "1. 訪問: https://github.com/new"
            echo "2. 倉庫名稱: kan-studio"
            echo "3. 創建後按 Enter 繼續..."
            read

            echo "正在推送到 GitHub..."
            git branch -M main
            git push -u origin main

            echo ""
            echo "✅ GitHub 部署完成！"
            echo ""
            echo "接下來在 Vercel 部署："
            echo "1. 訪問: https://vercel.com/new"
            echo "2. 選擇你的 GitHub 帳號"
            echo "3. 選擇 kan-studio 專案"
            echo "4. 點擊 Deploy"
            echo ""
        else
            echo "已存在遠端倉庫，正在推送..."
            git branch -M main
            git push -u origin main

            echo ""
            echo "✅ 推送完成！"
            echo "請在 Vercel 部署: https://vercel.com/new"
            echo ""
        fi
        ;;
    *)
        echo "無效選項"
        exit 1
        ;;
esac

echo ""
echo "========================================="
echo "🎉 部署完成！你的網站已上線！"
echo "========================================="
