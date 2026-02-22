import { Card } from '@/components/ui/Card'
import { MapPin, Truck } from 'lucide-react'

export default function EntregasPage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-foreground">Entregas</h1>
        <p className="text-sm text-muted-foreground">
          Zonas de entrega, taxas e entregadores
        </p>
      </div>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
        <div className="rounded-xl border border-border bg-white p-5 shadow-sm">
          <div className="flex items-center gap-2">
            <MapPin className="h-5 w-5 text-brand-red" />
            <p className="text-sm text-muted-foreground">Zonas Cadastradas</p>
          </div>
          <p className="mt-1 text-2xl font-bold text-foreground">0</p>
        </div>
        <div className="rounded-xl border border-border bg-white p-5 shadow-sm">
          <div className="flex items-center gap-2">
            <Truck className="h-5 w-5 text-brand-gold" />
            <p className="text-sm text-muted-foreground">Entregadores Ativos</p>
          </div>
          <p className="mt-1 text-2xl font-bold text-foreground">0</p>
        </div>
        <div className="rounded-xl border border-border bg-white p-5 shadow-sm">
          <div className="flex items-center gap-2">
            <Truck className="h-5 w-5 text-success" />
            <p className="text-sm text-muted-foreground">Entregas Hoje</p>
          </div>
          <p className="mt-1 text-2xl font-bold text-foreground">0</p>
        </div>
      </div>

      <Card>
        <div className="flex flex-col items-center justify-center py-16 text-center">
          <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-brand-red/10">
            <MapPin className="h-8 w-8 text-brand-red" />
          </div>
          <h2 className="mb-2 text-lg font-semibold text-foreground">Gerenciamento de entregas</h2>
          <p className="max-w-md text-muted-foreground">
            Configure zonas de entrega por bairro ou CEP, defina taxas de entrega,
            cadastre entregadores e acompanhe entregas em andamento.
          </p>
          <span className="mt-4 inline-flex items-center rounded-full bg-brand-gold/10 px-3 py-1 text-xs font-medium text-brand-gold">
            Em desenvolvimento
          </span>
        </div>
      </Card>
    </div>
  )
}
