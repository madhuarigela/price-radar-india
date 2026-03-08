import { Product, Deal, Category } from './types';

export const categories: Category[] = [
  { id: 'smartphones', name: 'Smartphones', icon: '📱', count: 2450 },
  { id: 'laptops', name: 'Laptops', icon: '💻', count: 1230 },
  { id: 'headphones', name: 'Headphones', icon: '🎧', count: 890 },
  { id: 'tvs', name: 'Televisions', icon: '📺', count: 560 },
  { id: 'cameras', name: 'Cameras', icon: '📷', count: 340 },
  { id: 'appliances', name: 'Appliances', icon: '🏠', count: 1780 },
];

const generatePriceHistory = (base: number, months: number = 6) => {
  const points = [];
  for (let i = months; i >= 0; i--) {
    const date = new Date();
    date.setMonth(date.getMonth() - i);
    const dateStr = date.toISOString().split('T')[0];
    const variation = () => Math.round(base * (0.85 + Math.random() * 0.3));
    points.push({
      date: dateStr,
      amazon: variation(),
      flipkart: variation(),
      meesho: variation(),
      reliance_digital: Math.random() > 0.3 ? variation() : undefined,
      croma: Math.random() > 0.3 ? variation() : undefined,
    });
  }
  return points;
};

export const products: Product[] = [
  {
    id: '1',
    name: 'Samsung Galaxy S24 Ultra 5G (12GB RAM, 256GB)',
    brand: 'Samsung',
    category: 'smartphones',
    image: 'https://images.unsplash.com/photo-1610945415295-d9bbf067e59c?w=400&h=400&fit=crop',
    description: 'Flagship smartphone with S Pen, 200MP camera, Snapdragon 8 Gen 3',
    listings: [
      { platform: 'amazon', price: 119999, originalPrice: 134999, discount: 11, sellerRating: 4.5, deliveryDays: 2, inStock: true, url: '#' },
      { platform: 'flipkart', price: 117999, originalPrice: 134999, discount: 13, sellerRating: 4.4, deliveryDays: 3, inStock: true, url: '#' },
      { platform: 'croma', price: 124999, originalPrice: 134999, discount: 7, sellerRating: 4.2, deliveryDays: 5, inStock: true, url: '#' },
      { platform: 'reliance_digital', price: 121999, originalPrice: 134999, discount: 10, sellerRating: 4.3, deliveryDays: 4, inStock: true, url: '#' },
    ],
    lowestPrice: 117999,
    highestPrice: 124999,
    avgRating: 4.4,
    totalReviews: 12450,
    priceHistory: generatePriceHistory(120000),
  },
  {
    id: '2',
    name: 'Apple MacBook Air M3 (8GB/256GB)',
    brand: 'Apple',
    category: 'laptops',
    image: 'https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=400&h=400&fit=crop',
    description: 'Ultra-thin laptop with M3 chip, 15-hour battery, Liquid Retina display',
    listings: [
      { platform: 'amazon', price: 104900, originalPrice: 114900, discount: 9, sellerRating: 4.6, deliveryDays: 2, inStock: true, url: '#' },
      { platform: 'flipkart', price: 103900, originalPrice: 114900, discount: 10, sellerRating: 4.5, deliveryDays: 3, inStock: true, url: '#' },
      { platform: 'croma', price: 109900, originalPrice: 114900, discount: 4, sellerRating: 4.3, deliveryDays: 5, inStock: true, url: '#' },
      { platform: 'reliance_digital', price: 106900, originalPrice: 114900, discount: 7, sellerRating: 4.4, deliveryDays: 4, inStock: true, url: '#' },
    ],
    lowestPrice: 103900,
    highestPrice: 109900,
    avgRating: 4.7,
    totalReviews: 8920,
    priceHistory: generatePriceHistory(105000),
  },
  {
    id: '3',
    name: 'Sony WH-1000XM5 Wireless Headphones',
    brand: 'Sony',
    category: 'headphones',
    image: 'https://images.unsplash.com/photo-1618366712010-f4ae9c647dcb?w=400&h=400&fit=crop',
    description: 'Industry-leading noise cancellation, 30hr battery, multipoint connection',
    listings: [
      { platform: 'amazon', price: 22990, originalPrice: 34990, discount: 34, sellerRating: 4.5, deliveryDays: 1, inStock: true, url: '#' },
      { platform: 'flipkart', price: 23490, originalPrice: 34990, discount: 33, sellerRating: 4.4, deliveryDays: 2, inStock: true, url: '#' },
      { platform: 'croma', price: 26990, originalPrice: 34990, discount: 23, sellerRating: 4.2, deliveryDays: 4, inStock: true, url: '#' },
      { platform: 'meesho', price: 24990, originalPrice: 34990, discount: 29, sellerRating: 3.9, deliveryDays: 6, inStock: true, url: '#' },
    ],
    lowestPrice: 22990,
    highestPrice: 26990,
    avgRating: 4.6,
    totalReviews: 15670,
    priceHistory: generatePriceHistory(25000),
  },
  {
    id: '4',
    name: 'iPhone 15 Pro Max (256GB) - Natural Titanium',
    brand: 'Apple',
    category: 'smartphones',
    image: 'https://images.unsplash.com/photo-1695048133142-1a20484d2569?w=400&h=400&fit=crop',
    description: 'A17 Pro chip, 48MP camera system, titanium design, USB-C',
    listings: [
      { platform: 'amazon', price: 149900, originalPrice: 159900, discount: 6, sellerRating: 4.7, deliveryDays: 1, inStock: true, url: '#' },
      { platform: 'flipkart', price: 146900, originalPrice: 159900, discount: 8, sellerRating: 4.6, deliveryDays: 2, inStock: true, url: '#' },
      { platform: 'croma', price: 155900, originalPrice: 159900, discount: 3, sellerRating: 4.3, deliveryDays: 3, inStock: true, url: '#' },
    ],
    lowestPrice: 146900,
    highestPrice: 155900,
    avgRating: 4.7,
    totalReviews: 22100,
    priceHistory: generatePriceHistory(150000),
  },
  {
    id: '5',
    name: 'LG 55" 4K OLED evo C3 Smart TV',
    brand: 'LG',
    category: 'tvs',
    image: 'https://images.unsplash.com/photo-1593359677879-a4bb92f829d1?w=400&h=400&fit=crop',
    description: 'OLED evo, α9 Gen6 AI Processor, Dolby Vision & Atmos, webOS 23',
    listings: [
      { platform: 'amazon', price: 99990, originalPrice: 164990, discount: 39, sellerRating: 4.4, deliveryDays: 4, inStock: true, url: '#' },
      { platform: 'flipkart', price: 97990, originalPrice: 164990, discount: 41, sellerRating: 4.3, deliveryDays: 5, inStock: true, url: '#' },
      { platform: 'reliance_digital', price: 104990, originalPrice: 164990, discount: 36, sellerRating: 4.5, deliveryDays: 7, inStock: true, url: '#' },
      { platform: 'croma', price: 102990, originalPrice: 164990, discount: 38, sellerRating: 4.4, deliveryDays: 6, inStock: true, url: '#' },
    ],
    lowestPrice: 97990,
    highestPrice: 104990,
    avgRating: 4.5,
    totalReviews: 5430,
    priceHistory: generatePriceHistory(105000),
  },
  {
    id: '6',
    name: 'boAt Airdopes 141 TWS Earbuds',
    brand: 'boAt',
    category: 'headphones',
    image: 'https://images.unsplash.com/photo-1590658268037-6bf12f032f55?w=400&h=400&fit=crop',
    description: '42H playtime, ENx technology, IWP, IPX4, Bluetooth v5.3',
    listings: [
      { platform: 'amazon', price: 999, originalPrice: 4490, discount: 78, sellerRating: 4.1, deliveryDays: 1, inStock: true, url: '#' },
      { platform: 'flipkart', price: 899, originalPrice: 4490, discount: 80, sellerRating: 4.0, deliveryDays: 2, inStock: true, url: '#' },
      { platform: 'meesho', price: 799, originalPrice: 4490, discount: 82, sellerRating: 3.8, deliveryDays: 5, inStock: true, url: '#' },
    ],
    lowestPrice: 799,
    highestPrice: 999,
    avgRating: 4.0,
    totalReviews: 345000,
    priceHistory: generatePriceHistory(900),
  },
];

export const deals: Deal[] = [
  {
    id: 'd1',
    product: products[2],
    discountPercent: 34,
    dealType: 'hot',
    expiresAt: new Date(Date.now() + 3600000 * 4).toISOString(),
    detectedAt: new Date(Date.now() - 3600000 * 2).toISOString(),
  },
  {
    id: 'd2',
    product: products[5],
    discountPercent: 82,
    dealType: 'hot',
    expiresAt: new Date(Date.now() + 3600000 * 8).toISOString(),
    detectedAt: new Date(Date.now() - 3600000 * 1).toISOString(),
  },
  {
    id: 'd3',
    product: products[4],
    discountPercent: 41,
    dealType: 'good',
    expiresAt: new Date(Date.now() + 3600000 * 12).toISOString(),
    detectedAt: new Date(Date.now() - 3600000 * 5).toISOString(),
  },
  {
    id: 'd4',
    product: products[1],
    discountPercent: 10,
    dealType: 'regular',
    expiresAt: new Date(Date.now() + 3600000 * 24).toISOString(),
    detectedAt: new Date(Date.now() - 3600000 * 8).toISOString(),
  },
];
