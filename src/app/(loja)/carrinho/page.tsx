import { Card } from '@/components/ui/Card'
import { ShoppingCart } from 'lucide-react'
import Link from 'next/link'

export default function CarrinhoPage() {
  return (
    <div className="mx-auto max-w-4xl px-4 py-16 sm:px-6">
      <h1 className="mb-8 text-2xl font-bold text-brand-dark">Meu Carrinho</h1>

      <Card>
        <div className="flex flex-col items-center justify-center py-16 text-center">
          <div className="mb-4 flex h-20 w-20 items-center justify-center rounded-full bg-brand-cream">
            <ShoppingCart className="h-10 w-10 text-brand-gold" />
          </div>
          <h2 className="mb-2 text-xl font-semibold text-foreground">Seu carrinho esta vazio</h2>
          <p className="mb-6 max-w-md text-muted-foreground">
            Que tal explorar nosso cardapio e adicionar algumas pizzas deliciosas?
          </p>
          <Link
            href="/cardapio"
            className="inline-flex items-center gap-2 rounded-lg bg-brand-red px-6 py-3 font-semibold text-white transition-colors hover:bg-brand-red-dark"
          >
            Ver Cardapio
          </Link>
        </div>
      </Card>
    </div>
  )
}
