import { Card } from '@/components/ui/Card'
import { ChefHat } from 'lucide-react'

export default function CozinhaPage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-foreground">Cozinha (KDS)</h1>
        <p className="text-sm text-muted-foreground">
          Painel da cozinha para preparo dos pedidos
        </p>
      </div>

      <Card className="min-h-[60vh]">
        <div className="flex flex-col items-center justify-center py-24 text-center">
          <div className="mb-6 flex h-24 w-24 items-center justify-center rounded-full bg-brand-cream">
            <ChefHat className="h-12 w-12 text-brand-gold" />
          </div>
          <h2 className="mb-3 text-3xl font-bold text-foreground">Nenhum pedido na fila</h2>
          <p className="max-w-lg text-lg text-muted-foreground">
            Quando novos pedidos chegarem, eles serao exibidos aqui automaticamente
            com todos os detalhes para preparo. A tela atualiza em tempo real.
          </p>
          <span className="mt-6 inline-flex items-center rounded-full bg-brand-gold/10 px-3 py-1 text-xs font-medium text-brand-gold">
            Em desenvolvimento
          </span>
        </div>
      </Card>
    </div>
  )
}
