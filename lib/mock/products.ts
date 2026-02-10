export type ProductBadge = "new" | { discount: number };

export interface Product {
  id: string;
  slug: string;
  name: string;
  price: number;
  originalPrice?: number;
  currency: string;
  imageUrl: string;
  collectionSlug: string;
  badge?: ProductBadge;
}

export interface Collection {
  slug: string;
  name: string;
  imageUrl: string;
  productCount: number;
}

export const COLLECTIONS: Collection[] = [
  { slug: "featured", name: "Featured", imageUrl: "https://images.unsplash.com/photo-1552374196-c4e7ffc6e126?w=600&q=80", productCount: 4 },
  { slug: "new-arrivals", name: "New Arrivals", imageUrl: "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?w=600&q=80", productCount: 6 },
  { slug: "sale", name: "Sale", imageUrl: "https://images.unsplash.com/photo-1509631179647-0177331693ae?w=600&q=80", productCount: 3 },
  { slug: "accessories", name: "Accessories", imageUrl: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=600&q=80", productCount: 5 },
];

export const PRODUCTS: Product[] = [
  { id: "1", slug: "classic-organic-tee", name: "Classic Organic Tee", price: 54, originalPrice: 60, currency: "USD", imageUrl: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=600&q=80", collectionSlug: "featured", badge: { discount: 10 } },
  { id: "2", slug: "premium-hoodie", name: "Premium Hoodie", price: 54.99, currency: "USD", imageUrl: "https://images.unsplash.com/photo-1556821840-3a63f95609a7?w=600&q=80", collectionSlug: "featured", badge: "new" },
  { id: "3", slug: "minimal-tote-bag", name: "Minimal Tote Bag", price: 36, originalPrice: 40, currency: "USD", imageUrl: "https://images.unsplash.com/photo-1548036328-c9fa89d128fa?w=600&q=80", collectionSlug: "accessories", badge: { discount: 10 } },
  { id: "4", slug: "vintage-cap", name: "Vintage Cap", price: 80, currency: "USD", imageUrl: "https://images.unsplash.com/photo-1588850561407-ed78c282e89b?w=600&q=80", collectionSlug: "accessories", badge: "new" },
  { id: "5", slug: "cozy-sweatshirt", name: "Cozy Sweatshirt", price: 27, originalPrice: 30, currency: "USD", imageUrl: "https://images.unsplash.com/photo-1576566588028-4147f3842f27?w=600&q=80", collectionSlug: "sale", badge: { discount: 10 } },
  { id: "6", slug: "canvas-poster", name: "Canvas Poster", price: 50, currency: "USD", imageUrl: "https://images.unsplash.com/photo-1513519245088-0e12902e35e0?w=600&q=80", collectionSlug: "new-arrivals", badge: "new" },
  { id: "7", slug: "linen-shirt", name: "Linen Shirt", price: 90, currency: "USD", imageUrl: "https://images.unsplash.com/photo-1596755094514-f87e34085b2c?w=600&q=80", collectionSlug: "new-arrivals", badge: "new" },
  { id: "8", slug: "leather-wallet", name: "Leather Wallet", price: 45, originalPrice: 50, currency: "USD", imageUrl: "https://images.unsplash.com/photo-1627123424574-724758594e93?w=600&q=80", collectionSlug: "accessories", badge: { discount: 10 } },
  { id: "9", slug: "sneakers-white", name: "White Sneakers", price: 18, originalPrice: 20, currency: "USD", imageUrl: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=600&q=80", collectionSlug: "new-arrivals", badge: { discount: 10 } },
  { id: "10", slug: "headphones-white", name: "Over-ear Headphones", price: 50, currency: "USD", imageUrl: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=600&q=80", collectionSlug: "accessories", badge: "new" },
];

export function getFeaturedCollections(): Collection[] {
  return COLLECTIONS.slice(0, 4);
}

export function getNewArrivals(limit = 10): Product[] {
  return PRODUCTS.slice(0, limit);
}

export function getBestSellers(limit = 8): Product[] {
  return PRODUCTS.slice(0, limit);
}
