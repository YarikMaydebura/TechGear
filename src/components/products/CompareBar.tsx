import { Link } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { GitCompare, X, ArrowRight } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { useCompareStore } from '@/stores/compareStore'

export default function CompareBar() {
  const { items, removeFromCompare, clearCompare, maxItems, isBarVisible, hideBar } =
    useCompareStore()

  if (!isBarVisible || items.length === 0) return null

  return (
    <AnimatePresence>
      <motion.div
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: 100, opacity: 0 }}
        className="fixed bottom-0 left-0 right-0 z-50 bg-card/95 backdrop-blur-lg border-t border-border shadow-2xl"
      >
        <div className="container-custom py-4">
          <div className="flex items-center justify-between gap-4">
            {/* Left: Info */}
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-accent/20 flex items-center justify-center">
                <GitCompare className="w-5 h-5 text-accent" />
              </div>
              <div>
                <p className="font-medium text-sm">
                  Compare Products
                </p>
                <p className="text-xs text-muted-foreground">
                  {items.length} of {maxItems} products selected
                </p>
              </div>
            </div>

            {/* Center: Product Thumbnails */}
            <div className="hidden sm:flex items-center gap-2">
              {items.map(product => (
                <motion.div
                  key={product.id}
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  exit={{ scale: 0 }}
                  className="relative group"
                >
                  <div className="w-12 h-12 rounded-lg overflow-hidden border border-border bg-muted">
                    <img
                      src={product.images[0]}
                      alt={product.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <button
                    onClick={() => removeFromCompare(product.id)}
                    className="absolute -top-1 -right-1 w-4 h-4 rounded-full bg-destructive text-destructive-foreground flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity"
                  >
                    <X className="w-3 h-3" />
                  </button>
                </motion.div>
              ))}

              {/* Empty Slots */}
              {Array.from({ length: maxItems - items.length }).map((_, i) => (
                <div
                  key={`empty-${i}`}
                  className="w-12 h-12 rounded-lg border-2 border-dashed border-border bg-muted/30"
                />
              ))}
            </div>

            {/* Right: Actions */}
            <div className="flex items-center gap-2">
              <Button
                variant="ghost"
                size="sm"
                onClick={clearCompare}
                className="text-muted-foreground"
              >
                Clear All
              </Button>
              <Button
                variant="ghost"
                size="icon"
                onClick={hideBar}
                className="lg:hidden"
              >
                <X className="w-4 h-4" />
              </Button>
              <Button asChild className="gap-2">
                <Link to="/compare">
                  Compare Now
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </motion.div>
    </AnimatePresence>
  )
}
