import { Card } from '@/components/ui/Card'
import { ClipboardList, Search, Filter } from 'lucide-react'

export default function PedidosPage() {
  return (
    <div className="space-y-6">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h1 className="text-2xl font-bold text-foreground">Pedidos</h1>
          <p className="text-sm text-muted-foreground">
            Gerencie todos os pedidos do delivery
          </p>
        </div>
        <div className="flex gap-2">
          <div className="flex items-center gap-2 rounded-lg border border-border bg-white px-3 py-2">
            <Search className="h-4 w-4 text-muted-foreground" />
            <span className="text-sm text-muted-foreground">Buscar pedido...</span>
          </div>
          <div className="flex items-center gap-2 rounded-lg border border-border bg-white px-3 py-2">
            <Filter className="h-4 w-4 text-muted-foreground" />
            <span className="text-sm text-muted-foreground">Filtrar</span>
          </div>
        </div>
      </div>

      <Card>
        <div className="flex flex-col items-center justify-center py-16 text-center">
          <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-brand-red/10">
            <ClipboardList className="h-8 w-8 text-brand-red" />
          </div>
          <h2 className="mb-2 text-lg font-semibold text-foreground">Nenhum pedido encontrado</h2>
          <p className="max-w-md text-muted-foreground">
            Os pedidos feitos pelos clientes aparecerao aqui em tempo real.
            Voce podera acompanhar o status, imprimir comandas e gerenciar cada pedido.
          </p>
          <span className="mt-4 inline-flex items-center rounded-full bg-brand-gold/10 px-3 py-1 text-xs font-medium text-brand-gold">
            Em desenvolvimento
          </span>
        </div>
      </Card>
    </div>
  )
}
