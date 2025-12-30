export interface Product {
  id: string
  name: string
  brand: string
  category: string
  subcategory?: string
  price: number
  originalPrice?: number
  discount?: number
  rating: number
  reviewCount: number
  inStock: boolean
  stockCount?: number
  images: string[]
  colors?: ProductColor[]
  storage?: string[]
  description: string
  highlights: string[]
  specifications: Record<string, Record<string, string>>
  isNewArrival?: boolean
  isDeal?: boolean
  isBestSeller?: boolean
  isFeatured?: boolean
  dealEndsAt?: string
}

export interface ProductColor {
  name: string
  hex: string
}

export interface CartItem {
  product: Product
  quantity: number
  selectedColor?: string
  selectedStorage?: string
}

export interface Review {
  id: string
  productId: string
  author: string
  avatar?: string
  rating: number
  title: string
  content: string
  isVerified: boolean
  createdAt: string
  helpful: number
  notHelpful: number
  images?: string[]
}

export interface Category {
  id: string
  name: string
  slug: string
  icon: string
  image: string
  productCount: number
  description?: string
  subcategories?: Subcategory[]
}

export interface Subcategory {
  id: string
  name: string
  slug: string
  productCount: number
}

export interface Brand {
  id: string
  name: string
  logo: string
  slug: string
  productCount?: number
}

export interface FilterState {
  categories: string[]
  brands: string[]
  priceRange: [number, number]
  rating: number | null
  inStock: boolean
  sortBy: SortOption
}

export type SortOption =
  | 'featured'
  | 'newest'
  | 'price-asc'
  | 'price-desc'
  | 'rating'
  | 'reviews'

export interface SortOptionItem {
  value: SortOption
  label: string
}

export interface HeroSlide {
  id: string
  title: string
  subtitle: string
  description: string
  ctaText: string
  ctaLink: string
  secondaryCtaText?: string
  secondaryCtaLink?: string
  image: string
  backgroundColor?: string
}

export interface Deal {
  id: string
  product: Product
  endsAt: string
  claimedCount: number
  totalCount: number
}

export interface NavItem {
  label: string
  href: string
  children?: NavItem[]
}

export interface CheckoutFormData {
  email: string
  firstName: string
  lastName: string
  address: string
  apartment?: string
  city: string
  state: string
  zipCode: string
  country: string
  phone: string
  shippingMethod: 'standard' | 'express' | 'overnight'
  paymentMethod: 'card' | 'paypal' | 'applepay'
  cardNumber?: string
  cardExpiry?: string
  cardCvc?: string
  saveInfo: boolean
}

export interface ShippingMethod {
  id: 'standard' | 'express' | 'overnight'
  name: string
  description: string
  price: number
  estimatedDays: string
}

export interface OrderSummary {
  subtotal: number
  shipping: number
  tax: number
  discount: number
  total: number
}

export type Theme = 'light' | 'dark' | 'system'
