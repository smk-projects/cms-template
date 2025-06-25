# CMS 內容管理系統

這是一個使用 Next.js 15、TypeScript 和 Tailwind CSS v4 建構的響應式內容管理系統。

## 功能特色

- **響應式設計**: 支援桌面端和手機端
- **現代化介面**: 使用 Tailwind CSS v4 打造美觀的使用者介面
- **導覽列**: 
  - 固定於頂部的導覽列
  - 左側快速搜尋功能
  - 右側使用者登入/登出選單
- **側邊選單**: 
  - 可收縮的系統功能選單
  - 階層式選單結構
  - 手機版可完全展開/收合
- **儀表板**: 統計資訊和系統狀態概覽

## 技術架構

- **框架**: Next.js 15 (App Router)
- **語言**: TypeScript
- **樣式**: Tailwind CSS v4
- **React**: 版本 19
- **響應式**: 手機優先設計方式

## 開始使用

### 安裝依賴

```bash
npm install
```

### 開發模式

```bash
npm run dev
```

在瀏覽器中開啟 [http://localhost:3000](http://localhost:3000) 查看結果。

### 建構生產版本

```bash
npm run build
npm start
```

## 項目結構

```
src/
  ├── app/                    # Next.js App Router 頁面
  ├── components/
  │   └── layout/            # 佈局組件
  │       ├── Layout.tsx     # 主佈局
  │       ├── Navbar.tsx     # 導覽列
  │       ├── SearchBox.tsx  # 搜尋框
  │       ├── Sidebar.tsx    # 側邊選單
  │       └── UserMenu.tsx   # 使用者選單
  └── types/                 # TypeScript 類型定義
```

## 響應式設計

### 桌面版
- 側邊選單固定顯示在左側
- 導覽列顯示完整的搜尋框和使用者選單
- 主內容區域有充足的空間

### 手機版
- 側邊選單預設隱藏，可透過選單按鈕開啟
- 搜尋框在小螢幕時移到導覽列下方
- 觸控友善的介面設計

## 開發指南

### 新增選單項目

在 `src/components/layout/Sidebar.tsx` 中的 `menuItems` 陣列新增項目：

```typescript
{
  id: 'new-feature',
  label: '新功能',
  href: '/new-feature',
  icon: 'icon-name'
}
```

### 自訂樣式

所有樣式使用 Tailwind CSS v4 類別，可在 `src/app/globals.css` 中自訂主題變數。

## 已實現功能

### ✅ 核心功能
- [x] 響應式導覽列（桌面版和手機版）
- [x] 可收縮側邊選單
- [x] 手機版選單完全展開/收合功能
- [x] 搜尋框（桌面版在導覽列，手機版在下方）
- [x] 使用者登入/登出選單
- [x] 現代化的 UI 設計

### ✅ 頁面功能
- [x] **儀表板** - 統計資訊和系統概覽
- [x] **內容管理** - 文章、頁面、媒體管理
- [x] **使用者管理** - 使用者列表、角色、權限
- [x] **系統設定** - 一般設定、偏好配置

### ✅ 技術特色
- [x] Next.js 15 App Router
- [x] TypeScript 完整支援
- [x] Tailwind CSS v4 樣式
- [x] 響應式設計（手機優先）
- [x] 無障礙功能支援
- [x] 程式碼分割和優化

## 📱 響應式設計詳情

### 桌面版特色
- 固定側邊選單（寬度 256px）
- 完整導覽列與搜尋功能
- 多欄位佈局
- 滑鼠懸停效果

### 手機版特色  
- 漢堡選單按鈕控制側邊選單
- 全螢幕側邊選單覆蓋
- 導覽列下方搜尋框
- 觸控友善的介面
- 滑動手勢支援

## 🎨 設計系統

### 顏色配色
- **主色**: 藍色 (#2563eb)
- **成功**: 綠色 (#16a34a) 
- **警告**: 黃色 (#ca8a04)
- **錯誤**: 紅色 (#dc2626)
- **中性**: 灰色系列

### 元件風格
- 圓角: 6px (md)
- 陰影: 軟陰影效果
- 間距: 4px 基準網格
- 字體: 系統字體棧

## 📂 完整項目結構

```
src/
  ├── app/                    # Next.js App Router
  │   ├── content/            # 內容管理頁面
  │   ├── settings/           # 系統設定頁面
  │   ├── users/              # 使用者管理頁面
  │   ├── layout.tsx          # 根佈局
  │   ├── page.tsx            # 首頁（儀表板）
  │   └── globals.css         # 全域樣式
  ├── components/
  │   └── layout/             # 佈局組件
  │       ├── Layout.tsx      # 主佈局組件
  │       ├── Navbar.tsx      # 導覽列
  │       ├── SearchBox.tsx   # 搜尋框
  │       ├── Sidebar.tsx     # 側邊選單
  │       └── UserMenu.tsx    # 使用者選單
  └── types/
      └── index.ts            # TypeScript 類型定義
```

## 🚀 快速開始

### 1. 克隆專案
```bash
git clone <repository-url>
cd ai-generator
```

### 2. 安裝依賴
```bash
npm install
```

### 3. 開發模式
```bash
npm run dev
```

訪問 [http://localhost:3000](http://localhost:3000)

### 4. 建構生產版本
```bash
npm run build
npm start
```

## 🔧 可自訂功能

### 新增選單項目
編輯 `src/components/layout/Sidebar.tsx` 中的 `menuItems` 陣列：

```typescript
{
  id: 'analytics',
  label: '數據分析',
  href: '/analytics',
  icon: 'chart',
  children: [
    {
      id: 'reports',
      label: '報表',
      href: '/analytics/reports',
      icon: 'report'
    }
  ]
}
```

### 修改主題色彩
在 `src/app/globals.css` 中調整 CSS 變數：

```css
:root {
  --primary-color: #your-color;
  --secondary-color: #your-color;
}
```

## 🛠️ 開發工具

- **ESLint**: 程式碼品質檢查
- **TypeScript**: 類型檢查
- **Tailwind CSS**: 實用優先的 CSS 框架
- **Next.js**: React 全端框架

## 📋 待開發功能

- [ ] 暗色主題支援
- [ ] 多語言國際化
- [ ] 離線功能 (PWA)
- [ ] 即時通知系統
- [ ] 進階搜尋篩選
- [ ] 檔案上傳功能
- [ ] 資料匯入/匯出
- [ ] API 整合