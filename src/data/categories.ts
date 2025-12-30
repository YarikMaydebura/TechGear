import type { Category } from '@/types'

export const categories: Category[] = [
  {
    id: '1',
    name: 'Smartphones',
    slug: 'smartphones',
    icon: 'Smartphone',
    image: 'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=400',
    productCount: 45,
    description: 'Latest smartphones from top brands',
    subcategories: [
      { id: '1-1', name: 'iPhone', slug: 'iphone', productCount: 12 },
      { id: '1-2', name: 'Samsung Galaxy', slug: 'samsung-galaxy', productCount: 15 },
      { id: '1-3', name: 'Google Pixel', slug: 'google-pixel', productCount: 8 },
      { id: '1-4', name: 'OnePlus', slug: 'oneplus', productCount: 10 },
    ],
  },
  {
    id: '2',
    name: 'Laptops',
    slug: 'laptops',
    icon: 'Laptop',
    image: 'https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=400',
    productCount: 38,
    description: 'Powerful laptops for work and gaming',
    subcategories: [
      { id: '2-1', name: 'MacBook', slug: 'macbook', productCount: 8 },
      { id: '2-2', name: 'Windows Laptops', slug: 'windows-laptops', productCount: 20 },
      { id: '2-3', name: 'Gaming Laptops', slug: 'gaming-laptops', productCount: 10 },
    ],
  },
  {
    id: '3',
    name: 'Audio',
    slug: 'audio',
    icon: 'Headphones',
    image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=400',
    productCount: 52,
    description: 'Premium headphones, earbuds and speakers',
    subcategories: [
      { id: '3-1', name: 'Headphones', slug: 'headphones', productCount: 20 },
      { id: '3-2', name: 'Earbuds', slug: 'earbuds', productCount: 18 },
      { id: '3-3', name: 'Speakers', slug: 'speakers', productCount: 14 },
    ],
  },
  {
    id: '4',
    name: 'Wearables',
    slug: 'wearables',
    icon: 'Watch',
    image: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=400',
    productCount: 28,
    description: 'Smartwatches and fitness trackers',
    subcategories: [
      { id: '4-1', name: 'Smartwatches', slug: 'smartwatches', productCount: 15 },
      { id: '4-2', name: 'Fitness Trackers', slug: 'fitness-trackers', productCount: 13 },
    ],
  },
  {
    id: '5',
    name: 'Tablets',
    slug: 'tablets',
    icon: 'Tablet',
    image: 'https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?w=400',
    productCount: 22,
    description: 'iPads and Android tablets',
    subcategories: [
      { id: '5-1', name: 'iPad', slug: 'ipad', productCount: 10 },
      { id: '5-2', name: 'Android Tablets', slug: 'android-tablets', productCount: 12 },
    ],
  },
  {
    id: '6',
    name: 'Gaming',
    slug: 'gaming',
    icon: 'Gamepad2',
    image: 'https://images.unsplash.com/photo-1612287230202-1ff1d85d1bdf?w=400',
    productCount: 41,
    description: 'Gaming consoles, controllers and accessories',
    subcategories: [
      { id: '6-1', name: 'Consoles', slug: 'consoles', productCount: 8 },
      { id: '6-2', name: 'Controllers', slug: 'controllers', productCount: 15 },
      { id: '6-3', name: 'Gaming Accessories', slug: 'gaming-accessories', productCount: 18 },
    ],
  },
  {
    id: '7',
    name: 'Cameras',
    slug: 'cameras',
    icon: 'Camera',
    image: 'https://images.unsplash.com/photo-1516035069371-29a1b244cc32?w=400',
    productCount: 19,
    description: 'DSLR, mirrorless and action cameras',
    subcategories: [
      { id: '7-1', name: 'DSLR', slug: 'dslr', productCount: 6 },
      { id: '7-2', name: 'Mirrorless', slug: 'mirrorless', productCount: 8 },
      { id: '7-3', name: 'Action Cameras', slug: 'action-cameras', productCount: 5 },
    ],
  },
  {
    id: '8',
    name: 'Accessories',
    slug: 'accessories',
    icon: 'Cable',
    image: 'https://images.unsplash.com/photo-1583394838336-acd977736f90?w=400',
    productCount: 87,
    description: 'Cases, chargers, cables and more',
    subcategories: [
      { id: '8-1', name: 'Cases & Protection', slug: 'cases', productCount: 30 },
      { id: '8-2', name: 'Chargers & Cables', slug: 'chargers-cables', productCount: 25 },
      { id: '8-3', name: 'Power Banks', slug: 'power-banks', productCount: 15 },
      { id: '8-4', name: 'Mounts & Stands', slug: 'mounts-stands', productCount: 17 },
    ],
  },
]

export function getCategoryBySlug(slug: string): Category | undefined {
  return categories.find(c => c.slug === slug)
}

export function getCategoryById(id: string): Category | undefined {
  return categories.find(c => c.id === id)
}
