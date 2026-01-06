import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import { Button } from '@/components/ui/button'
import ProductCard from '@/components/products/ProductCard'
import { getFeaturedProducts, getBestSellers, getNewArrivals } from '@/data/products'
import type { Product } from '@/types'

interface FeaturedProductsProps {
  title: string
  subtitle?: string
  filter?: 'featured' | 'bestSellers' | 'newArrivals'
  products?: Product[]
  showViewAll?: boolean
  viewAllLink?: string
}

export default function FeaturedProducts({
  title,
  subtitle,
  filter = 'featured',
  products: productsProp,
  showViewAll = true,
  viewAllLink = '/shop',
}: FeaturedProductsProps) {
  const getProducts = () => {
    if (productsProp) return productsProp

    switch (filter) {
      case 'bestSellers':
        return getBestSellers()
      case 'newArrivals':
        return getNewArrivals()
      default:
        return getFeaturedProducts()
    }
  }

  const products = getProducts().slice(0, 4)

  return (
    <section className="py-16 md:py-24">
      <div className="container-custom">
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row items-start sm:items-end justify-between gap-4 mb-10">
          <div>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="font-heading text-3xl md:text-4xl font-bold mb-2"
            >
              {title}
            </motion.h2>
            {subtitle && (
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="text-muted-foreground"
              >
                {subtitle}
              </motion.p>
            )}
          </div>

          {showViewAll && (
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <Button variant="ghost" className="gap-2 group" asChild>
                <Link to={viewAllLink}>
                  View All
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
            </motion.div>
          )}
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <ProductCard product={product} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
