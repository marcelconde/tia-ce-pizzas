import { Card } from '@/components/ui/Card'
import { Tag, Plus } from 'lucide-react'

export default function PromocoesAdminPage() {
  return (
    <div className="space-y-6">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h1 className="text-2xl font-bold text-foreground">Promocoes</h1>
          <p className="text-sm text-muted-foreground">
            Gerencie cupons, descontos e promocoes especiais
          </p>
        </div>
        <button className="inline-flex items-center gap-2 rounded-lg bg-brand-red px-4 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-brand-red-dark">
          <Plus className="h-4 w-4" />
          Nova Promocao
        </button>
      </div>

      <Card>
        <div className="flex flex-col items-center justify-center py-16 text-center">
          <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-brand-gold/10">
            <Tag className="h-8 w-8 text-brand-gold" />
          </div>
          <h2 className="mb-2 text-lg font-semibold text-foreground">Nenhuma promocao ativa</h2>
          <p className="max-w-md text-muted-foreground">
            Crie cupons de desconto, promocoes do dia, combos especiais e
            programas de fidelidade para atrair e fidelizar seus clientes.
          </p>
          <span className="mt-4 inline-flex items-center rounded-full bg-brand-gold/10 px-3 py-1 text-xs font-medium text-brand-gold">
            Em desenvolvimento
          </span>
        </div>
      </Card>
    </div>
  )
}
