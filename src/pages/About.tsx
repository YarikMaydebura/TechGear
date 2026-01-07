import { motion } from 'framer-motion'
import { Users, Award, Globe, Heart, Target, Zap } from 'lucide-react'

const stats = [
  { label: 'Happy Customers', value: '50K+', icon: Users },
  { label: 'Products', value: '1000+', icon: Award },
  { label: 'Countries', value: '50+', icon: Globe },
  { label: 'Satisfaction', value: '99%', icon: Heart },
]

const values = [
  {
    icon: Target,
    title: 'Our Mission',
    description: 'To make cutting-edge technology accessible to everyone with premium products at competitive prices.',
  },
  {
    icon: Users,
    title: 'Customer First',
    description: 'Every decision we make centers around providing the best possible experience for our customers.',
  },
  {
    icon: Award,
    title: 'Quality Assured',
    description: 'We carefully curate our selection to ensure only the highest quality products reach you.',
  },
  {
    icon: Zap,
    title: 'Innovation',
    description: 'We stay ahead of the curve, bringing you the latest technology as soon as it hits the market.',
  },
]

export default function About() {
  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
      {/* Hero */}
      <section className="py-20 bg-gradient-to-br from-primary/10 via-background to-accent/10">
        <div className="container-custom text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold mb-6"
          >
            About <span className="gradient-text">TechGear</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-xl text-muted-foreground max-w-3xl mx-auto"
          >
            Your trusted destination for premium electronics and cutting-edge technology.
          </motion.p>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 border-b border-border">
        <div className="container-custom">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center"
              >
                <div className="w-12 h-12 mx-auto mb-3 rounded-xl bg-primary/10 flex items-center justify-center">
                  <stat.icon className="w-6 h-6 text-primary" />
                </div>
                <p className="font-heading text-3xl font-bold gradient-text">{stat.value}</p>
                <p className="text-sm text-muted-foreground">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Story */}
      <section className="py-16">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="font-heading text-3xl font-bold mb-6">Our Story</h2>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  Founded in 2020, TechGear started with a simple vision: to create a platform where
                  tech enthusiasts could find the best products without endless searching.
                </p>
                <p>
                  What began as a small online store has grown into a trusted destination for
                  thousands of customers worldwide. We've built partnerships with leading brands to
                  bring you authentic products at competitive prices.
                </p>
                <p>
                  Today, we're proud to offer an extensive catalog of smartphones, laptops, audio
                  equipment, wearables, and more. Our commitment to quality and customer
                  satisfaction remains at the heart of everything we do.
                </p>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="absolute inset-0 blur-3xl bg-gradient-to-r from-primary/20 to-accent/20 rounded-full" />
              <img
                src="https://images.unsplash.com/photo-1531297484001-80022131f5a1?w=800"
                alt="Technology"
                className="relative rounded-2xl shadow-2xl"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-16 bg-card/50">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="font-heading text-3xl font-bold mb-4">Our Values</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              The principles that guide us in delivering exceptional experiences
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="p-6 rounded-2xl bg-background border border-border hover:border-primary/50 transition-colors text-center"
              >
                <div className="w-14 h-14 mx-auto mb-4 rounded-xl bg-primary/10 flex items-center justify-center">
                  <value.icon className="w-7 h-7 text-primary" />
                </div>
                <h3 className="font-heading font-semibold text-lg mb-2">{value.title}</h3>
                <p className="text-sm text-muted-foreground">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </motion.div>
  )
}
