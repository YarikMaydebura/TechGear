import type { Brand } from '@/types'

export const brands: Brand[] = [
  {
    id: '1',
    name: 'Apple',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/f/fa/Apple_logo_black.svg',
    slug: 'apple',
    productCount: 45,
  },
  {
    id: '2',
    name: 'Samsung',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/2/24/Samsung_Logo.svg',
    slug: 'samsung',
    productCount: 38,
  },
  {
    id: '3',
    name: 'Sony',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/c/ca/Sony_logo.svg',
    slug: 'sony',
    productCount: 32,
  },
  {
    id: '4',
    name: 'LG',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/2/20/LG_symbol.svg',
    slug: 'lg',
    productCount: 18,
  },
  {
    id: '5',
    name: 'Dell',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/4/48/Dell_Logo.svg',
    slug: 'dell',
    productCount: 24,
  },
  {
    id: '6',
    name: 'ASUS',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/2/2e/ASUS_Logo.svg',
    slug: 'asus',
    productCount: 28,
  },
  {
    id: '7',
    name: 'Google',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg',
    slug: 'google',
    productCount: 15,
  },
  {
    id: '8',
    name: 'Bose',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/8/8c/Bose_logo.svg',
    slug: 'bose',
    productCount: 22,
  },
  {
    id: '9',
    name: 'Microsoft',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/9/96/Microsoft_logo_%282012%29.svg',
    slug: 'microsoft',
    productCount: 20,
  },
  {
    id: '10',
    name: 'Logitech',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/a/ad/Logitech_logo.svg',
    slug: 'logitech',
    productCount: 35,
  },
]

export function getBrandBySlug(slug: string): Brand | undefined {
  return brands.find(b => b.slug === slug)
}

export function getBrandById(id: string): Brand | undefined {
  return brands.find(b => b.id === id)
}
