import { create } from 'zustand'
import { persist } from 'zustand/middleware'
import type { CartItem, Product } from '@/types'

interface CartState {
  items: CartItem[]
  isOpen: boolean

  // Actions
  addItem: (product: Product, quantity?: number, options?: { color?: string; storage?: string }) => void
  removeItem: (productId: string, options?: { color?: string; storage?: string }) => void
  updateQuantity: (productId: string, quantity: number, options?: { color?: string; storage?: string }) => void
  clearCart: () => void
  openCart: () => void
  closeCart: () => void
  toggleCart: () => void

  // Computed
  getItemCount: () => number
  getSubtotal: () => number
  getTax: () => number
  getShipping: () => number
  getTotal: () => number
  isInCart: (productId: string) => boolean
}

export const useCartStore = create<CartState>()(
  persist(
    (set, get) => ({
      items: [],
      isOpen: false,

      addItem: (product, quantity = 1, options) => {
        const items = get().items
        const existingIndex = items.findIndex(
          item =>
            item.product.id === product.id &&
            item.selectedColor === options?.color &&
            item.selectedStorage === options?.storage
        )

        if (existingIndex > -1) {
          const newItems = [...items]
          newItems[existingIndex].quantity += quantity
          set({ items: newItems })
        } else {
          set({
            items: [
              ...items,
              {
                product,
                quantity,
                selectedColor: options?.color,
                selectedStorage: options?.storage,
              },
            ],
          })
        }
      },

      removeItem: (productId, options) => {
        set({
          items: get().items.filter(
            item =>
              !(
                item.product.id === productId &&
                item.selectedColor === options?.color &&
                item.selectedStorage === options?.storage
              )
          ),
        })
      },

      updateQuantity: (productId, quantity, options) => {
        if (quantity <= 0) {
          get().removeItem(productId, options)
          return
        }
        set({
          items: get().items.map(item =>
            item.product.id === productId &&
            item.selectedColor === options?.color &&
            item.selectedStorage === options?.storage
              ? { ...item, quantity }
              : item
          ),
        })
      },

      clearCart: () => set({ items: [] }),

      openCart: () => set({ isOpen: true }),
      closeCart: () => set({ isOpen: false }),
      toggleCart: () => set(state => ({ isOpen: !state.isOpen })),

      getItemCount: () => get().items.reduce((sum, item) => sum + item.quantity, 0),

      getSubtotal: () =>
        get().items.reduce((sum, item) => sum + item.product.price * item.quantity, 0),

      getTax: () => get().getSubtotal() * 0.09,

      getShipping: () => {
        const subtotal = get().getSubtotal()
        if (subtotal === 0) return 0
        if (subtotal >= 50) return 0
        return 9.99
      },

      getTotal: () => get().getSubtotal() + get().getTax() + get().getShipping(),

      isInCart: (productId) => get().items.some(item => item.product.id === productId),
    }),
    {
      name: 'techgear-cart',
      partialize: (state) => ({ items: state.items }),
    }
  )
)
