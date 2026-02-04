import Link from 'next/link'
import { MapPin, Phone, Mail, Clock, Linkedin, Instagram } from 'lucide-react'

const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'Services', href: '#services' },
  { label: 'About', href: '#about' },
  { label: 'FAQ', href: '#faq' },
  { label: 'Contact', href: '/contact' },
]

const contactInfo = [
  {
    icon: Phone,
    label: '+27 12 345 6789',
    href: 'tel:+27123456789',
  },
  {
    icon: Mail,
    label: 'tanya@cobaltrealty.co.za',
    href: 'mailto:tanya@cobaltrealty.co.za',
  },
  {
    icon: MapPin,
    label: 'Pretoria East, Gauteng',
    href: null,
  },
]

const socialLinks = [
  { icon: Linkedin, href: '#', label: 'LinkedIn' },
  { icon: Instagram, href: '#', label: 'Instagram' },
]

export function Footer() {
  return (
    <footer className="border-t bg-muted/50">
      <div className="mx-auto max-w-6xl px-4 py-12 lg:px-6 lg:py-16">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {/* Brand Column */}
          <div className="space-y-4">
            <Link href="/" className="text-xl font-bold text-foreground">
              Cobalt Realty
            </Link>
            <p className="text-sm leading-relaxed text-muted-foreground">
              Your trusted partner for property sales in Pretoria East. 
              Local expertise, honest guidance, and results that speak for themselves.
            </p>
            {/* Social Links */}
            <div className="flex gap-4 pt-2">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className="text-muted-foreground transition-colors hover:text-primary"
                >
                  <social.icon className="size-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="font-semibold text-foreground">Quick Links</h3>
            <nav className="flex flex-col gap-3">
              {navLinks.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="font-semibold text-foreground">Contact</h3>
            <div className="flex flex-col gap-3">
              {contactInfo.map((item) => (
                <div key={item.label} className="flex items-center gap-3">
                  <item.icon className="size-4 shrink-0 text-primary" />
                  {item.href ? (
                    <a
                      href={item.href}
                      className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                    >
                      {item.label}
                    </a>
                  ) : (
                    <span className="text-sm text-muted-foreground">
                      {item.label}
                    </span>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Office Hours */}
          <div className="space-y-4">
            <h3 className="font-semibold text-foreground">Office Hours</h3>
            <div className="flex items-start gap-3">
              <Clock className="mt-0.5 size-4 shrink-0 text-primary" />
              <div className="space-y-1 text-sm text-muted-foreground">
                <p>Monday - Friday: 8am - 5pm</p>
                <p>Saturday: 9am - 1pm</p>
                <p>Sunday: Closed</p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 border-t pt-8">
          <p className="text-center text-sm text-muted-foreground">
            &copy; {new Date().getFullYear()} Cobalt Realty. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
