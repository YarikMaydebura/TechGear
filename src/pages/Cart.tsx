import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ShoppingBag, Minus, Plus, Trash2, ArrowRight } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Separator } from '@/components/ui/separator'
import { Input } from '@/components/ui/input'
import { useCartStore } from '@/stores/cartStore'
import { formatPrice } from '@/lib/utils'

export default function Cart() {
  const {
    items,
    updateQuantity,
    removeItem,
    getSubtotal,
    getTax,
    getShipping,
    getTotal,
  } = useCartStore()

  if (items.length === 0) {
    return (
      <div className="container-custom py-16 text-center min-h-[60vh] flex items-center justify-center">
        <div className="max-w-md mx-auto">
          <div className="w-24 h-24 mx-auto mb-6 rounded-full bg-muted flex items-center justify-center">
            <ShoppingBag className="w-12 h-12 text-muted-foreground" />
          </div>
          <h1 className="font-heading text-2xl font-bold mb-4">
            Your cart is empty
          </h1>
          <p className="text-muted-foreground mb-8">
            Looks like you haven't added anything to your cart yet.
          </p>
          <Button size="lg" asChild>
            <Link to="/shop">Start Shopping</Link>
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
      <h1 className="font-heading text-3xl md:text-4xl font-bold mb-8">
        Shopping Cart
      </h1>

      <div className="grid lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 space-y-4">
          {items.map(item => (
            <motion.div
              key={`${item.product.id}-${item.selectedColor}-${item.selectedStorage}`}
              layout
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="flex gap-4 p-4 bg-card rounded-xl border border-border"
            >
              <div className="w-24 h-24 rounded-lg overflow-hidden bg-muted shrink-0">
                <img
                  src={item.product.images[0]}
                  alt={item.product.name}
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="flex-1 min-w-0">
                <Link
                  to={`/product/${item.product.id}`}
                  className="font-medium hover:text-primary transition-colors line-clamp-1"
                >
                  {item.product.name}
                </Link>
                <p className="text-sm text-muted-foreground">{item.product.brand}</p>
                {(item.selectedColor || item.selectedStorage) && (
                  <p className="text-sm text-muted-foreground">
                    {item.selectedColor}
                    {item.selectedStorage && ` • ${item.selectedStorage}`}
                  </p>
                )}
                <p className="font-semibold mt-1">{formatPrice(item.product.price)}</p>
              </div>

              <div className="flex items-center gap-2">
                <Button
                  variant="outline"
                  size="icon"
                  className="w-8 h-8"
                  onClick={() =>
                    updateQuantity(item.product.id, item.quantity - 1, {
                      color: item.selectedColor,
                      storage: item.selectedStorage,
                    })
                  }
                >
                  <Minus className="w-4 h-4" />
                </Button>
                <span className="w-8 text-center font-medium">{item.quantity}</span>
                <Button
                  variant="outline"
                  size="icon"
                  className="w-8 h-8"
                  onClick={() =>
                    updateQuantity(item.product.id, item.quantity + 1, {
                      color: item.selectedColor,
                      storage: item.selectedStorage,
                    })
                  }
                >
                  <Plus className="w-4 h-4" />
                </Button>
              </div>

              <div className="text-right">
                <p className="font-semibold">
                  {formatPrice(item.product.price * item.quantity)}
                </p>
                <Button
                  variant="ghost"
                  size="sm"
                  className="text-destructive hover:text-destructive mt-2"
                  onClick={() =>
                    removeItem(item.product.id, {
                      color: item.selectedColor,
                      storage: item.selectedStorage,
                    })
                  }
                >
                  <Trash2 className="w-4 h-4" />
                </Button>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="lg:col-span-1">
          <div className="sticky top-24 bg-card rounded-xl border border-border p-6">
            <h2 className="font-heading text-xl font-semibold mb-4">Order Summary</h2>

            <div className="space-y-3 text-sm">
              <div className="flex justify-between">
                <span className="text-muted-foreground">Subtotal</span>
                <span>{formatPrice(getSubtotal())}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted-foreground">Shipping</span>
                <span>
                  {getShipping() === 0 ? (
                    <span className="text-success">Free</span>
                  ) : (
                    formatPrice(getShipping())
                  )}
                </span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted-foreground">Tax (9%)</span>
                <span>{formatPrice(getTax())}</span>
              </div>
            </div>

            <Separator className="my-4" />

            <div className="flex gap-2 mb-4">
              <Input placeholder="Promo code" />
              <Button variant="outline">Apply</Button>
            </div>

            <Separator className="my-4" />

            <div className="flex justify-between text-lg font-semibold mb-6">
              <span>Total</span>
              <span className="gradient-text">{formatPrice(getTotal())}</span>
            </div>

            <Button size="lg" className="w-full gap-2">
              Proceed to Checkout
              <ArrowRight className="w-4 h-4" />
            </Button>

            {getShipping() > 0 && (
              <p className="text-xs text-muted-foreground text-center mt-4">
                Add {formatPrice(50 - getSubtotal())} more for free shipping
              </p>
            )}
          </div>
        </div>
      </div>
    </motion.div>
  )
}
