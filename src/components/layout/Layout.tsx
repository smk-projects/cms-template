'use client';

import { useState } from 'react';
import { LayoutProps } from '@/types';
import Navbar from './Navbar';
import Sidebar from './Sidebar';

export default function Layout({ children }: LayoutProps) {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const handleMobileMenuToggle = () => {
    setSidebarOpen(!sidebarOpen);
  };

  const handleSidebarClose = () => {
    setSidebarOpen(false);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* 導覽列 */}
      <Navbar 
        onMobileMenuToggle={handleMobileMenuToggle} 
        sidebarOpen={sidebarOpen}
      />      {/* 主要內容區域 */}
      <div className="flex pt-16">
        {/* 側邊選單 */}
        <Sidebar isOpen={sidebarOpen} onClose={handleSidebarClose} />        {/* 主要內容 */}
        <main className="flex-1 min-h-screen lg:ml-64">
          <div className="p-4 lg:p-6 max-w-full">
            {children}
          </div>
        </main>
      </div>
    </div>
  );
}
