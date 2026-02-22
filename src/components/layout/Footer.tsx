import Link from 'next/link'
import Logo from '@/components/shared/Logo'
import { Phone, MessageCircle, Clock } from 'lucide-react'

const footerLinks = [
  { href: '/cardapio', label: 'Cardápio' },
  { href: '/promocoes', label: 'Promoções' },
  { href: '/meus-pedidos', label: 'Meus Pedidos' },
]

export default function Footer() {
  return (
    <footer className="bg-brand-dark text-brand-cream">
      <div className="mx-auto max-w-7xl px-6 py-14 sm:px-8">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-3">
          {/* Column 1: Logo + Description */}
          <div className="flex flex-col gap-4">
            <Logo size="sm" />
            <p className="max-w-xs text-sm leading-relaxed text-brand-cream-dark">
              As melhores pizzas da região, feitas com amor e carinho pela Tia Cê.
              Ingredientes selecionados e entrega rápida!
            </p>
          </div>

          {/* Column 2: Links */}
          <div>
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-brand-gold">
              Navegação
            </h3>
            <ul className="flex flex-col gap-2.5">
              {footerLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-brand-cream-dark transition-colors hover:text-brand-gold"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Contact */}
          <div>
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-brand-gold">
              Contato
            </h3>
            <ul className="flex flex-col gap-3">
              <li>
                <a
                  href="tel:+5500000000000"
                  className="flex items-center gap-2.5 text-sm text-brand-cream-dark transition-colors hover:text-brand-gold"
                >
                  <Phone className="h-4 w-4 flex-shrink-0" />
                  <span>(00) 00000-0000</span>
                </a>
              </li>
              <li>
                <a
                  href="https://wa.me/5500000000000"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2.5 text-sm text-brand-cream-dark transition-colors hover:text-brand-gold"
                >
                  <MessageCircle className="h-4 w-4 flex-shrink-0" />
                  <span>WhatsApp</span>
                </a>
              </li>
              <li>
                <div className="flex items-start gap-2.5 text-sm text-brand-cream-dark">
                  <Clock className="mt-0.5 h-4 w-4 flex-shrink-0" />
                  <div>
                    <p>Terça a Domingo: 18h - 23h</p>
                    <p>Segunda: Fechado</p>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/10">
        <div className="mx-auto max-w-7xl px-6 py-5 sm:px-8">
          <p className="text-center text-xs text-brand-cream-dark/60">
            &copy; {new Date().getFullYear()} Tia Cê Pizzas. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  )
}
