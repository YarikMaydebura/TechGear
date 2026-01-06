import { useState, useMemo } from 'react'
import { useParams, useSearchParams } from 'react-router-dom'
import { motion } from 'framer-motion'
import { Filter, SlidersHorizontal, Grid, List, X } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet'
import { Checkbox } from '@/components/ui/checkbox'
import { Separator } from '@/components/ui/separator'
import ProductGrid from '@/components/products/ProductGrid'
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from '@/components/ui/breadcrumb'
import { products } from '@/data/products'
import { categories } from '@/data/categories'
import { brands } from '@/data/brands'
import type { SortOption } from '@/types'

const sortOptions = [
  { value: 'featured', label: 'Featured' },
  { value: 'newest', label: 'Newest' },
  { value: 'price-asc', label: 'Price: Low to High' },
  { value: 'price-desc', label: 'Price: High to Low' },
  { value: 'rating', label: 'Best Rating' },
  { value: 'reviews', label: 'Most Reviews' },
]

export default function Shop() {
  const { category } = useParams<{ category: string }>()
  const [searchParams] = useSearchParams()
  const searchQuery = searchParams.get('search') || ''

  const [sortBy, setSortBy] = useState<SortOption>('featured')
  const [selectedCategories, setSelectedCategories] = useState<string[]>(
    category ? [category] : []
  )
  const [selectedBrands, setSelectedBrands] = useState<string[]>([])
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid')
  const [isFilterOpen, setIsFilterOpen] = useState(false)

  const currentCategory = category
    ? categories.find(c => c.slug === category)
    : null

  const filteredProducts = useMemo(() => {
    let result = [...products]

    // Filter by search query
    if (searchQuery) {
      const query = searchQuery.toLowerCase()
      result = result.filter(
        p =>
          p.name.toLowerCase().includes(query) ||
          p.brand.toLowerCase().includes(query) ||
          p.description.toLowerCase().includes(query)
      )
    }

    // Filter by category
    if (selectedCategories.length > 0) {
      result = result.filter(p =>
        selectedCategories.some(
          cat => p.category.toLowerCase() === categories.find(c => c.slug === cat)?.name.toLowerCase()
        )
      )
    }

    // Filter by brand
    if (selectedBrands.length > 0) {
      result = result.filter(p =>
        selectedBrands.some(brand => p.brand.toLowerCase() === brand.toLowerCase())
      )
    }

    // Sort
    switch (sortBy) {
      case 'newest':
        result.sort((a, b) => (b.isNewArrival ? 1 : 0) - (a.isNewArrival ? 1 : 0))
        break
      case 'price-asc':
        result.sort((a, b) => a.price - b.price)
        break
      case 'price-desc':
        result.sort((a, b) => b.price - a.price)
        break
      case 'rating':
        result.sort((a, b) => b.rating - a.rating)
        break
      case 'reviews':
        result.sort((a, b) => b.reviewCount - a.reviewCount)
        break
      default:
        result.sort((a, b) => (b.isFeatured ? 1 : 0) - (a.isFeatured ? 1 : 0))
    }

    return result
  }, [products, selectedCategories, selectedBrands, sortBy, searchQuery])

  const toggleCategory = (slug: string) => {
    setSelectedCategories(prev =>
      prev.includes(slug) ? prev.filter(c => c !== slug) : [...prev, slug]
    )
  }

  const toggleBrand = (name: string) => {
    setSelectedBrands(prev =>
      prev.includes(name) ? prev.filter(b => b !== name) : [...prev, name]
    )
  }

  const clearFilters = () => {
    setSelectedCategories([])
    setSelectedBrands([])
  }

  const activeFilterCount = selectedCategories.length + selectedBrands.length

  const FilterContent = () => (
    <div className="space-y-6">
      {/* Categories */}
      <div>
        <h4 className="font-medium mb-3">Categories</h4>
        <div className="space-y-2">
          {categories.map(cat => (
            <label
              key={cat.id}
              className="flex items-center gap-2 cursor-pointer"
            >
              <Checkbox
                checked={selectedCategories.includes(cat.slug)}
                onCheckedChange={() => toggleCategory(cat.slug)}
              />
              <span className="text-sm">{cat.name}</span>
              <span className="text-xs text-muted-foreground ml-auto">
                ({cat.productCount})
              </span>
            </label>
          ))}
        </div>
      </div>

      <Separator />

      {/* Brands */}
      <div>
        <h4 className="font-medium mb-3">Brands</h4>
        <div className="space-y-2">
          {brands.map(brand => (
            <label
              key={brand.id}
              className="flex items-center gap-2 cursor-pointer"
            >
              <Checkbox
                checked={selectedBrands.includes(brand.name)}
                onCheckedChange={() => toggleBrand(brand.name)}
              />
              <span className="text-sm">{brand.name}</span>
            </label>
          ))}
        </div>
      </div>

      {activeFilterCount > 0 && (
        <>
          <Separator />
          <Button
            variant="outline"
            className="w-full"
            onClick={clearFilters}
          >
            Clear All Filters
          </Button>
        </>
      )}
    </div>
  )

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="min-h-screen"
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
              {currentCategory ? (
                <>
                  <BreadcrumbLink href="/shop">Shop</BreadcrumbLink>
                </>
              ) : (
                <BreadcrumbPage>Shop</BreadcrumbPage>
              )}
            </BreadcrumbItem>
            {currentCategory && (
              <>
                <BreadcrumbSeparator />
                <BreadcrumbItem>
                  <BreadcrumbPage>{currentCategory.name}</BreadcrumbPage>
                </BreadcrumbItem>
              </>
            )}
          </BreadcrumbList>
        </Breadcrumb>

        {/* Page Header */}
        <div className="mb-8">
          <h1 className="font-heading text-3xl md:text-4xl font-bold mb-2">
            {searchQuery
              ? `Search results for "${searchQuery}"`
              : currentCategory
              ? currentCategory.name
              : 'All Products'}
          </h1>
          <p className="text-muted-foreground">
            {filteredProducts.length} products found
          </p>
        </div>

        <div className="flex gap-8">
          {/* Desktop Sidebar */}
          <aside className="hidden lg:block w-64 shrink-0">
            <div className="sticky top-24">
              <div className="flex items-center justify-between mb-4">
                <h3 className="font-heading font-semibold">Filters</h3>
                {activeFilterCount > 0 && (
                  <Badge variant="secondary">{activeFilterCount}</Badge>
                )}
              </div>
              <FilterContent />
            </div>
          </aside>

          {/* Main Content */}
          <div className="flex-1">
            {/* Toolbar */}
            <div className="flex items-center justify-between gap-4 mb-6">
              {/* Mobile Filter Button */}
              <Sheet open={isFilterOpen} onOpenChange={setIsFilterOpen}>
                <SheetTrigger asChild>
                  <Button variant="outline" className="lg:hidden gap-2">
                    <Filter className="w-4 h-4" />
                    Filters
                    {activeFilterCount > 0 && (
                      <Badge className="ml-1">{activeFilterCount}</Badge>
                    )}
                  </Button>
                </SheetTrigger>
                <SheetContent side="left" className="w-[300px]">
                  <SheetHeader>
                    <SheetTitle>Filters</SheetTitle>
                  </SheetHeader>
                  <div className="mt-6">
                    <FilterContent />
                  </div>
                </SheetContent>
              </Sheet>

              {/* Active Filters */}
              <div className="hidden lg:flex items-center gap-2 flex-1 overflow-x-auto">
                {selectedCategories.map(cat => {
                  const category = categories.find(c => c.slug === cat)
                  return category ? (
                    <Badge
                      key={cat}
                      variant="secondary"
                      className="cursor-pointer"
                      onClick={() => toggleCategory(cat)}
                    >
                      {category.name}
                      <X className="w-3 h-3 ml-1" />
                    </Badge>
                  ) : null
                })}
                {selectedBrands.map(brand => (
                  <Badge
                    key={brand}
                    variant="secondary"
                    className="cursor-pointer"
                    onClick={() => toggleBrand(brand)}
                  >
                    {brand}
                    <X className="w-3 h-3 ml-1" />
                  </Badge>
                ))}
              </div>

              {/* Sort & View Toggle */}
              <div className="flex items-center gap-2">
                <Select
                  value={sortBy}
                  onValueChange={value => setSortBy(value as SortOption)}
                >
                  <SelectTrigger className="w-[180px]">
                    <SlidersHorizontal className="w-4 h-4 mr-2" />
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    {sortOptions.map(option => (
                      <SelectItem key={option.value} value={option.value}>
                        {option.label}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>

                <div className="hidden sm:flex border rounded-lg">
                  <Button
                    variant={viewMode === 'grid' ? 'secondary' : 'ghost'}
                    size="icon"
                    onClick={() => setViewMode('grid')}
                  >
                    <Grid className="w-4 h-4" />
                  </Button>
                  <Button
                    variant={viewMode === 'list' ? 'secondary' : 'ghost'}
                    size="icon"
                    onClick={() => setViewMode('list')}
                  >
                    <List className="w-4 h-4" />
                  </Button>
                </div>
              </div>
            </div>

            {/* Products Grid */}
            <ProductGrid
              products={filteredProducts}
              columns={viewMode === 'grid' ? 3 : 2}
              emptyMessage={
                searchQuery
                  ? `No products found for "${searchQuery}"`
                  : 'No products match your filters'
              }
            />
          </div>
        </div>
      </div>
    </motion.div>
  )
}
