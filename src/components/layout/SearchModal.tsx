import { useEffect, useState, useMemo } from 'react'
import { useNavigate } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { Search, X, Clock, TrendingUp, ArrowRight } from 'lucide-react'
import {
  Dialog,
  DialogContent,
  DialogTitle,
} from '@/components/ui/dialog'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { ScrollArea } from '@/components/ui/scroll-area'
import { useSearchStore } from '@/stores/searchStore'
import { searchProducts } from '@/data/products'
import { categories } from '@/data/categories'
import { formatPrice } from '@/lib/utils'

const trendingSearches = ['iPhone 15', 'MacBook Pro', 'AirPods', 'PlayStation 5']

export default function SearchModal() {
  const navigate = useNavigate()
  const {
    isOpen,
    query,
    recentSearches,
    closeSearch,
    setQuery,
    addRecentSearch,
    removeRecentSearch,
    clearRecentSearches,
  } = useSearchStore()

  const [selectedIndex, setSelectedIndex] = useState(-1)

  const results = useMemo(() => {
    if (query.length < 2) return []
    return searchProducts(query).slice(0, 6)
  }, [query])

  const matchingCategories = useMemo(() => {
    if (query.length < 2) return []
    return categories.filter(c =>
      c.name.toLowerCase().includes(query.toLowerCase())
    )
  }, [query])

  const handleSelect = (productId: string) => {
    addRecentSearch(query)
    closeSearch()
    navigate(`/product/${productId}`)
  }

  const handleCategorySelect = (categorySlug: string) => {
    addRecentSearch(query)
    closeSearch()
    navigate(`/shop/${categorySlug}`)
  }

  const handleSearch = () => {
    if (query.trim()) {
      addRecentSearch(query.trim())
      closeSearch()
      navigate(`/shop?search=${encodeURIComponent(query.trim())}`)
    }
  }

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!isOpen) return

      if (e.key === 'ArrowDown') {
        e.preventDefault()
        setSelectedIndex(prev => Math.min(prev + 1, results.length - 1))
      } else if (e.key === 'ArrowUp') {
        e.preventDefault()
        setSelectedIndex(prev => Math.max(prev - 1, -1))
      } else if (e.key === 'Enter') {
        if (selectedIndex >= 0 && results[selectedIndex]) {
          handleSelect(results[selectedIndex].id)
        } else {
          handleSearch()
        }
      }
    }

    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [isOpen, selectedIndex, results, query])

  // Reset selection when query changes
  useEffect(() => {
    setSelectedIndex(-1)
  }, [query])

  return (
    <Dialog open={isOpen} onOpenChange={closeSearch}>
      <DialogContent className="max-w-2xl p-0 gap-0">
        <DialogTitle className="sr-only">Search Products</DialogTitle>

        {/* Search Input */}
        <div className="flex items-center gap-3 p-4 border-b border-border">
          <Search className="w-5 h-5 text-muted-foreground shrink-0" />
          <Input
            value={query}
            onChange={e => setQuery(e.target.value)}
            placeholder="Search products, categories, brands..."
            className="border-0 p-0 h-auto text-base focus-visible:ring-0"
            autoFocus
          />
          {query && (
            <Button
              variant="ghost"
              size="icon"
              className="shrink-0"
              onClick={() => setQuery('')}
            >
              <X className="w-4 h-4" />
            </Button>
          )}
        </div>

        <ScrollArea className="max-h-[60vh]">
          <AnimatePresence mode="wait">
            {query.length < 2 ? (
              <motion.div
                key="empty"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="p-4"
              >
                {/* Recent Searches */}
                {recentSearches.length > 0 && (
                  <div className="mb-6">
                    <div className="flex items-center justify-between mb-3">
                      <div className="flex items-center gap-2 text-sm font-medium text-muted-foreground">
                        <Clock className="w-4 h-4" />
                        Recent Searches
                      </div>
                      <Button
                        variant="ghost"
                        size="sm"
                        className="h-auto py-1 px-2 text-xs"
                        onClick={clearRecentSearches}
                      >
                        Clear all
                      </Button>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {recentSearches.map(search => (
                        <Badge
                          key={search}
                          variant="secondary"
                          className="cursor-pointer hover:bg-secondary/80 transition-colors group"
                          onClick={() => setQuery(search)}
                        >
                          {search}
                          <button
                            className="ml-1 opacity-50 group-hover:opacity-100"
                            onClick={e => {
                              e.stopPropagation()
                              removeRecentSearch(search)
                            }}
                          >
                            <X className="w-3 h-3" />
                          </button>
                        </Badge>
                      ))}
                    </div>
                  </div>
                )}

                {/* Trending Searches */}
                <div>
                  <div className="flex items-center gap-2 text-sm font-medium text-muted-foreground mb-3">
                    <TrendingUp className="w-4 h-4" />
                    Trending Searches
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {trendingSearches.map(search => (
                      <Badge
                        key={search}
                        variant="outline"
                        className="cursor-pointer hover:bg-secondary transition-colors"
                        onClick={() => setQuery(search)}
                      >
                        {search}
                      </Badge>
                    ))}
                  </div>
                </div>
              </motion.div>
            ) : (
              <motion.div
                key="results"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="p-4"
              >
                {/* Matching Categories */}
                {matchingCategories.length > 0 && (
                  <div className="mb-4">
                    <p className="text-xs font-medium text-muted-foreground uppercase tracking-wider mb-2">
                      Categories
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {matchingCategories.map(cat => (
                        <Badge
                          key={cat.id}
                          variant="secondary"
                          className="cursor-pointer hover:bg-primary hover:text-primary-foreground transition-colors"
                          onClick={() => handleCategorySelect(cat.slug)}
                        >
                          {cat.name}
                          <ArrowRight className="w-3 h-3 ml-1" />
                        </Badge>
                      ))}
                    </div>
                  </div>
                )}

                {/* Product Results */}
                {results.length > 0 ? (
                  <div>
                    <p className="text-xs font-medium text-muted-foreground uppercase tracking-wider mb-2">
                      Products
                    </p>
                    <div className="space-y-1">
                      {results.map((product, index) => (
                        <button
                          key={product.id}
                          onClick={() => handleSelect(product.id)}
                          className={`w-full flex items-center gap-3 p-3 rounded-lg transition-colors text-left ${
                            index === selectedIndex
                              ? 'bg-secondary'
                              : 'hover:bg-secondary/50'
                          }`}
                        >
                          <div className="w-12 h-12 rounded-lg bg-muted overflow-hidden shrink-0">
                            <img
                              src={product.images[0]}
                              alt={product.name}
                              className="w-full h-full object-cover"
                            />
                          </div>
                          <div className="flex-1 min-w-0">
                            <p className="font-medium text-sm truncate">
                              {product.name}
                            </p>
                            <p className="text-xs text-muted-foreground">
                              {product.brand} • {product.category}
                            </p>
                          </div>
                          <div className="text-right shrink-0">
                            <p className="font-semibold text-sm">
                              {formatPrice(product.price)}
                            </p>
                            {product.originalPrice && (
                              <p className="text-xs text-muted-foreground line-through">
                                {formatPrice(product.originalPrice)}
                              </p>
                            )}
                          </div>
                        </button>
                      ))}
                    </div>
                  </div>
                ) : (
                  <div className="text-center py-8">
                    <p className="text-muted-foreground">
                      No results found for "{query}"
                    </p>
                    <p className="text-sm text-muted-foreground mt-1">
                      Try searching for something else
                    </p>
                  </div>
                )}

                {/* View All Button */}
                {results.length > 0 && (
                  <Button
                    variant="outline"
                    className="w-full mt-4"
                    onClick={handleSearch}
                  >
                    View all results for "{query}"
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                )}
              </motion.div>
            )}
          </AnimatePresence>
        </ScrollArea>

        {/* Footer Hint */}
        <div className="p-3 border-t border-border bg-muted/50">
          <div className="flex items-center justify-center gap-4 text-xs text-muted-foreground">
            <span className="flex items-center gap-1">
              <kbd className="px-1.5 py-0.5 bg-background border rounded text-[10px]">
                ↑↓
              </kbd>
              to navigate
            </span>
            <span className="flex items-center gap-1">
              <kbd className="px-1.5 py-0.5 bg-background border rounded text-[10px]">
                ↵
              </kbd>
              to select
            </span>
            <span className="flex items-center gap-1">
              <kbd className="px-1.5 py-0.5 bg-background border rounded text-[10px]">
                esc
              </kbd>
              to close
            </span>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  )
}
