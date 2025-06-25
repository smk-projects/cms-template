'use client';

import { NavbarProps } from '@/types';
import SearchBox from './SearchBox';
import UserMenu from './UserMenu';

export default function Navbar({ onMobileMenuToggle, sidebarOpen = false }: NavbarProps) {
  const handleSearch = (query: string) => {
    // TODO: 實現搜尋功能
    console.log('搜尋:', query);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 bg-white border-b border-gray-200 z-50 h-16">
      <div className="flex items-center justify-between h-full px-4">
        {/* 左側：行動裝置選單按鈕 + 搜尋框 */}
        <div className="flex items-center space-x-4 flex-1">          {/* 行動裝置選單按鈕 */}
          <button
            onClick={onMobileMenuToggle}
            className="lg:hidden p-2 rounded-md hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-200"
            aria-label={sidebarOpen ? "關閉選單" : "開啟選單"}
          >
            <svg
              className={`w-6 h-6 text-gray-600 transform transition-transform duration-300 ease-in-out ${
                sidebarOpen ? 'rotate-90' : 'rotate-0'
              }`}
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {sidebarOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>

          {/* Logo */}
          <div className="flex items-center">
            <h1 className="text-xl font-bold text-gray-900">CMS 系統</h1>
          </div>

          {/* 搜尋框 */}
          <div className="hidden sm:block flex-1 max-w-lg">
            <SearchBox onSearch={handleSearch} />
          </div>
        </div>

        {/* 右側：使用者選單 */}
        <div className="flex items-center space-x-4">
          {/* 行動裝置搜尋按鈕 */}
          <button className="sm:hidden p-2 rounded-md hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500">
            <svg
              className="w-5 h-5 text-gray-600"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
          </button>

          <UserMenu />
        </div>
      </div>

      {/* 行動裝置搜尋框 */}
      <div className="sm:hidden border-t border-gray-200 p-4">
        <SearchBox onSearch={handleSearch} />
      </div>
    </nav>
  );
}
