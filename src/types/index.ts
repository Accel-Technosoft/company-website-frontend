export interface SEOMeta {
  title: string;
  description: string;
  keywords: string[];
  image?: string;
}

export interface Service {
  id: string;
  title: string;
  slug: string;
  shortDescription: string;
  longDescription: string;
  features: string[];
  benefits: string[];
  iconName: string;
  images: string[];
  pricing?: string;
  seoMeta: SEOMeta;
}

export interface Project {
  id: string;
  title: string;
  slug: string;
  clientName?: string;
  summary: string;
  challenge: string;
  solution: string;
  outcomes: string[];
  techStack: string[];
  images: string[];
  publishDate: string;
  tags: string[];
  industry: string;
  seoMeta: SEOMeta;
}

export type ProductCategory = 'laptops' | 'desktops' | 'servers' | 'networking' | 'printers' | 'ups' | 'accessories';

export interface Product {
  id: string;
  sku: string;
  name: string;
  slug: string;
  category: ProductCategory;
  shortDescription: string;
  longDescription: string;
  specifications: Record<string, string>;
  images: string[];
  manufacturer: string;
  warranty: string;
  stockStatus: 'in-stock' | 'low-stock' | 'out-of-stock';
  priceRange?: string;
  seoMeta: SEOMeta;
}

export interface BlogPost {
  id: string;
  title: string;
  slug: string;
  content: string;
  excerpt: string;
  tags: string[];
  publishDate: string;
  author: string;
  images: string[];
  readTime: number;
  seoMeta: SEOMeta;
}

export interface Testimonial {
  id: string;
  name: string;
  position: string;
  company: string;
  content: string;
  rating: number;
  image?: string;
}

export interface TeamMember {
  id: string;
  name: string;
  position: string;
  department?: string;
  bio: string;
  image: string;
  linkedin?: string;
  email?: string;
  twitter?: string;
  github?: string;
  behance?: string;
  skills?: string[];
  experience?: string;
  education?: string;
}

export interface CompanyInfo {
  name: string;
  tagline: string;
  description: string;
  mission: string;
  vision: string;
  founded: string;
  employees: string;
  location: {
    address: string;
    city: string;
    country: string;
    phone: string;
    email: string;
    coordinates: {
      lat: number;
      lng: number;
    };
  };
  socialLinks: {
    facebook?: string;
    twitter?: string;
    linkedin?: string;
    instagram?: string;
  };
  businessHours: {
    weekdays: string;
    saturday: string;
    sunday: string;
  };
}