#!/usr/bin/env python3
import os
import subprocess
import webbrowser
import sys

print("=" * 50)
print("🚀 Kan Studio 一鍵部署")
print("=" * 50)
print()

# 設定網站資料夾
site_folder = os.path.dirname(os.path.abspath(__file__))

print("正在檢查檔案...")
files_to_check = ["index.html", "css/style.css", "js/main.js"]
missing_files = []
for file in files_to_check:
    if not os.path.exists(os.path.join(site_folder, file)):
        missing_files.append(file)

if missing_files:
    print(f"❌ 缺少檔案: {', '.join(missing_files)}")
    sys.exit(1)

print("✅ 檢查完成")
print()

print("=" * 50)
print("選擇部署方式:")
print("=" * 50)
print("1. Netlify Drop (最簡單 - 拖曳資料夾)")
print("2. GitHub Pages (需要 GitHub 賬號)")
print("3. 本地預覽 (不部署，只在本地查看)")
print()

choice = input("選擇 [1-3]: ").strip()

if choice == "1":
    print()
    print("📱 Netlify Drop 部署步驟:")
    print("-" * 50)
    print("1. 網頁即將自動打開 Netlify Drop")
    print("2. 將以下資料夾拖曳到頁面上的框中：")
    print(f"   {site_folder}")
    print("3. 等待 10-30 秒")
    print("4. 複製你的網址")
    print()
    input("按 Enter 開啟 Netlify Drop...")
    webbrowser.open("https://app.netlify.com/drop")

elif choice == "2":
    print()
    print("📱 GitHub 部署步驟:")
    print("-" * 50)
    print("1. 網頁即將自動打開 GitHub 創建頁面")
    print("2. 登入你的 GitHub 賬號")
    print("3. 創建一個新倉庫，名稱: kan-studio")
    print("4. 回到終端機，繼續操作")
    print()

    input("按 Enter 開啟 GitHub...")
    webbrowser.open("https://github.com/new")

    print()
    print("現在運行以下命令來推送代碼:")
    print("-" * 50)
    print("cd " + site_folder)
    print("git remote add origin https://github.com/你的用戶名/kan-studio.git")
    print("git branch -M main")
    print("git push -u origin main")
    print()
    input("完成推送後按 Enter...")

    print()
    print("✅ 現在啟用 GitHub Pages:")
    print("1. 打開: https://github.com/你的用戶名/kan-studio/settings/pages")
    print("2. 在 Source 選擇: main 分支")
    print("3. 點擊 Save")
    print("4. 等待 1-2 分鐘")
    print("5. 網址: https://你的用戶名.github.io/kan-studio/")
    print()

elif choice == "3":
    print()
    print("📱 本地預覽:")
    print("-" * 50)
    input("按 Enter 開啟本地網站...")
    try:
        http_server = subprocess.Popen(
            ["python3", "-m", "http.server", "8000"],
            cwd=site_folder,
            stdout=subprocess.DEVNULL,
            stderr=subprocess.DEVNULL
        )
        print("✅ 本地服務器已啟動: http://localhost:8000")
        print("   (按 Ctrl+C 停止)")
        webbrowser.open(f"http://localhost:8000")
        print()
        print("注意: 這只是本地預覽，不會部署到網際網路")
        print("要部署到網路，請選擇選項 1 或 2")
        http_server.wait()
    except KeyboardInterrupt:
        http_server.kill()
        print("\n✅ 服務器已停止")

else:
    print("❌ 無效選擇")

print()
print("=" * 50)
print("🎉 完成！")
print("=" * 50)
