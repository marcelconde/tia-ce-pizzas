'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import {
  LayoutDashboard,
  ClipboardList,
  ChefHat,
  Pizza,
  FolderOpen,
  Package,
  DollarSign,
  Truck,
  Tag,
  Users,
  UserCog,
  BarChart3,
  Settings,
  X,
} from 'lucide-react'
import Logo from '@/components/shared/Logo'

interface AdminSidebarProps {
  isOpen: boolean
  onClose: () => void
}

interface NavItem {
  href: string
  label: string
  icon: React.ComponentType<{ className?: string }>
}

interface NavSection {
  title: string
  items: NavItem[]
}

const navSections: NavSection[] = [
  {
    title: 'Principal',
    items: [
      { href: '/admin', label: 'Dashboard', icon: LayoutDashboard },
      { href: '/admin/pedidos', label: 'Pedidos', icon: ClipboardList },
      { href: '/admin/cozinha', label: 'Cozinha', icon: ChefHat },
    ],
  },
  {
    title: 'Cardapio',
    items: [
      { href: '/admin/produtos', label: 'Produtos', icon: Pizza },
      { href: '/admin/categorias', label: 'Categorias', icon: FolderOpen },
    ],
  },
  {
    title: 'Gestao',
    items: [
      { href: '/admin/estoque', label: 'Estoque', icon: Package },
      { href: '/admin/financeiro', label: 'Financeiro', icon: DollarSign },
      { href: '/admin/entregas', label: 'Entregas', icon: Truck },
    ],
  },
  {
    title: 'Outros',
    items: [
      { href: '/admin/promocoes', label: 'Promocoes', icon: Tag },
      { href: '/admin/clientes', label: 'Clientes', icon: Users },
      { href: '/admin/funcionarios', label: 'Funcionarios', icon: UserCog },
      { href: '/admin/relatorios', label: 'Relatorios', icon: BarChart3 },
      { href: '/admin/configuracoes', label: 'Configuracoes', icon: Settings },
    ],
  },
]

export default function AdminSidebar({ isOpen, onClose }: AdminSidebarProps) {
  const pathname = usePathname()

  const isActiveLink = (href: string) => {
    if (href === '/admin') {
      return pathname === '/admin'
    }
    return pathname.startsWith(href)
  }

  const sidebarContent = (
    <div className="flex h-full flex-col">
      {/* Top: Logo + Admin Title */}
      <div className="flex items-center gap-3 border-b border-white/10 px-4 py-4">
        <Logo size="sm" />
        <span className="text-sm font-semibold text-brand-gold">Painel Admin</span>

        {/* Close button - mobile only */}
        <button
          type="button"
          onClick={onClose}
          className="ml-auto rounded-md p-1 text-white/60 transition-colors hover:bg-white/10 hover:text-white lg:hidden"
          aria-label="Fechar sidebar"
        >
          <X className="h-5 w-5" />
        </button>
      </div>

      {/* Nav sections */}
      <nav className="flex-1 overflow-y-auto px-3 py-4">
        {navSections.map((section) => (
          <div key={section.title} className="mb-6">
            <h3 className="mb-2 px-3 text-xs font-semibold uppercase tracking-wider text-white/40">
              {section.title}
            </h3>
            <ul className="flex flex-col gap-0.5">
              {section.items.map((item) => {
                const Icon = item.icon
                const active = isActiveLink(item.href)

                return (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      onClick={onClose}
                      className={`flex items-center gap-3 rounded-lg px-3 py-2 text-sm font-medium transition-colors ${
                        active
                          ? 'border-l-4 border-brand-gold bg-brand-red/20 text-brand-gold'
                          : 'border-l-4 border-transparent text-white/70 hover:bg-white/5 hover:text-white'
                      }`}
                    >
                      <Icon className="h-4.5 w-4.5 flex-shrink-0" />
                      <span>{item.label}</span>
                    </Link>
                  </li>
                )
              })}
            </ul>
          </div>
        ))}
      </nav>
    </div>
  )

  return (
    <>
      {/* Desktop: Fixed sidebar */}
      <aside className="fixed inset-y-0 left-0 z-30 hidden w-64 bg-brand-dark lg:block">
        {sidebarContent}
      </aside>

      {/* Mobile: Off-canvas sidebar with overlay */}
      {isOpen && (
        <>
          <div
            className="fixed inset-0 z-40 bg-black/50 lg:hidden"
            onClick={onClose}
            aria-hidden="true"
          />
          <aside className="animate-slide-in fixed inset-y-0 left-0 z-50 w-64 bg-brand-dark lg:hidden">
            {sidebarContent}
          </aside>
        </>
      )}
    </>
  )
}
