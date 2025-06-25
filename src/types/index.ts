// 導覽列相關類型
export interface NavbarProps {
  onMobileMenuToggle: () => void;
  sidebarOpen?: boolean;
}

// 側邊選單相關類型
export interface SidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

export interface MenuItem {
  id: string;
  label: string;
  icon?: string;
  href: string;
  children?: MenuItem[];
}

// 使用者相關類型
export interface User {
  id: string;
  name: string;
  email: string;
  avatar?: string;
}

// 搜尋相關類型
export interface SearchProps {
  onSearch: (query: string) => void;
  placeholder?: string;
}

// 佈局相關類型
export interface LayoutProps {
  children: React.ReactNode;
}
