import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import Navbar from './Navbar'
import Footer from './Footer'
import CartDrawer from './CartDrawer'
import SearchModal from './SearchModal'
import CompareBar from '@/components/products/CompareBar'
import { useCompareStore } from '@/stores/compareStore'

interface LayoutProps {
  children: React.ReactNode
}

export default function Layout({ children }: LayoutProps) {
  const location = useLocation()
  const compareItems = useCompareStore(state => state.items)

  // Scroll to top on route change
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }, [location.pathname])

  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col">
      <Navbar />
      <main className="flex-1">{children}</main>
      <Footer />

      {/* Global Overlays */}
      <CartDrawer />
      <SearchModal />

      {/* Floating Compare Bar */}
      {compareItems.length > 0 && <CompareBar />}
    </div>
  )
}
