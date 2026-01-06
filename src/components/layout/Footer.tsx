import { Link } from 'react-router-dom'
import {
  Facebook,
  Twitter,
  Instagram,
  Youtube,
  Mail,
  Phone,
  MapPin,
} from 'lucide-react'
import { Button } from '@/components/ui/button'

const footerLinks = {
  shop: [
    { label: 'Smartphones', href: '/shop/smartphones' },
    { label: 'Laptops', href: '/shop/laptops' },
    { label: 'Audio', href: '/shop/audio' },
    { label: 'Wearables', href: '/shop/wearables' },
    { label: 'Tablets', href: '/shop/tablets' },
    { label: 'Gaming', href: '/shop/gaming' },
  ],
  support: [
    { label: 'Help Center', href: '/support' },
    { label: 'Track Order', href: '/support' },
    { label: 'Shipping Info', href: '/support' },
    { label: 'Returns', href: '/support' },
    { label: 'Contact Us', href: '/contact' },
  ],
  company: [
    { label: 'About Us', href: '/about' },
    { label: 'Careers', href: '/about' },
    { label: 'Press', href: '/about' },
    { label: 'Blog', href: '/about' },
  ],
}

const socialLinks = [
  { icon: Facebook, href: '#', label: 'Facebook' },
  { icon: Twitter, href: '#', label: 'Twitter' },
  { icon: Instagram, href: '#', label: 'Instagram' },
  { icon: Youtube, href: '#', label: 'YouTube' },
]

export default function Footer() {
  return (
    <footer className="mt-24 border-t border-border">
      <div className="container-custom">
        {/* Main Footer Content */}
        <div className="py-12 lg:py-16">
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8 lg:gap-12">
            {/* Brand Column */}
            <div className="col-span-2">
              <Link to="/" className="inline-flex items-center gap-2 mb-4">
                <div className="w-8 h-8 rounded-lg gradient-bg flex items-center justify-center">
                  <span className="text-white font-bold">T</span>
                </div>
                <span className="font-heading text-lg font-bold gradient-text">
                  TechGear
                </span>
              </Link>
              <p className="text-sm text-muted-foreground leading-relaxed mb-5 max-w-xs">
                Your destination for premium electronics and cutting-edge tech gadgets.
              </p>
              {/* Social Links */}
              <div className="flex items-center gap-1">
                {socialLinks.map(social => (
                  <Button
                    key={social.label}
                    variant="ghost"
                    size="icon"
                    asChild
                    className="w-8 h-8 rounded-full hover:bg-primary/10 hover:text-primary"
                  >
                    <a
                      href={social.href}
                      aria-label={social.label}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <social.icon className="w-4 h-4" />
                    </a>
                  </Button>
                ))}
              </div>
            </div>

            {/* Shop Links */}
            <div>
              <h4 className="font-medium text-sm mb-4">Shop</h4>
              <ul className="space-y-2.5">
                {footerLinks.shop.map(link => (
                  <li key={link.label}>
                    <Link
                      to={link.href}
                      className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Support Links */}
            <div>
              <h4 className="font-medium text-sm mb-4">Support</h4>
              <ul className="space-y-2.5">
                {footerLinks.support.map(link => (
                  <li key={link.label}>
                    <Link
                      to={link.href}
                      className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Company Links */}
            <div>
              <h4 className="font-medium text-sm mb-4">Company</h4>
              <ul className="space-y-2.5">
                {footerLinks.company.map(link => (
                  <li key={link.label}>
                    <Link
                      to={link.href}
                      className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h4 className="font-medium text-sm mb-4">Contact</h4>
              <ul className="space-y-3">
                <li className="flex items-start gap-2.5 text-sm text-muted-foreground">
                  <MapPin className="w-4 h-4 mt-0.5 shrink-0" />
                  <span>123 Tech Street, San Francisco, CA 94102</span>
                </li>
                <li className="flex items-center gap-2.5 text-sm text-muted-foreground">
                  <Phone className="w-4 h-4 shrink-0" />
                  <span>+1 (555) 123-4567</span>
                </li>
                <li className="flex items-center gap-2.5 text-sm text-muted-foreground">
                  <Mail className="w-4 h-4 shrink-0" />
                  <span>support@techgear.com</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="py-5 border-t border-border flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-muted-foreground">
          <span>&copy; {new Date().getFullYear()} TechGear. All rights reserved.</span>
          <div className="flex items-center gap-6">
            <Link to="#" className="hover:text-foreground transition-colors">
              Terms
            </Link>
            <Link to="#" className="hover:text-foreground transition-colors">
              Privacy
            </Link>
            <Link to="#" className="hover:text-foreground transition-colors">
              Cookies
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
