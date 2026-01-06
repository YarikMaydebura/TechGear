import { create } from 'zustand'
import { persist } from 'zustand/middleware'

interface SearchState {
  isOpen: boolean
  query: string
  recentSearches: string[]

  // Actions
  openSearch: () => void
  closeSearch: () => void
  toggleSearch: () => void
  setQuery: (query: string) => void
  addRecentSearch: (query: string) => void
  removeRecentSearch: (query: string) => void
  clearRecentSearches: () => void
}

const MAX_RECENT_SEARCHES = 5

export const useSearchStore = create<SearchState>()(
  persist(
    (set, get) => ({
      isOpen: false,
      query: '',
      recentSearches: [],

      openSearch: () => set({ isOpen: true }),
      closeSearch: () => set({ isOpen: false, query: '' }),
      toggleSearch: () => set(state => ({ isOpen: !state.isOpen })),

      setQuery: (query) => set({ query }),

      addRecentSearch: (query) => {
        const trimmed = query.trim()
        if (!trimmed) return

        const recent = get().recentSearches.filter(s => s !== trimmed)
        const updated = [trimmed, ...recent].slice(0, MAX_RECENT_SEARCHES)
        set({ recentSearches: updated })
      },

      removeRecentSearch: (query) => {
        set({ recentSearches: get().recentSearches.filter(s => s !== query) })
      },

      clearRecentSearches: () => set({ recentSearches: [] }),
    }),
    {
      name: 'techgear-search',
      partialize: (state) => ({ recentSearches: state.recentSearches }),
    }
  )
)
