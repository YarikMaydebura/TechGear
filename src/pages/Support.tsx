import { motion } from 'framer-motion'
import { Search, HelpCircle, Package, CreditCard, Truck, RotateCcw, MessageCircle, Mail, Phone } from 'lucide-react'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion'

const helpTopics = [
  { icon: Package, title: 'Orders', description: 'Track your order' },
  { icon: Truck, title: 'Shipping', description: 'Delivery options' },
  { icon: RotateCcw, title: 'Returns', description: '30-day policy' },
  { icon: CreditCard, title: 'Payment', description: 'Billing help' },
]

const faqs = [
  { question: 'How do I track my order?', answer: 'Log into your account and view order history for tracking info.' },
  { question: 'What is your return policy?', answer: '30-day return policy on all items in original condition.' },
  { question: 'How long does shipping take?', answer: 'Standard: 5-7 days. Express: 2-3 days. Overnight available.' },
  { question: 'Do you ship internationally?', answer: 'Yes, we ship to 100+ countries worldwide.' },
  { question: 'Is my payment secure?', answer: 'Yes, we use industry-standard encryption and are PCI compliant.' },
]

export default function Support() {
  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
      <section className="py-20 bg-gradient-to-br from-primary/10 via-background to-accent/10">
        <div className="container-custom text-center">
          <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="font-heading text-4xl md:text-5xl font-bold mb-4">
            How can we <span className="gradient-text">help?</span>
          </motion.h1>
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} className="max-w-xl mx-auto mt-8">
            <div className="relative">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
              <Input placeholder="Search for help..." className="pl-12 h-12 bg-background" />
            </div>
          </motion.div>
        </div>
      </section>

      <section className="py-16">
        <div className="container-custom">
          <h2 className="font-heading text-2xl font-bold mb-8 text-center">Popular Topics</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {helpTopics.map((topic, index) => (
              <motion.div key={topic.title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: index * 0.1 }}>
                <Card className="hover:border-primary/50 transition-colors cursor-pointer">
                  <CardContent className="p-6 flex items-start gap-4">
                    <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                      <topic.icon className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1">{topic.title}</h3>
                      <p className="text-sm text-muted-foreground">{topic.description}</p>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-card/50">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-12">
              <HelpCircle className="w-12 h-12 mx-auto mb-4 text-primary" />
              <h2 className="font-heading text-2xl font-bold mb-2">FAQs</h2>
            </div>
            <Accordion type="single" collapsible className="space-y-2">
              {faqs.map((faq, index) => (
                <AccordionItem key={index} value={`item-${index}`} className="bg-background border rounded-lg px-4">
                  <AccordionTrigger className="hover:no-underline">{faq.question}</AccordionTrigger>
                  <AccordionContent className="text-muted-foreground">{faq.answer}</AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container-custom">
          <h2 className="font-heading text-2xl font-bold mb-8 text-center">Still need help?</h2>
          <div className="grid sm:grid-cols-3 gap-6 max-w-3xl mx-auto">
            {[
              { icon: MessageCircle, title: 'Live Chat', action: 'Start Chat' },
              { icon: Mail, title: 'Email Us', action: 'Send Email' },
              { icon: Phone, title: 'Call Us', action: 'Call Now' },
            ].map(item => (
              <Card key={item.title} className="text-center">
                <CardContent className="p-6">
                  <div className="w-12 h-12 mx-auto mb-4 rounded-full bg-primary/10 flex items-center justify-center">
                    <item.icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="font-semibold mb-4">{item.title}</h3>
                  <Button variant="outline" size="sm">{item.action}</Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </motion.div>
  )
}
