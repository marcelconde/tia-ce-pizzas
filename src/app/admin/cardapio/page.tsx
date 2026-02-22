import { Card } from '@/components/ui/Card'
import { Pizza, Plus } from 'lucide-react'
import Link from 'next/link'

export default function CardapioAdminPage() {
  return (
    <div className="space-y-6">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h1 className="text-2xl font-bold text-foreground">Cardapio</h1>
          <p className="text-sm text-muted-foreground">
            Gerencie os produtos e itens do cardapio
          </p>
        </div>
        <button className="inline-flex items-center gap-2 rounded-lg bg-brand-red px-4 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-brand-red-dark">
          <Plus className="h-4 w-4" />
          Novo Produto
        </button>
      </div>

      <Card>
        <div className="flex flex-col items-center justify-center py-16 text-center">
          <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-brand-red/10">
            <Pizza className="h-8 w-8 text-brand-red" />
          </div>
          <h2 className="mb-2 text-lg font-semibold text-foreground">Nenhum produto cadastrado</h2>
          <p className="max-w-md text-muted-foreground">
            Aqui voce podera cadastrar pizzas, bebidas e outros itens do cardapio,
            definir precos por tamanho, adicionar fotos e gerenciar disponibilidade.
          </p>
          <span className="mt-4 inline-flex items-center rounded-full bg-brand-gold/10 px-3 py-1 text-xs font-medium text-brand-gold">
            Em desenvolvimento
          </span>
        </div>
      </Card>
    </div>
  )
}
