import { Fragment } from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { GitCompare, X, ShoppingCart, Star } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { useCompareStore } from '@/stores/compareStore'
import { useCartStore } from '@/stores/cartStore'
import { formatPrice } from '@/lib/utils'
import { toast } from 'sonner'

export default function Compare() {
  const { items, removeFromCompare, clearCompare } = useCompareStore()
  const addToCart = useCartStore(state => state.addItem)

  const handleAddToCart = (productId: string) => {
    const product = items.find(p => p.id === productId)
    if (product) {
      addToCart(product, 1)
      toast.success('Added to cart', { description: product.name })
    }
  }

  if (items.length === 0) {
    return (
      <div className="container-custom py-16 text-center min-h-[60vh] flex items-center justify-center">
        <div className="max-w-md mx-auto">
          <div className="w-24 h-24 mx-auto mb-6 rounded-full bg-muted flex items-center justify-center">
            <GitCompare className="w-12 h-12 text-muted-foreground" />
          </div>
          <h1 className="font-heading text-2xl font-bold mb-4">
            No products to compare
          </h1>
          <p className="text-muted-foreground mb-8">
            Add products to compare their features side by side.
          </p>
          <Button size="lg" asChild>
            <Link to="/shop">Browse Products</Link>
          </Button>
        </div>
      </div>
    )
  }

  const allSpecGroups = new Set<string>()
  const specsByGroup: Record<string, Set<string>> = {}

  items.forEach(product => {
    Object.entries(product.specifications).forEach(([group, specs]) => {
      allSpecGroups.add(group)
      if (!specsByGroup[group]) {
        specsByGroup[group] = new Set()
      }
      Object.keys(specs).forEach(key => specsByGroup[group].add(key))
    })
  })

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
            Compare Products
          </h1>
          <p className="text-muted-foreground mt-1">
            {items.length} products selected
          </p>
        </div>
        <Button variant="outline" onClick={clearCompare}>
          Clear All
        </Button>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full border-collapse min-w-[800px]">
          <thead>
            <tr>
              <th className="p-4 text-left w-48 bg-muted/50 sticky left-0">
                <span className="text-sm font-medium text-muted-foreground">Product</span>
              </th>
              {items.map(product => (
                <th key={product.id} className="p-4 text-center min-w-[250px]">
                  <div className="relative">
                    <Button
                      variant="ghost"
                      size="icon"
                      className="absolute -top-2 -right-2"
                      onClick={() => removeFromCompare(product.id)}
                    >
                      <X className="w-4 h-4" />
                    </Button>
                    <Link to={`/product/${product.id}`}>
                      <div className="w-32 h-32 mx-auto mb-3 rounded-lg overflow-hidden bg-muted">
                        <img src={product.images[0]} alt={product.name} className="w-full h-full object-cover" />
                      </div>
                      <p className="font-medium hover:text-primary transition-colors">{product.name}</p>
                    </Link>
                    <p className="text-sm text-muted-foreground">{product.brand}</p>
                  </div>
                </th>
              ))}
            </tr>
          </thead>

          <tbody>
            <tr className="border-t border-border">
              <td className="p-4 bg-muted/50 sticky left-0 font-medium">Price</td>
              {items.map(product => (
                <td key={product.id} className="p-4 text-center">
                  <span className="text-xl font-bold">{formatPrice(product.price)}</span>
                  {product.originalPrice && (
                    <span className="ml-2 text-sm text-muted-foreground line-through">
                      {formatPrice(product.originalPrice)}
                    </span>
                  )}
                </td>
              ))}
            </tr>

            <tr className="border-t border-border">
              <td className="p-4 bg-muted/50 sticky left-0 font-medium">Rating</td>
              {items.map(product => (
                <td key={product.id} className="p-4 text-center">
                  <div className="flex items-center justify-center gap-1">
                    <Star className="w-4 h-4 fill-amber-400 text-amber-400" />
                    <span className="font-medium">{product.rating}</span>
                    <span className="text-muted-foreground">({product.reviewCount})</span>
                  </div>
                </td>
              ))}
            </tr>

            <tr className="border-t border-border">
              <td className="p-4 bg-muted/50 sticky left-0 font-medium">Availability</td>
              {items.map(product => (
                <td key={product.id} className="p-4 text-center">
                  {product.inStock ? (
                    <Badge variant="outline" className="text-success border-success">In Stock</Badge>
                  ) : (
                    <Badge variant="outline" className="text-destructive">Out of Stock</Badge>
                  )}
                </td>
              ))}
            </tr>

            {Array.from(allSpecGroups).map(group => (
              <Fragment key={group}>
                {/* Group Header */}
                <tr className="border-t border-border">
                  <td colSpan={items.length + 1} className="p-4 bg-primary/5 font-heading font-semibold">
                    {group}
                  </td>
                </tr>
                {/* Specs within this group */}
                {Array.from(specsByGroup[group] || []).map(specKey => (
                  <tr key={`${group}-${specKey}`} className="border-t border-border">
                    <td className="p-4 bg-muted/50 sticky left-0 text-sm">{specKey}</td>
                    {items.map(product => (
                      <td key={product.id} className="p-4 text-center text-sm">
                        {product.specifications[group]?.[specKey] || '—'}
                      </td>
                    ))}
                  </tr>
                ))}
              </Fragment>
            ))}

            <tr className="border-t border-border">
              <td className="p-4 bg-muted/50 sticky left-0"></td>
              {items.map(product => (
                <td key={product.id} className="p-4 text-center">
                  <Button className="gap-2" onClick={() => handleAddToCart(product.id)} disabled={!product.inStock}>
                    <ShoppingCart className="w-4 h-4" />
                    Add to Cart
                  </Button>
                </td>
              ))}
            </tr>
          </tbody>
        </table>
      </div>
    </motion.div>
  )
}
