import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import {
  Search,
  ShoppingCart,
  Heart,
  Menu,
  X,
  Sun,
  Moon,
  ChevronDown,
  Smartphone,
  Laptop,
  Headphones,
  Watch,
  Tablet,
  Gamepad2,
  Camera,
  Cable,
  GitCompare,
} from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet'
import { cn } from '@/lib/utils'
import { useCartStore } from '@/stores/cartStore'
import { useWishlistStore } from '@/stores/wishlistStore'
import { useCompareStore } from '@/stores/compareStore'
import { useThemeStore } from '@/stores/themeStore'
import { useSearchStore } from '@/stores/searchStore'
import { categories } from '@/data/categories'

const categoryIcons: Record<string, React.ElementType> = {
  Smartphone,
  Laptop,
  Headphones,
  Watch,
  Tablet,
  Gamepad2,
  Camera,
  Cable,
}

const navLinks = [
  { label: 'Home', href: '/' },
  { label: 'Shop', href: '/shop', hasDropdown: true },
  { label: 'Deals', href: '/deals' },
  { label: 'Support', href: '/support' },
  { label: 'About', href: '/about' },
]

export default function Navbar() {
  const location = useLocation()
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [isShopDropdownOpen, setIsShopDropdownOpen] = useState(false)

  const cartItemCount = useCartStore(state => state.getItemCount())
  const openCart = useCartStore(state => state.openCart)
  const wishlistCount = useWishlistStore(state => state.getCount())
  const compareCount = useCompareStore(state => state.getCount())
  const { theme, toggleTheme } = useThemeStore()
  const openSearch = useSearchStore(state => state.openSearch)

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border bg-background/80 backdrop-blur-lg">
      <nav className="container-custom">
        <div className="flex h-16 items-center justify-between gap-4">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 shrink-0">
            <div className="w-8 h-8 rounded-lg gradient-bg flex items-center justify-center">
              <span className="text-white font-bold text-lg">T</span>
            </div>
            <span className="font-heading text-xl font-bold gradient-text hidden sm:block">
              TechGear
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-1">
            {navLinks.map(link => (
              <div
                key={link.href}
                className="relative"
                onMouseEnter={() => link.hasDropdown && setIsShopDropdownOpen(true)}
                onMouseLeave={() => link.hasDropdown && setIsShopDropdownOpen(false)}
              >
                <Link
                  to={link.href}
                  className={cn(
                    'flex items-center gap-1 px-4 py-2 text-sm font-medium rounded-lg transition-colors',
                    'hover:bg-secondary hover:text-primary',
                    location.pathname === link.href ||
                      (link.href === '/shop' && location.pathname.startsWith('/shop'))
                      ? 'text-primary'
                      : 'text-muted-foreground'
                  )}
                >
                  {link.label}
                  {link.hasDropdown && (
                    <ChevronDown
                      className={cn(
                        'w-4 h-4 transition-transform',
                        isShopDropdownOpen && 'rotate-180'
                      )}
                    />
                  )}
                </Link>

                {/* Shop Dropdown */}
                {link.hasDropdown && (
                  <AnimatePresence>
                    {isShopDropdownOpen && (
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 10 }}
                        transition={{ duration: 0.2 }}
                        className="absolute left-0 top-full pt-2"
                      >
                        <div className="bg-card border border-border rounded-xl shadow-xl p-4 w-[500px] grid grid-cols-2 gap-2">
                          {categories.map(category => {
                            const Icon = categoryIcons[category.icon] || Smartphone
                            return (
                              <Link
                                key={category.id}
                                to={`/shop/${category.slug}`}
                                className="flex items-center gap-3 p-3 rounded-lg hover:bg-secondary transition-colors group"
                                onClick={() => setIsShopDropdownOpen(false)}
                              >
                                <div className="w-10 h-10 rounded-lg bg-secondary flex items-center justify-center group-hover:bg-primary/10 transition-colors">
                                  <Icon className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
                                </div>
                                <div>
                                  <p className="font-medium text-sm">{category.name}</p>
                                  <p className="text-xs text-muted-foreground">
                                    {category.productCount} products
                                  </p>
                                </div>
                              </Link>
                            )
                          })}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                )}
              </div>
            ))}
          </div>

          {/* Actions */}
          <div className="flex items-center gap-1">
            {/* Search */}
            <Button
              variant="ghost"
              size="icon"
              onClick={openSearch}
              className="relative"
              aria-label="Search"
            >
              <Search className="w-5 h-5" />
            </Button>

            {/* Theme Toggle */}
            <Button
              variant="ghost"
              size="icon"
              onClick={toggleTheme}
              aria-label="Toggle theme"
            >
              {theme === 'dark' ? (
                <Sun className="w-5 h-5" />
              ) : (
                <Moon className="w-5 h-5" />
              )}
            </Button>

            {/* Compare */}
            <Button
              variant="ghost"
              size="icon"
              asChild
              className="relative hidden sm:flex"
            >
              <Link to="/compare" aria-label="Compare">
                <GitCompare className="w-5 h-5" />
                {compareCount > 0 && (
                  <Badge
                    variant="default"
                    className="absolute -top-1 -right-1 w-5 h-5 p-0 flex items-center justify-center text-[10px] bg-accent text-accent-foreground"
                  >
                    {compareCount}
                  </Badge>
                )}
              </Link>
            </Button>

            {/* Wishlist */}
            <Button
              variant="ghost"
              size="icon"
              asChild
              className="relative hidden sm:flex"
            >
              <Link to="/wishlist" aria-label="Wishlist">
                <Heart className="w-5 h-5" />
                {wishlistCount > 0 && (
                  <Badge
                    variant="default"
                    className="absolute -top-1 -right-1 w-5 h-5 p-0 flex items-center justify-center text-[10px]"
                  >
                    {wishlistCount}
                  </Badge>
                )}
              </Link>
            </Button>

            {/* Cart */}
            <Button
              variant="ghost"
              size="icon"
              onClick={openCart}
              className="relative"
              aria-label="Cart"
            >
              <ShoppingCart className="w-5 h-5" />
              {cartItemCount > 0 && (
                <Badge
                  variant="default"
                  className="absolute -top-1 -right-1 w-5 h-5 p-0 flex items-center justify-center text-[10px]"
                >
                  {cartItemCount}
                </Badge>
              )}
            </Button>

            {/* Mobile Menu */}
            <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
              <SheetTrigger asChild className="lg:hidden">
                <Button variant="ghost" size="icon" aria-label="Menu">
                  <Menu className="w-5 h-5" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[300px] p-0">
                <div className="flex flex-col h-full">
                  {/* Header */}
                  <div className="flex items-center justify-between p-4 border-b border-border">
                    <span className="font-heading text-lg font-bold gradient-text">
                      Menu
                    </span>
                    <Button
                      variant="ghost"
                      size="icon"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      <X className="w-5 h-5" />
                    </Button>
                  </div>

                  {/* Links */}
                  <div className="flex-1 overflow-y-auto p-4">
                    <div className="space-y-1">
                      {navLinks.map(link => (
                        <Link
                          key={link.href}
                          to={link.href}
                          onClick={() => setIsMobileMenuOpen(false)}
                          className={cn(
                            'flex items-center gap-2 px-4 py-3 rounded-lg text-sm font-medium transition-colors',
                            'hover:bg-secondary',
                            location.pathname === link.href
                              ? 'bg-secondary text-primary'
                              : 'text-muted-foreground'
                          )}
                        >
                          {link.label}
                        </Link>
                      ))}
                    </div>

                    {/* Categories */}
                    <div className="mt-6 pt-6 border-t border-border">
                      <p className="px-4 text-xs font-medium text-muted-foreground uppercase tracking-wider mb-2">
                        Categories
                      </p>
                      <div className="space-y-1">
                        {categories.map(category => {
                          const Icon = categoryIcons[category.icon] || Smartphone
                          return (
                            <Link
                              key={category.id}
                              to={`/shop/${category.slug}`}
                              onClick={() => setIsMobileMenuOpen(false)}
                              className="flex items-center gap-3 px-4 py-2 rounded-lg text-sm text-muted-foreground hover:bg-secondary hover:text-foreground transition-colors"
                            >
                              <Icon className="w-4 h-4" />
                              {category.name}
                            </Link>
                          )
                        })}
                      </div>
                    </div>
                  </div>

                  {/* Footer */}
                  <div className="p-4 border-t border-border space-y-2">
                    <Link
                      to="/wishlist"
                      onClick={() => setIsMobileMenuOpen(false)}
                      className="flex items-center justify-between px-4 py-3 rounded-lg bg-secondary"
                    >
                      <span className="flex items-center gap-2 text-sm font-medium">
                        <Heart className="w-4 h-4" />
                        Wishlist
                      </span>
                      {wishlistCount > 0 && (
                        <Badge variant="default">{wishlistCount}</Badge>
                      )}
                    </Link>
                    <Link
                      to="/compare"
                      onClick={() => setIsMobileMenuOpen(false)}
                      className="flex items-center justify-between px-4 py-3 rounded-lg bg-secondary"
                    >
                      <span className="flex items-center gap-2 text-sm font-medium">
                        <GitCompare className="w-4 h-4" />
                        Compare
                      </span>
                      {compareCount > 0 && (
                        <Badge variant="secondary">{compareCount}</Badge>
                      )}
                    </Link>
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </nav>
    </header>
  )
}
