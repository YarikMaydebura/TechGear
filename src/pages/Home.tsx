import { motion } from 'framer-motion'
import Hero from '@/components/home/Hero'
import CategoryGrid from '@/components/home/CategoryGrid'
import FeaturedProducts from '@/components/home/FeaturedProducts'
import DealsSection from '@/components/home/DealsSection'
import BrandsSlider from '@/components/home/BrandsSlider'
import WhyChooseUs from '@/components/home/WhyChooseUs'
import Newsletter from '@/components/home/Newsletter'

export default function Home() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <Hero />
      <CategoryGrid />
      <FeaturedProducts
        title="Featured Products"
        subtitle="Handpicked products just for you"
        filter="featured"
      />
      <DealsSection />
      <BrandsSlider />
      <FeaturedProducts
        title="Best Sellers"
        subtitle="Most popular products this month"
        filter="bestSellers"
      />
      <WhyChooseUs />
      <FeaturedProducts
        title="New Arrivals"
        subtitle="Latest additions to our collection"
        filter="newArrivals"
      />
      <Newsletter />
    </motion.div>
  )
}
