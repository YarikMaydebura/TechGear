import { create } from 'zustand'
import { persist } from 'zustand/middleware'
import type { Product } from '@/types'

interface CompareState {
  items: Product[]
  maxItems: number
  isBarVisible: boolean

  // Actions
  addToCompare: (product: Product) => { success: boolean; error?: string }
  removeFromCompare: (productId: string) => void
  clearCompare: () => void
  showBar: () => void
  hideBar: () => void

  // Computed
  isInCompare: (productId: string) => boolean
  canAddToCompare: (product: Product) => { allowed: boolean; reason?: string }
  getCount: () => number
}

export const useCompareStore = create<CompareState>()(
  persist(
    (set, get) => ({
      items: [],
      maxItems: 4,
      isBarVisible: true,

      addToCompare: (product) => {
        const check = get().canAddToCompare(product)

        if (!check.allowed) {
          return { success: false, error: check.reason }
        }

        set({ items: [...get().items, product] })
        return { success: true }
      },

      removeFromCompare: (productId) => {
        set({ items: get().items.filter(item => item.id !== productId) })
      },

      clearCompare: () => set({ items: [] }),

      showBar: () => set({ isBarVisible: true }),
      hideBar: () => set({ isBarVisible: false }),

      isInCompare: (productId) => get().items.some(item => item.id === productId),

      canAddToCompare: (product) => {
        const { items, maxItems } = get()

        if (items.length >= maxItems) {
          return { allowed: false, reason: `Maximum ${maxItems} products can be compared` }
        }

        if (items.some(item => item.id === product.id)) {
          return { allowed: false, reason: 'Product already in compare list' }
        }

        if (items.length > 0 && items[0].category !== product.category) {
          return { allowed: false, reason: 'Can only compare products from the same category' }
        }

        return { allowed: true }
      },

      getCount: () => get().items.length,
    }),
    {
      name: 'techgear-compare',
      partialize: (state) => ({ items: state.items }),
    }
  )
)
