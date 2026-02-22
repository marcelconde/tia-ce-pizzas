import Link from 'next/link'
import { ClipboardList, DollarSign, Package, TrendingUp } from 'lucide-react'

export default function AdminDashboardPage() {
  const stats = [
    { label: 'Pedidos Hoje', value: '0', icon: ClipboardList, color: 'brand-red' },
    { label: 'Faturamento', value: 'R$ 0,00', icon: DollarSign, color: 'brand-gold' },
    { label: 'Ticket Medio', value: 'R$ 0,00', icon: TrendingUp, color: 'brand-red' },
    { label: 'Itens em Baixa', value: '0', icon: Package, color: 'warning' },
  ]

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {stats.map((stat) => (
          <div key={stat.label} className="rounded-xl border border-border bg-white p-6 shadow-sm">
            <div className="flex items-center gap-3">
              <div className={`flex h-10 w-10 items-center justify-center rounded-lg bg-${stat.color}/10`}>
                <stat.icon className={`h-5 w-5 text-${stat.color}`} />
              </div>
              <div>
                <p className="text-sm text-muted-foreground">{stat.label}</p>
                <p className="text-2xl font-bold text-foreground">{stat.value}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="rounded-xl border border-border bg-white p-6 shadow-sm">
        <h2 className="mb-4 text-lg font-semibold">Pedidos Recentes</h2>
        <p className="text-muted-foreground">Nenhum pedido ainda. Os pedidos aparecerao aqui em tempo real.</p>
      </div>
    </div>
  )
}
