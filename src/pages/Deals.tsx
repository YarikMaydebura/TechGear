import { motion } from 'framer-motion'
import { Flame } from 'lucide-react'
import { Badge } from '@/components/ui/badge'
import ProductGrid from '@/components/products/ProductGrid'
import DealsSection from '@/components/home/DealsSection'
import { products } from '@/data/products'

export default function Deals() {
  const discountedProducts = products.filter(
    p => p.originalPrice && p.originalPrice > p.price
  )

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <DealsSection />

      <div className="container-custom py-16">
        <div className="flex items-center gap-3 mb-8">
          <Badge className="bg-destructive gap-1 text-base px-3 py-1">
            <Flame className="w-4 h-4" />
            Hot Deals
          </Badge>
          <h2 className="font-heading text-2xl md:text-3xl font-bold">
            All Discounted Products
          </h2>
        </div>

        <ProductGrid
          products={discountedProducts}
          emptyMessage="No deals available right now"
        />
      </div>
    </motion.div>
  )
}
