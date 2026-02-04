'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { Menu, X } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Sheet, SheetContent, SheetTrigger, SheetTitle } from '@/components/ui/sheet'
import { cn } from '@/lib/utils'

interface HeaderProps {
  onOpenModal: () => void
}

const navItems = [
  { label: 'Home', href: '#home' },
  { label: 'Services', href: '#services' },
  { label: 'About', href: '#about' },
  { label: 'FAQ', href: '#faq' },
  { label: 'Contact', href: '/contact' },
]

export function Header({ onOpenModal }: HeaderProps) {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isOpen, setIsOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleNavClick = (href: string) => {
    setIsOpen(false)
    if (href.startsWith('#')) {
      const element = document.querySelector(href)
      element?.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <header
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
        isScrolled ? 'glass-strong py-3' : 'bg-transparent py-5'
      )}
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 lg:px-6">
        {/* Logo */}
        <Link
          href="/"
          className="text-xl font-bold tracking-tight text-foreground transition-colors hover:text-primary"
        >
          Cobalt Realty
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden items-center gap-8 md:flex">
          {navItems.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              onClick={(e) => {
                if (item.href.startsWith('#')) {
                  e.preventDefault()
                  handleNavClick(item.href)
                }
              }}
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
            >
              {item.label}
            </Link>
          ))}
          <Button
            onClick={onOpenModal}
            className="transition-transform hover:scale-[1.02]"
          >
            Get Free Valuation
          </Button>
        </nav>

        {/* Mobile Navigation */}
        <Sheet open={isOpen} onOpenChange={setIsOpen}>
          <SheetTrigger asChild className="md:hidden">
            <Button variant="ghost" size="icon" aria-label="Toggle menu">
              <Menu className="size-5" />
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="w-full max-w-xs">
            <SheetTitle className="sr-only">Navigation Menu</SheetTitle>
            <nav className="mt-8 flex flex-col gap-6">
              {navItems.map((item) => (
                <Link
                  key={item.label}
                  href={item.href}
                  onClick={(e) => {
                    if (item.href.startsWith('#')) {
                      e.preventDefault()
                    }
                    handleNavClick(item.href)
                  }}
                  className="text-lg font-medium text-foreground transition-colors hover:text-primary"
                >
                  {item.label}
                </Link>
              ))}
              <Button
                onClick={() => {
                  setIsOpen(false)
                  onOpenModal()
                }}
                className="mt-4 w-full"
              >
                Get Free Valuation
              </Button>
            </nav>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  )
}
