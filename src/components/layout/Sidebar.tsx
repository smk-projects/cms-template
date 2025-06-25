'use client';

import { type SidebarProps, type MenuItem } from '@/types';
import { useState } from 'react';

// 模擬選單項目資料
const menuItems: MenuItem[] = [
  {
    id: 'dashboard',
    label: '儀表板',
    href: '/',
    icon: 'dashboard'
  },
  {
    id: 'content',
    label: '內容管理',
    href: '/content',
    icon: 'content',
    children: [
      {
        id: 'articles',
        label: '文章管理',
        href: '/content/articles',
        icon: 'article'
      },
      {
        id: 'pages',
        label: '頁面管理',
        href: '/content/pages',
        icon: 'page'
      },
      {
        id: 'media',
        label: '媒體庫',
        href: '/content/media',
        icon: 'media'
      }
    ]
  },
  {
    id: 'users',
    label: '使用者管理',
    href: '/users',
    icon: 'users'
  },
  {
    id: 'settings',
    label: '系統設定',
    href: '/settings',
    icon: 'settings',
    children: [
      {
        id: 'general',
        label: '一般設定',
        href: '/settings/general',
        icon: 'general'
      },
      {
        id: 'permissions',
        label: '權限管理',
        href: '/settings/permissions',
        icon: 'permissions'
      }
    ]
  }
];

function MenuIcon({ icon }: { icon: string }) {
  const icons: Record<string, React.JSX.Element> = {
    dashboard: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2H5a2 2 0 00-2-2z" />
      </svg>
    ),
    content: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
      </svg>
    ),
    users: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197m13.5-1.15v1.5a3 3 0 01-3 3h-3.75m0-3.75h3.75a3 3 0 013 3v1.5M6 7.5h3v-1.5a3 3 0 013-3 3 3 0 013 3v1.5h3" />
      </svg>
    ),
    settings: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
    article: (
      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
      </svg>
    ),
    page: (
      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
      </svg>
    ),
    media: (
      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
      </svg>
    ),
    general: (
      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 100 4m0-4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 100 4m0-4v2m0-6V4" />
      </svg>
    ),
    permissions: (
      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    )
  };

  return icons[icon] || <div className="w-5 h-5"></div>;
}

function MenuItem({ item, level = 0 }: { item: MenuItem; level?: number }) {
  const [isExpanded, setIsExpanded] = useState(false);
  const hasChildren = item.children && item.children.length > 0;

  const handleClick = () => {
    if (hasChildren) {
      setIsExpanded(!isExpanded);
    }
  };

  return (
    <div>
      <a
        href={item.href}
        onClick={hasChildren ? (e) => { e.preventDefault(); handleClick(); } : undefined}
        className={`
          flex items-center justify-between px-4 py-3 text-gray-700 hover:bg-gray-100 transition-colors duration-200
          ${level > 0 ? 'pl-12' : ''}
        `}
      >
        <div className="flex items-center space-x-3">
          <MenuIcon icon={item.icon || ''} />
          <span className="font-medium">{item.label}</span>
        </div>
        {hasChildren && (
          <svg
            className={`w-4 h-4 transition-transform duration-200 ${isExpanded ? 'rotate-180' : ''}`}
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        )}      </a>
      {hasChildren && (
        <div 
          className={`
            bg-gray-50 overflow-hidden transition-all duration-300 ease-in-out
            ${isExpanded ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}
          `}
        >
          <div className={`transform transition-transform duration-300 ease-in-out ${isExpanded ? 'translate-y-0' : '-translate-y-2'}`}>
            {item.children?.map((childItem) => (
              <MenuItem key={childItem.id} item={childItem} level={level + 1} />
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

export default function Sidebar({ isOpen, onClose }: SidebarProps) {
  return (
    <>
      {/* 行動裝置遮罩 */}
      <div
        className={`
          fixed inset-0 bg-black z-40 lg:hidden transition-opacity duration-300 ease-in-out
          ${isOpen ? 'opacity-50 pointer-events-auto' : 'opacity-0 pointer-events-none'}
        `}
        onClick={onClose}
      />      {/* 側邊選單 */}
      <aside
        className={`
          fixed top-16 left-0 bottom-0 w-64 bg-white border-r border-gray-200 z-50 
          transform transition-all duration-300 ease-out shadow-xl
          lg:shadow-none
          ${isOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'}
        `}
        style={{
          transitionTimingFunction: isOpen 
            ? 'cubic-bezier(0.4, 0, 0.2, 1)' 
            : 'cubic-bezier(0.4, 0, 1, 1)'
        }}
      >
        <div className="flex flex-col h-full">
          {/* 選單標題 */}
          <div className="p-4 border-b border-gray-200">
            <h2 className="text-lg font-semibold text-gray-900">系統功能</h2>
          </div>          {/* 選單項目 */}
          <nav className="flex-1 overflow-y-auto">
            <div className="py-2">
              {menuItems.map((item, index) => (
                <div
                  key={item.id}
                  className="opacity-0 animate-fade-in"
                  style={{ 
                    animationDelay: `${index * 50}ms`,
                    animationFillMode: 'forwards'
                  }}
                >
                  <MenuItem item={item} />
                </div>
              ))}
            </div>
          </nav>

          {/* 底部資訊 */}
          <div className="p-4 border-t border-gray-200">
            <div className="text-sm text-gray-500">
              版本 1.0.0
            </div>
          </div>
        </div>
      </aside>
    </>
  );
}
