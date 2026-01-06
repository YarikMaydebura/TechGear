import { motion } from 'framer-motion'
import { brands } from '@/data/brands'

export default function BrandsSlider() {
  return (
    <section className="py-12 border-y border-border bg-card/30">
      <div className="container-custom">
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center text-sm text-muted-foreground mb-8"
        >
          Trusted by leading brands worldwide
        </motion.p>

        {/* Brands Logo Strip */}
        <div className="flex items-center justify-center flex-wrap gap-8 md:gap-12">
          {brands.slice(0, 8).map((brand, index) => (
            <motion.div
              key={brand.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group"
            >
              <div className="h-8 flex items-center justify-center opacity-50 hover:opacity-100 transition-opacity duration-300 grayscale hover:grayscale-0">
                <span className="font-heading text-xl font-bold text-muted-foreground group-hover:text-foreground transition-colors">
                  {brand.name}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
