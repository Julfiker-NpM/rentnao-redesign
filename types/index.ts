export interface Property {
  id: string;
  title: string;
  location: string;
  rent: number;
  bedrooms: number;
  bathrooms: number;
  area: number;
  image: string;
  verified: boolean;
  ownerListed: boolean;
  has3DTour: boolean;
  hasVideoTour: boolean;
  views: number;
  listedDate: string;
}

export interface Testimonial {
  id: string;
  name: string;
  role: 'owner' | 'tenant' | 'manager';
  avatar: string;
  rating: number;
  comment: string;
  date: string;
  verified: boolean;
}

export interface BenefitItem {
  id: string;
  title: string;
  description: string;
  icon: string;
}

export interface ComparisonItem {
  traditional: string;
  rentNao: string;
}

export interface Transaction {
  id: string;
  from: string;
  to: string;
  amount: number;
  date: string;
  status: 'completed' | 'pending' | 'failed';
}
