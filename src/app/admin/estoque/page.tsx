import { Card } from '@/components/ui/Card'
import { Package, AlertTriangle } from 'lucide-react'

export default function EstoquePage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-foreground">Estoque</h1>
        <p className="text-sm text-muted-foreground">
          Controle de ingredientes e insumos
        </p>
      </div>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
        <div className="rounded-xl border border-border bg-white p-5 shadow-sm">
          <p className="text-sm text-muted-foreground">Total de Itens</p>
          <p className="text-2xl font-bold text-foreground">0</p>
        </div>
        <div className="rounded-xl border border-border bg-white p-5 shadow-sm">
          <p className="text-sm text-muted-foreground">Estoque Baixo</p>
          <p className="text-2xl font-bold text-warning">0</p>
        </div>
        <div className="rounded-xl border border-border bg-white p-5 shadow-sm">
          <p className="text-sm text-muted-foreground">Em Falta</p>
          <p className="text-2xl font-bold text-danger">0</p>
        </div>
      </div>

      <Card>
        <div className="flex flex-col items-center justify-center py-16 text-center">
          <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-brand-gold/10">
            <Package className="h-8 w-8 text-brand-gold" />
          </div>
          <h2 className="mb-2 text-lg font-semibold text-foreground">Controle de estoque</h2>
          <p className="max-w-md text-muted-foreground">
            Cadastre ingredientes, defina quantidades minimas e receba alertas
            quando o estoque estiver baixo. Acompanhe o historico de movimentacoes.
          </p>
          <span className="mt-4 inline-flex items-center rounded-full bg-brand-gold/10 px-3 py-1 text-xs font-medium text-brand-gold">
            Em desenvolvimento
          </span>
        </div>
      </Card>
    </div>
  )
}
