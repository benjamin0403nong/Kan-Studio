# GitHub Pages 部署指南

## 部署步驟

### 方法一：使用部署腳本（推薦）

```bash
cd Kan-Studio
./deploy-ghp.sh
```

### 方法二：手動部署

```bash
# 1. 切換到 gh-pages 分支
git checkout gh-pages

# 2. 合併 master 分支的最新變更
git merge master

# 3. 推送分支到 GitHub
git push origin gh-pages

# 4. 回到 master 分支
git checkout master
```

## 設定 GitHub Pages

推送完成後，請執行以下步驟：

1. **專案頁面**
   - 前往 https://github.com/benjamin0403nong/Kan-Studio

2. **開啟 Pages 設定**
   - 點擊頁面上方的 **Settings** 標籤
   - 左側選單點擊 **Pages**

3. **設定來源**
   - 在 **Source** 區塊，選擇 `Deploy from a branch`
   - 分支選擇 `gh-pages`
   - 資料夾選擇 `/(root)`

4. **儲存設定**
   - 點擊 **Save** 按鈕

5. **等待部署**
   - GitHub 會自動部署（通常需要 2-5 分鐘）
   - 部署完成後會顯示綠色的勾勾

6. **訪問網站**
   - 你的網站會在：`https://benjamin0403nong.github.io/Kan-Studio/`

## 已完成的功能

✅ AdSense 廣告整合
✅ 開始創造按創造按鈕
✅ 響應式設計
✅ 測試廣告佔位符（本地環境會顯示）

## AdSense 注意事項

⚠️ **AdSense 只在正式網域名稱上顯示廣告**
- 本地環境（localhost）會顯示測試佔位符
- 部署到 GitHub Pages 後，廣告可能仍不會立即顯示
- 需要將網站提交到 AdSense 審核並通過後才會顯示

### AdSense 審核步驟

1. 登入 Google AdSense
2. 新增網站 `https://benjamin0403nong.github.io/Kan-Studio/`
3. 等待審核（通常 1-2 週）
4. 審核通過後廣告就會開始顯示

## 首次部署必須推送

如果你還沒有推送變更，執行：

```bash
git checkout master
git add .
git commit -m "Add AdSense banner and Create button"
git push origin master
```

然後再使用上面的部署方法。
