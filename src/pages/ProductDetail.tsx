import { useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { motion } from 'framer-motion'
import {
  Heart,
  ShoppingCart,
  GitCompare,
  Star,
  Check,
  Truck,
  RotateCcw,
  Shield,
  Share2,
} from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { Separator } from '@/components/ui/separator'
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from '@/components/ui/breadcrumb'
import FeaturedProducts from '@/components/home/FeaturedProducts'
import { getProductById, products } from '@/data/products'
import { useCartStore } from '@/stores/cartStore'
import { useWishlistStore } from '@/stores/wishlistStore'
import { useCompareStore } from '@/stores/compareStore'
import { formatPrice, formatDiscount, cn } from '@/lib/utils'
import { toast } from 'sonner'

export default function ProductDetail() {
  const { id } = useParams<{ id: string }>()
  const navigate = useNavigate()
  const product = getProductById(id || '')

  const [selectedImage, setSelectedImage] = useState(0)
  const [selectedColor, setSelectedColor] = useState(product?.colors?.[0]?.name)
  const [selectedStorage, setSelectedStorage] = useState(product?.storage?.[0])
  const [quantity, setQuantity] = useState(1)
  const [isAddingToCart, setIsAddingToCart] = useState(false)

  const addToCart = useCartStore(state => state.addItem)
  const { isInWishlist, toggleWishlist } = useWishlistStore()
  const { isInCompare, addToCompare, removeFromCompare } = useCompareStore()

  if (!product) {
    return (
      <div className="container-custom py-16 text-center">
        <h1 className="font-heading text-2xl font-bold mb-4">Product not found</h1>
        <p className="text-muted-foreground mb-6">
          The product you're looking for doesn't exist.
        </p>
        <Button onClick={() => navigate('/shop')}>Back to Shop</Button>
      </div>
    )
  }

  const inWishlist = isInWishlist(product.id)
  const inCompare = isInCompare(product.id)
  const discount = product.originalPrice
    ? formatDiscount(product.originalPrice, product.price)
    : null

  const handleAddToCart = () => {
    setIsAddingToCart(true)
    addToCart(product, quantity, {
      color: selectedColor,
      storage: selectedStorage,
    })
    toast.success('Added to cart', { description: product.name })
    setTimeout(() => setIsAddingToCart(false), 1500)
  }

  const handleCompareToggle = () => {
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

  const relatedProducts = products
    .filter(p => p.category === product.category && p.id !== product.id)
    .slice(0, 4)

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <div className="container-custom py-8">
        {/* Breadcrumb */}
        <Breadcrumb className="mb-6">
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbLink href="/">Home</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbLink href="/shop">Shop</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbPage>{product.name}</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>

        {/* Product Section */}
        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          {/* Gallery */}
          <div className="space-y-4">
            {/* Main Image */}
            <motion.div
              key={selectedImage}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="aspect-square rounded-2xl overflow-hidden bg-muted"
            >
              <img
                src={product.images[selectedImage]}
                alt={product.name}
                className="w-full h-full object-cover"
              />
            </motion.div>

            {/* Thumbnails */}
            {product.images.length > 1 && (
              <div className="flex gap-3 overflow-x-auto pb-2">
                {product.images.map((image, index) => (
                  <button
                    key={index}
                    onClick={() => setSelectedImage(index)}
                    className={cn(
                      'w-20 h-20 rounded-lg overflow-hidden border-2 transition-all shrink-0',
                      selectedImage === index
                        ? 'border-primary'
                        : 'border-transparent hover:border-border'
                    )}
                  >
                    <img
                      src={image}
                      alt={`${product.name} ${index + 1}`}
                      className="w-full h-full object-cover"
                    />
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Product Info */}
          <div className="space-y-6">
            {/* Badges */}
            <div className="flex flex-wrap gap-2">
              {discount && (
                <Badge variant="destructive">-{discount}% OFF</Badge>
              )}
              {product.isNewArrival && (
                <Badge className="bg-accent">New Arrival</Badge>
              )}
              {product.isBestSeller && <Badge>Best Seller</Badge>}
            </div>

            {/* Brand */}
            <p className="text-sm text-muted-foreground uppercase tracking-wider">
              {product.brand}
            </p>

            {/* Name */}
            <h1 className="font-heading text-3xl md:text-4xl font-bold">
              {product.name}
            </h1>

            {/* Rating */}
            <div className="flex items-center gap-3">
              <div className="flex items-center gap-1">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star
                    key={i}
                    className={cn(
                      'w-5 h-5',
                      i < Math.floor(product.rating)
                        ? 'fill-amber-400 text-amber-400'
                        : 'fill-muted text-muted'
                    )}
                  />
                ))}
              </div>
              <span className="font-medium">{product.rating}</span>
              <span className="text-muted-foreground">
                ({product.reviewCount} reviews)
              </span>
            </div>

            {/* Price */}
            <div className="flex items-baseline gap-3">
              <span className="text-3xl font-bold">
                {formatPrice(product.price)}
              </span>
              {product.originalPrice && (
                <span className="text-xl text-muted-foreground line-through">
                  {formatPrice(product.originalPrice)}
                </span>
              )}
            </div>

            {/* Description */}
            <p className="text-muted-foreground">{product.description}</p>

            <Separator />

            {/* Color Selection */}
            {product.colors && product.colors.length > 0 && (
              <div>
                <p className="text-sm font-medium mb-3">
                  Color: <span className="text-muted-foreground">{selectedColor}</span>
                </p>
                <div className="flex gap-2">
                  {product.colors.map(color => (
                    <button
                      key={color.name}
                      onClick={() => setSelectedColor(color.name)}
                      className={cn(
                        'w-10 h-10 rounded-full border-2 transition-all',
                        selectedColor === color.name
                          ? 'border-primary scale-110'
                          : 'border-transparent hover:scale-105'
                      )}
                      style={{ backgroundColor: color.hex }}
                      title={color.name}
                    />
                  ))}
                </div>
              </div>
            )}

            {/* Storage Selection */}
            {product.storage && product.storage.length > 0 && (
              <div>
                <p className="text-sm font-medium mb-3">Storage</p>
                <div className="flex flex-wrap gap-2">
                  {product.storage.map(storage => (
                    <Button
                      key={storage}
                      variant={selectedStorage === storage ? 'default' : 'outline'}
                      onClick={() => setSelectedStorage(storage)}
                    >
                      {storage}
                    </Button>
                  ))}
                </div>
              </div>
            )}

            {/* Quantity */}
            <div>
              <p className="text-sm font-medium mb-3">Quantity</p>
              <div className="flex items-center gap-3">
                <Button
                  variant="outline"
                  size="icon"
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                >
                  -
                </Button>
                <span className="w-12 text-center font-medium">{quantity}</span>
                <Button
                  variant="outline"
                  size="icon"
                  onClick={() => setQuantity(quantity + 1)}
                >
                  +
                </Button>
              </div>
            </div>

            {/* Actions */}
            <div className="flex flex-wrap gap-3">
              <Button
                size="lg"
                className={cn('flex-1 gap-2', isAddingToCart && 'bg-success')}
                onClick={handleAddToCart}
                disabled={!product.inStock}
              >
                {isAddingToCart ? (
                  <>
                    <Check className="w-5 h-5" />
                    Added!
                  </>
                ) : (
                  <>
                    <ShoppingCart className="w-5 h-5" />
                    Add to Cart
                  </>
                )}
              </Button>

              <Button
                size="lg"
                variant="outline"
                onClick={() => toggleWishlist(product.id)}
                className={cn(inWishlist && 'text-red-500')}
              >
                <Heart className={cn('w-5 h-5', inWishlist && 'fill-current')} />
              </Button>

              <Button
                size="lg"
                variant="outline"
                onClick={handleCompareToggle}
                className={cn(inCompare && 'text-accent')}
              >
                <GitCompare className="w-5 h-5" />
              </Button>

              <Button size="lg" variant="outline">
                <Share2 className="w-5 h-5" />
              </Button>
            </div>

            {/* Stock Status */}
            {product.inStock ? (
              <div className="flex items-center gap-2 text-success">
                <Check className="w-5 h-5" />
                <span>In Stock</span>
                {product.stockCount && (
                  <span className="text-muted-foreground">
                    ({product.stockCount} available)
                  </span>
                )}
              </div>
            ) : (
              <div className="text-destructive">Out of Stock</div>
            )}

            {/* Features */}
            <div className="grid grid-cols-3 gap-4 py-4 border-t border-b border-border">
              <div className="text-center">
                <Truck className="w-6 h-6 mx-auto mb-2 text-primary" />
                <p className="text-xs text-muted-foreground">Free Shipping</p>
              </div>
              <div className="text-center">
                <RotateCcw className="w-6 h-6 mx-auto mb-2 text-primary" />
                <p className="text-xs text-muted-foreground">30-Day Returns</p>
              </div>
              <div className="text-center">
                <Shield className="w-6 h-6 mx-auto mb-2 text-primary" />
                <p className="text-xs text-muted-foreground">2-Year Warranty</p>
              </div>
            </div>
          </div>
        </div>

        {/* Tabs */}
        <Tabs defaultValue="highlights" className="mb-16">
          <TabsList className="w-full justify-start border-b rounded-none h-auto p-0 bg-transparent">
            <TabsTrigger
              value="highlights"
              className="rounded-none border-b-2 border-transparent data-[state=active]:border-primary"
            >
              Highlights
            </TabsTrigger>
            <TabsTrigger
              value="specifications"
              className="rounded-none border-b-2 border-transparent data-[state=active]:border-primary"
            >
              Specifications
            </TabsTrigger>
            <TabsTrigger
              value="reviews"
              className="rounded-none border-b-2 border-transparent data-[state=active]:border-primary"
            >
              Reviews ({product.reviewCount})
            </TabsTrigger>
          </TabsList>

          <TabsContent value="highlights" className="pt-6">
            <ul className="space-y-3">
              {product.highlights.map((highlight, index) => (
                <li key={index} className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                  <span>{highlight}</span>
                </li>
              ))}
            </ul>
          </TabsContent>

          <TabsContent value="specifications" className="pt-6">
            <div className="space-y-6">
              {Object.entries(product.specifications).map(([group, specs]) => (
                <div key={group}>
                  <h3 className="font-heading font-semibold text-lg mb-3">
                    {group}
                  </h3>
                  <div className="bg-card rounded-lg border border-border overflow-hidden">
                    {Object.entries(specs).map(([key, value], index) => (
                      <div
                        key={key}
                        className={cn(
                          'flex justify-between p-3',
                          index % 2 === 0 ? 'bg-muted/50' : ''
                        )}
                      >
                        <span className="text-muted-foreground">{key}</span>
                        <span className="font-medium">{value}</span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="reviews" className="pt-6">
            <div className="text-center py-8">
              <p className="text-muted-foreground">
                Reviews coming soon...
              </p>
            </div>
          </TabsContent>
        </Tabs>

        {/* Related Products */}
        {relatedProducts.length > 0 && (
          <FeaturedProducts
            title="Related Products"
            products={relatedProducts}
            showViewAll={false}
          />
        )}
      </div>
    </motion.div>
  )
}
