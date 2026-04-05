export interface Trade {
  id: string;
  name: string;
  businessName: string;
  category: string;
  subcategories: string[];
  location: string;
  serviceAreas: string[];
  reviewCount: number;
  jobsCompleted: number;
  badges: string[];
  bio: string;
  profileImage: string;
  yearsExperience: number;
  memberSince: string;
  responseTime: string;
  reviews: Review[];
}

export interface Review {
  id: string;
  author: string;
  location: string;
  date: string;
  comment: string;
}

export interface Testimonial {
  id: string;
  quote: string;
  name: string;
  location: string;
  role: "homeowner" | "trade" | "partner";
}

export interface BlogPost {
  slug: string;
  title: string;
  date: string;
  excerpt: string;
  category: string;
  author: string;
  coverImage: string;
  readingTime: string;
  content?: string;
}

export interface ServiceCategory {
  slug: string;
  name: string;
  icon: string;
  description: string;
}
