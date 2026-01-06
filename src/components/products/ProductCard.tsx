import { useState } from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import {
  Heart,
  ShoppingCart,
  Star,
  Check,
  Eye,
} from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Card, CardContent } from '@/components/ui/card'
import { Checkbox } from '@/components/ui/checkbox'
import { cn, formatPrice, formatDiscount } from '@/lib/utils'
import { useCartStore } from '@/stores/cartStore'
import { useWishlistStore } from '@/stores/wishlistStore'
import { useCompareStore } from '@/stores/compareStore'
import { toast } from 'sonner'
import type { Product } from '@/types'

interface ProductCardProps {
  product: Product
  className?: string
}

export default function ProductCard({ product, className }: ProductCardProps) {
  const [isHovered, setIsHovered] = useState(false)
  const [isAddingToCart, setIsAddingToCart] = useState(false)

  const addToCart = useCartStore(state => state.addItem)
  const { isInWishlist, toggleWishlist } = useWishlistStore()
  const { isInCompare, addToCompare, removeFromCompare } = useCompareStore()

  const inWishlist = isInWishlist(product.id)
  const inCompare = isInCompare(product.id)

  const handleAddToCart = (e: React.MouseEvent) => {
    e.preventDefault()
    e.stopPropagation()

    setIsAddingToCart(true)
    addToCart(product, 1, {
      color: product.colors?.[0]?.name,
      storage: product.storage?.[0],
    })

    toast.success('Added to cart', {
      description: product.name,
    })

    setTimeout(() => setIsAddingToCart(false), 1500)
  }

  const handleWishlistToggle = (e: React.MouseEvent) => {
    e.preventDefault()
    e.stopPropagation()

    toggleWishlist(product.id)
    toast.success(inWishlist ? 'Removed from wishlist' : 'Added to wishlist', {
      description: product.name,
    })
  }

  const handleCompareToggle = (e: React.MouseEvent) => {
    e.preventDefault()
    e.stopPropagation()

    if (inCompare) {
      removeFromCompare(product.id)
      toast.success('Removed from compare')
    } else {
      const result = addToCompare(product)
      if (result.success) {
        toast.success('Added to compare')
      } else {
        toast.error(result.error)
      }
    }
  }

  const discount = product.originalPrice
    ? formatDiscount(product.originalPrice, product.price)
    : null

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      whileHover={{ y: -8 }}
      transition={{ duration: 0.3 }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      className={className}
    >
      <Card className="group relative overflow-hidden border-border/50 hover:border-primary/50 transition-all duration-300 hover:shadow-xl hover:shadow-primary/5 h-full">
        {/* Badges */}
        <div className="absolute top-3 left-3 z-10 flex flex-col gap-1">
          {discount && (
            <Badge variant="destructive" className="font-semibold">
              -{discount}%
            </Badge>
          )}
          {product.isNewArrival && (
            <Badge className="bg-accent text-accent-foreground">New</Badge>
          )}
          {product.isBestSeller && (
            <Badge variant="secondary">Best Seller</Badge>
          )}
        </div>

        {/* Wishlist Button */}
        <Button
          variant="ghost"
          size="icon"
          className={cn(
            'absolute top-3 right-3 z-10 w-8 h-8 rounded-full bg-background/80 backdrop-blur-sm transition-all',
            inWishlist && 'text-red-500'
          )}
          onClick={handleWishlistToggle}
        >
          <Heart
            className={cn('w-4 h-4', inWishlist && 'fill-current')}
          />
        </Button>

        <Link to={`/product/${product.id}`}>
          <CardContent className="p-0">
            {/* Image Container */}
            <div className="relative aspect-square overflow-hidden bg-gradient-to-br from-muted to-muted/50">
              <motion.img
                src={product.images[0]}
                alt={product.name}
                className="w-full h-full object-cover"
                animate={{ scale: isHovered ? 1.1 : 1 }}
                transition={{ duration: 0.5 }}
              />

              {/* Quick Actions Overlay */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: isHovered ? 1 : 0 }}
                className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent flex items-end justify-center pb-4 gap-2"
              >
                <Button
                  size="sm"
                  className={cn(
                    'gap-2 transition-all',
                    isAddingToCart && 'bg-success'
                  )}
                  onClick={handleAddToCart}
                  disabled={!product.inStock}
                >
                  {isAddingToCart ? (
                    <>
                      <Check className="w-4 h-4" />
                      Added!
                    </>
                  ) : (
                    <>
                      <ShoppingCart className="w-4 h-4" />
                      Add to Cart
                    </>
                  )}
                </Button>
                <Button
                  size="sm"
                  variant="secondary"
                  asChild
                >
                  <Link to={`/product/${product.id}`}>
                    <Eye className="w-4 h-4" />
                  </Link>
                </Button>
              </motion.div>
            </div>

            {/* Content */}
            <div className="p-4 space-y-3">
              {/* Brand */}
              <p className="text-xs text-muted-foreground uppercase tracking-wider">
                {product.brand}
              </p>

              {/* Name */}
              <h3 className="font-medium text-sm line-clamp-2 leading-snug group-hover:text-primary transition-colors">
                {product.name}
              </h3>

              {/* Rating */}
              <div className="flex items-center gap-2">
                <div className="flex items-center gap-0.5">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star
                      key={i}
                      className={cn(
                        'w-3.5 h-3.5',
                        i < Math.floor(product.rating)
                          ? 'fill-amber-400 text-amber-400'
                          : 'fill-muted text-muted'
                      )}
                    />
                  ))}
                </div>
                <span className="text-xs text-muted-foreground">
                  ({product.reviewCount})
                </span>
              </div>

              {/* Price */}
              <div className="flex items-baseline gap-2">
                <span className="text-lg font-bold">
                  {formatPrice(product.price)}
                </span>
                {product.originalPrice && (
                  <span className="text-sm text-muted-foreground line-through">
                    {formatPrice(product.originalPrice)}
                  </span>
                )}
              </div>

              {/* Stock Status */}
              {!product.inStock && (
                <Badge variant="outline" className="text-destructive">
                  Out of Stock
                </Badge>
              )}

              {/* Compare Checkbox */}
              <div
                className="flex items-center gap-2 pt-2 border-t border-border"
                onClick={handleCompareToggle}
              >
                <Checkbox
                  checked={inCompare}
                  className="data-[state=checked]:bg-accent data-[state=checked]:border-accent"
                />
                <span className="text-xs text-muted-foreground">
                  Add to compare
                </span>
              </div>
            </div>
          </CardContent>
        </Link>
      </Card>
    </motion.div>
  )
}
