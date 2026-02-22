'use client'

import { useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { ShoppingCart, Menu, X, Phone } from 'lucide-react'
import Logo from '@/components/shared/Logo'

const navLinks = [
  { href: '/cardapio', label: 'Cardápio' },
  { href: '/promocoes', label: 'Promoções' },
]

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const pathname = usePathname()

  const cartItemCount = 0

  const isActiveLink = (href: string) => pathname === href

  return (
    <header className="sticky top-0 z-50 border-b border-border/50 bg-white/95 backdrop-blur-md">
      <nav className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6 sm:px-8">
        {/* Left: Logo */}
        <div className="flex-shrink-0">
          <Logo size="sm" />
        </div>

        {/* Center: Nav links (desktop) */}
        <div className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`text-sm font-medium transition-colors hover:text-brand-red ${
                isActiveLink(link.href)
                  ? 'text-brand-red'
                  : 'text-foreground'
              }`}
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* Right: Cart + Phone (desktop) */}
        <div className="hidden items-center gap-5 md:flex">
          <a
            href="tel:+5500000000000"
            className="flex items-center gap-1.5 rounded-lg px-3 py-1.5 text-sm font-medium text-muted-foreground transition-colors hover:bg-brand-cream-light hover:text-brand-red"
          >
            <Phone className="h-4 w-4" />
            <span>(00) 00000-0000</span>
          </a>

          <Link
            href="/carrinho"
            className="relative flex items-center justify-center rounded-full p-2.5 transition-colors hover:bg-brand-cream-light"
          >
            <ShoppingCart className="h-5 w-5 text-foreground" />
            {cartItemCount > 0 && (
              <span className="absolute -right-0.5 -top-0.5 flex h-5 w-5 items-center justify-center rounded-full bg-brand-red text-xs font-bold text-white">
                {cartItemCount > 99 ? '99+' : cartItemCount}
              </span>
            )}
          </Link>
        </div>

        {/* Mobile: Cart + Hamburger */}
        <div className="flex items-center gap-1 md:hidden">
          <Link
            href="/carrinho"
            className="relative flex items-center justify-center rounded-full p-2.5 transition-colors hover:bg-brand-cream-light"
          >
            <ShoppingCart className="h-5 w-5 text-foreground" />
            {cartItemCount > 0 && (
              <span className="absolute -right-0.5 -top-0.5 flex h-5 w-5 items-center justify-center rounded-full bg-brand-red text-xs font-bold text-white">
                {cartItemCount > 99 ? '99+' : cartItemCount}
              </span>
            )}
          </Link>

          <button
            type="button"
            onClick={() => setMobileMenuOpen(true)}
            className="flex items-center justify-center rounded-lg p-2 text-foreground transition-colors hover:bg-brand-cream-light"
            aria-label="Abrir menu"
          >
            <Menu className="h-6 w-6" />
          </button>
        </div>
      </nav>

      {/* Mobile: Slide-in drawer */}
      {mobileMenuOpen && (
        <>
          <div
            className="fixed inset-0 z-50 bg-black/40 backdrop-blur-sm"
            onClick={() => setMobileMenuOpen(false)}
            aria-hidden="true"
          />

          <div className="animate-slide-in fixed inset-y-0 right-0 z-50 w-72 bg-white shadow-2xl">
            <div className="flex items-center justify-between border-b border-border px-5 py-4">
              <Logo size="sm" />
              <button
                type="button"
                onClick={() => setMobileMenuOpen(false)}
                className="rounded-lg p-2 text-foreground transition-colors hover:bg-brand-cream-light"
                aria-label="Fechar menu"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            <div className="flex flex-col gap-1 px-4 py-4">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`rounded-lg px-4 py-3 text-sm font-medium transition-colors ${
                    isActiveLink(link.href)
                      ? 'bg-brand-red/10 text-brand-red'
                      : 'text-foreground hover:bg-brand-cream-light'
                  }`}
                >
                  {link.label}
                </Link>
              ))}
            </div>

            <div className="border-t border-border px-4 py-4">
              <a
                href="tel:+5500000000000"
                className="flex items-center gap-2.5 rounded-lg px-4 py-3 text-sm font-medium text-muted-foreground transition-colors hover:bg-brand-cream-light hover:text-brand-red"
              >
                <Phone className="h-4 w-4" />
                <span>(00) 00000-0000</span>
              </a>
            </div>
          </div>
        </>
      )}
    </header>
  )
}
