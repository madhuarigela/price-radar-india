export type Platform = 'amazon' | 'flipkart' | 'meesho' | 'reliance_digital' | 'croma';

export interface PlatformListing {
  platform: Platform;
  price: number;
  originalPrice: number;
  discount: number;
  sellerRating: number;
  deliveryDays: number;
  inStock: boolean;
  url: string;
}

export interface Product {
  id: string;
  name: string;
  brand: string;
  category: string;
  image: string;
  description: string;
  listings: PlatformListing[];
  lowestPrice: number;
  highestPrice: number;
  avgRating: number;
  totalReviews: number;
  priceHistory: PricePoint[];
  isTracked?: boolean;
}

export interface PricePoint {
  date: string;
  amazon?: number;
  flipkart?: number;
  meesho?: number;
  reliance_digital?: number;
  croma?: number;
}

export interface Deal {
  id: string;
  product: Product;
  discountPercent: number;
  dealType: 'hot' | 'good' | 'regular';
  expiresAt: string;
  detectedAt: string;
}

export interface Category {
  id: string;
  name: string;
  icon: string;
  count: number;
}

export const PLATFORM_LABELS: Record<Platform, string> = {
  amazon: 'Amazon India',
  flipkart: 'Flipkart',
  meesho: 'Meesho',
  reliance_digital: 'Reliance Digital',
  croma: 'Croma',
};

export const PLATFORM_COLORS: Record<Platform, string> = {
  amazon: '#FF9900',
  flipkart: '#2874F0',
  meesho: '#F43397',
  reliance_digital: '#E42529',
  croma: '#0F7D2E',
};
