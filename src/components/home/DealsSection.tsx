import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { Clock, ShoppingCart, ArrowRight, Flame } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Progress } from '@/components/ui/progress'
import { getDeals } from '@/data/products'
import { formatPrice, getTimeRemaining, formatTimeUnit } from '@/lib/utils'
import { useCartStore } from '@/stores/cartStore'
import { toast } from 'sonner'

export default function DealsSection() {
  const deals = getDeals().slice(0, 1)
  const deal = deals[0]
  const addToCart = useCartStore(state => state.addItem)

  const [timeLeft, setTimeLeft] = useState(() =>
    deal?.dealEndsAt ? getTimeRemaining(deal.dealEndsAt) : null
  )

  useEffect(() => {
    if (!deal?.dealEndsAt) return

    const timer = setInterval(() => {
      setTimeLeft(getTimeRemaining(deal.dealEndsAt!))
    }, 1000)

    return () => clearInterval(timer)
  }, [deal])

  if (!deal) return null

  const discount = deal.originalPrice
    ? Math.round(((deal.originalPrice - deal.price) / deal.originalPrice) * 100)
    : 0

  const handleAddToCart = () => {
    addToCart(deal, 1)
    toast.success('Added to cart', { description: deal.name })
  }

  // Mock claimed progress
  const claimedPercentage = 67

  return (
    <section className="py-16 md:py-24 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-background to-accent/5" />
      <div className="absolute inset-0 hero-pattern opacity-30" />

      <div className="container-custom relative">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            {/* Badge */}
            <Badge className="bg-destructive mb-4 gap-1">
              <Flame className="w-3 h-3" />
              Deal of the Day
            </Badge>

            {/* Brand */}
            <p className="text-sm text-muted-foreground uppercase tracking-wider mb-2">
              {deal.brand}
            </p>

            {/* Name */}
            <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
              {deal.name}
            </h2>

            {/* Description */}
            <p className="text-muted-foreground mb-6 max-w-md">
              {deal.description}
            </p>

            {/* Countdown */}
            {timeLeft && timeLeft.total > 0 && (
              <div className="mb-6">
                <p className="text-sm text-muted-foreground mb-3 flex items-center gap-2">
                  <Clock className="w-4 h-4" />
                  Offer ends in:
                </p>
                <div className="flex gap-3">
                  {[
                    { value: timeLeft.days, label: 'Days' },
                    { value: timeLeft.hours, label: 'Hours' },
                    { value: timeLeft.minutes, label: 'Mins' },
                    { value: timeLeft.seconds, label: 'Secs' },
                  ].map(item => (
                    <div
                      key={item.label}
                      className="bg-card border border-border rounded-xl p-3 text-center min-w-[70px]"
                    >
                      <span className="font-heading text-2xl md:text-3xl font-bold gradient-text">
                        {formatTimeUnit(item.value)}
                      </span>
                      <p className="text-xs text-muted-foreground mt-1">
                        {item.label}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Price */}
            <div className="flex items-baseline gap-3 mb-4">
              <span className="text-3xl md:text-4xl font-bold gradient-text">
                {formatPrice(deal.price)}
              </span>
              {deal.originalPrice && (
                <span className="text-xl text-muted-foreground line-through">
                  {formatPrice(deal.originalPrice)}
                </span>
              )}
              {discount > 0 && (
                <Badge variant="destructive" className="text-sm">
                  Save {discount}%
                </Badge>
              )}
            </div>

            {/* Stock Progress */}
            <div className="mb-6">
              <div className="flex justify-between text-sm mb-2">
                <span className="text-muted-foreground">
                  {claimedPercentage}% claimed
                </span>
                <span className="font-medium text-destructive">
                  Hurry, limited stock!
                </span>
              </div>
              <Progress value={claimedPercentage} className="h-2" />
            </div>

            {/* Actions */}
            <div className="flex flex-wrap gap-4">
              <Button
                size="lg"
                className="btn-gradient gap-2"
                onClick={handleAddToCart}
              >
                <ShoppingCart className="w-5 h-5" />
                Add to Cart
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link to={`/product/${deal.id}`}>
                  View Details
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Link>
              </Button>
            </div>
          </motion.div>

          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            {/* Glow */}
            <div className="absolute inset-0 blur-3xl bg-gradient-to-r from-primary/20 to-accent/20 rounded-full scale-75" />

            {/* Discount Badge */}
            <motion.div
              className="absolute -top-4 -right-4 z-10"
              animate={{ rotate: [0, 10, -10, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <div className="w-20 h-20 rounded-full bg-destructive flex items-center justify-center shadow-lg">
                <span className="font-heading text-2xl font-bold text-white">
                  -{discount}%
                </span>
              </div>
            </motion.div>

            {/* Image */}
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
              className="relative"
            >
              <img
                src={deal.images[0]}
                alt={deal.name}
                className="w-full max-w-md mx-auto rounded-2xl shadow-2xl"
              />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
