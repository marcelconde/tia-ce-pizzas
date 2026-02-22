import { Card } from '@/components/ui/Card'
import { Tag, Bell } from 'lucide-react'
import Link from 'next/link'

export default function PromocoesPage() {
  return (
    <div className="mx-auto max-w-4xl px-4 py-16 sm:px-6">
      <div className="mb-8 text-center">
        <h1 className="mb-3 text-3xl font-extrabold text-brand-dark">Promocoes</h1>
        <p className="text-lg text-muted-foreground">
          Confira nossas ofertas especiais e economize no seu pedido
        </p>
      </div>

      <Card>
        <div className="flex flex-col items-center justify-center py-16 text-center">
          <div className="mb-4 flex h-20 w-20 items-center justify-center rounded-full bg-brand-gold/10">
            <Tag className="h-10 w-10 text-brand-gold" />
          </div>
          <h2 className="mb-2 text-xl font-semibold text-foreground">Promocoes em breve</h2>
          <p className="mb-6 max-w-md text-muted-foreground">
            Estamos preparando ofertas incriveis para voce! Em breve teremos
            cupons de desconto, combos especiais e promocoes exclusivas.
          </p>
          <div className="flex flex-col items-center gap-3 sm:flex-row">
            <Link
              href="/cardapio"
              className="inline-flex items-center gap-2 rounded-lg bg-brand-red px-6 py-3 font-semibold text-white transition-colors hover:bg-brand-red-dark"
            >
              Ver Cardapio
            </Link>
            <Link
              href="/"
              className="inline-flex items-center gap-2 rounded-lg border-2 border-brand-gold px-6 py-3 font-semibold text-brand-gold transition-colors hover:bg-brand-gold hover:text-brand-dark"
            >
              Voltar ao Inicio
            </Link>
          </div>
        </div>
      </Card>
    </div>
  )
}
