'use client'

import { useState } from 'react'
import { usePathname } from 'next/navigation'
import AdminSidebar from '@/components/layout/AdminSidebar'
import AdminHeader from '@/components/layout/AdminHeader'

/**
 * Map pathname to page title for the admin header.
 */
function getPageTitle(pathname: string): string {
  const titles: Record<string, string> = {
    '/admin': 'Dashboard',
    '/admin/pedidos': 'Pedidos',
    '/admin/cozinha': 'Cozinha',
    '/admin/produtos': 'Produtos',
    '/admin/categorias': 'Categorias',
    '/admin/estoque': 'Estoque',
    '/admin/financeiro': 'Financeiro',
    '/admin/entregas': 'Entregas',
    '/admin/promocoes': 'Promocoes',
    '/admin/clientes': 'Clientes',
    '/admin/funcionarios': 'Funcionarios',
    '/admin/relatorios': 'Relatorios',
    '/admin/configuracoes': 'Configuracoes',
  }

  // Exact match first
  if (titles[pathname]) return titles[pathname]

  // Prefix match for sub-routes (e.g., /admin/pedidos/123)
  const match = Object.entries(titles).find(
    ([path]) => path !== '/admin' && pathname.startsWith(path)
  )
  return match ? match[1] : 'Admin'
}

export default function AdminLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  const [sidebarOpen, setSidebarOpen] = useState(false)
  const pathname = usePathname()
  const pageTitle = getPageTitle(pathname)

  // Placeholder: auth check will be added later
  // For now, just render the admin layout

  return (
    <div className="min-h-screen bg-muted">
      <AdminSidebar isOpen={sidebarOpen} onClose={() => setSidebarOpen(false)} />

      {/* Main content area */}
      <div className="lg:ml-64">
        <AdminHeader
          title={pageTitle}
          onToggleSidebar={() => setSidebarOpen(true)}
        />

        <main className="p-4 sm:p-6">{children}</main>
      </div>
    </div>
  )
}
