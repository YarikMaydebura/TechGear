import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { Heart } from 'lucide-react'
import { Button } from '@/components/ui/button'
import ProductGrid from '@/components/products/ProductGrid'
import { useWishlistStore } from '@/stores/wishlistStore'
import { products } from '@/data/products'

export default function Wishlist() {
  const { productIds, clearWishlist } = useWishlistStore()

  const wishlistProducts = products.filter(p => productIds.includes(p.id))

  if (wishlistProducts.length === 0) {
    return (
      <div className="container-custom py-16 text-center min-h-[60vh] flex items-center justify-center">
        <div className="max-w-md mx-auto">
          <div className="w-24 h-24 mx-auto mb-6 rounded-full bg-muted flex items-center justify-center">
            <Heart className="w-12 h-12 text-muted-foreground" />
          </div>
          <h1 className="font-heading text-2xl font-bold mb-4">
            Your wishlist is empty
          </h1>
          <p className="text-muted-foreground mb-8">
            Save items you love to your wishlist and come back to them later.
          </p>
          <Button size="lg" asChild>
            <Link to="/shop">Browse Products</Link>
          </Button>
        </div>
      </div>
    )
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="container-custom py-8"
    >
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="font-heading text-3xl md:text-4xl font-bold">
            My Wishlist
          </h1>
          <p className="text-muted-foreground mt-1">
            {wishlistProducts.length} items saved
          </p>
        </div>
        <Button variant="outline" onClick={clearWishlist}>
          Clear All
        </Button>
      </div>

      <ProductGrid products={wishlistProducts} />
    </motion.div>
  )
}
