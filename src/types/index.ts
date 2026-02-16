// Navigation Types
export interface NavItem {
  id: string;
  title: string;
  href: string;
  hasDropdown?: boolean;
  dropdownItems?: NavItem[];
}

export interface NavLink {
  label: string;
  href: string;
}

// Product Types
export interface Product {
  id: number;
  name: string;
  price: string;
  image: string;
  category: string;
  description?: string;
}

export interface ProductCategory {
  id: number;
  name: string;
  value: string;
}

// Banner Types
export interface BannerContent {
  title: string;
  description: string;
  backgroundImage: string;
  rightImage?: string;
}

export interface SocialLink {
  name: string;
  href: string;
  icon: string;
}

// Footer Types
export interface FooterLink {
  label: string;
  href: string;
}

export interface FooterColumn {
  title: string;
  links: FooterLink[];
}

export interface FooterContact {
  type: 'phone' | 'email' | 'address';
  value: string;
  icon?: string;
}

// Treatment Category
export interface Treatment {
  id: string;
  title: string;
  href: string;
}

// Skin Condition
export interface SkinCondition {
  id: string;
  title: string;
  href: string;
}
