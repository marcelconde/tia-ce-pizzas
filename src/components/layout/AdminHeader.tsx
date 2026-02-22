'use client'

import { useState } from 'react'
import { Menu, Bell, ChevronDown, User, LogOut } from 'lucide-react'

interface AdminHeaderProps {
  title: string
  onToggleSidebar: () => void
}

export default function AdminHeader({ title, onToggleSidebar }: AdminHeaderProps) {
  const [userMenuOpen, setUserMenuOpen] = useState(false)

  // Placeholder notification count
  const notificationCount = 0

  return (
    <header className="sticky top-0 z-20 flex h-16 items-center justify-between bg-white px-4 shadow-sm sm:px-6">
      {/* Left: Hamburger + Title */}
      <div className="flex items-center gap-3">
        <button
          type="button"
          onClick={onToggleSidebar}
          className="rounded-md p-2 text-foreground transition-colors hover:bg-brand-cream lg:hidden"
          aria-label="Abrir menu lateral"
        >
          <Menu className="h-5 w-5" />
        </button>

        <h1 className="text-lg font-semibold text-foreground">{title}</h1>
      </div>

      {/* Right: Notifications + User */}
      <div className="flex items-center gap-3">
        {/* Notification bell */}
        <button
          type="button"
          className="relative rounded-full p-2 text-muted-foreground transition-colors hover:bg-brand-cream hover:text-foreground"
          aria-label="Notificacoes"
        >
          <Bell className="h-5 w-5" />
          {notificationCount > 0 && (
            <span className="absolute -right-0.5 -top-0.5 flex h-4.5 w-4.5 items-center justify-center rounded-full bg-brand-red text-[10px] font-bold text-white">
              {notificationCount > 9 ? '9+' : notificationCount}
            </span>
          )}
        </button>

        {/* User dropdown */}
        <div className="relative">
          <button
            type="button"
            onClick={() => setUserMenuOpen(!userMenuOpen)}
            className="flex items-center gap-2 rounded-lg px-2 py-1.5 transition-colors hover:bg-brand-cream"
          >
            <div className="flex h-8 w-8 items-center justify-center rounded-full bg-brand-red text-sm font-bold text-white">
              <User className="h-4 w-4" />
            </div>
            <span className="hidden text-sm font-medium text-foreground sm:block">
              Admin
            </span>
            <ChevronDown className="hidden h-4 w-4 text-muted-foreground sm:block" />
          </button>

          {userMenuOpen && (
            <>
              <div
                className="fixed inset-0 z-10"
                onClick={() => setUserMenuOpen(false)}
                aria-hidden="true"
              />
              <div className="absolute right-0 z-20 mt-2 w-48 rounded-lg border border-border bg-white py-1 shadow-lg">
                <div className="border-b border-border px-4 py-2">
                  <p className="text-sm font-medium text-foreground">Administrador</p>
                  <p className="text-xs text-muted-foreground">admin@tiacepizzas.com</p>
                </div>
                <button
                  type="button"
                  className="flex w-full items-center gap-2 px-4 py-2 text-sm text-danger transition-colors hover:bg-danger/10"
                  onClick={() => {
                    setUserMenuOpen(false)
                    // Placeholder: will integrate with auth logout
                  }}
                >
                  <LogOut className="h-4 w-4" />
                  <span>Sair</span>
                </button>
              </div>
            </>
          )}
        </div>
      </div>
    </header>
  )
}
