import { create } from 'zustand'
import { persist } from 'zustand/middleware'

interface WishlistState {
  productIds: string[]

  // Actions
  addToWishlist: (productId: string) => void
  removeFromWishlist: (productId: string) => void
  toggleWishlist: (productId: string) => void
  clearWishlist: () => void

  // Computed
  isInWishlist: (productId: string) => boolean
  getCount: () => number
}

export const useWishlistStore = create<WishlistState>()(
  persist(
    (set, get) => ({
      productIds: [],

      addToWishlist: (productId) => {
        if (!get().productIds.includes(productId)) {
          set({ productIds: [...get().productIds, productId] })
        }
      },

      removeFromWishlist: (productId) => {
        set({ productIds: get().productIds.filter(id => id !== productId) })
      },

      toggleWishlist: (productId) => {
        if (get().isInWishlist(productId)) {
          get().removeFromWishlist(productId)
        } else {
          get().addToWishlist(productId)
        }
      },

      clearWishlist: () => set({ productIds: [] }),

      isInWishlist: (productId) => get().productIds.includes(productId),

      getCount: () => get().productIds.length,
    }),
    { name: 'techgear-wishlist' }
  )
)
