import { Card } from '@/components/ui/Card'
import { ClipboardList } from 'lucide-react'
import Link from 'next/link'

export default function MeusPedidosPage() {
  return (
    <div className="mx-auto max-w-4xl px-4 py-16 sm:px-6">
      <h1 className="mb-8 text-2xl font-bold text-brand-dark">Meus Pedidos</h1>

      <Card>
        <div className="flex flex-col items-center justify-center py-16 text-center">
          <div className="mb-4 flex h-20 w-20 items-center justify-center rounded-full bg-brand-cream">
            <ClipboardList className="h-10 w-10 text-brand-gold" />
          </div>
          <h2 className="mb-2 text-xl font-semibold text-foreground">Nenhum pedido ainda</h2>
          <p className="mb-6 max-w-md text-muted-foreground">
            Voce ainda nao fez nenhum pedido. Quando fizer, podera acompanhar
            o status de preparo e entrega em tempo real por aqui.
          </p>
          <Link
            href="/cardapio"
            className="inline-flex items-center gap-2 rounded-lg bg-brand-red px-6 py-3 font-semibold text-white transition-colors hover:bg-brand-red-dark"
          >
            Fazer Primeiro Pedido
          </Link>
        </div>
      </Card>
    </div>
  )
}
