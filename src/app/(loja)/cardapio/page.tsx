import { Card } from '@/components/ui/Card'
import { Pizza, Clock } from 'lucide-react'
import Link from 'next/link'

export default function CardapioPage() {
  return (
    <div className="mx-auto max-w-4xl px-4 py-16 sm:px-6">
      <div className="text-center">
        <div className="mx-auto mb-6 flex h-24 w-24 items-center justify-center rounded-full bg-brand-red/10">
          <Pizza className="h-12 w-12 text-brand-red" />
        </div>
        <h1 className="mb-3 text-3xl font-extrabold text-brand-dark sm:text-4xl">
          Cardapio em breve
        </h1>
        <p className="mb-8 text-lg text-muted-foreground">
          Estamos preparando nosso cardapio online com todos os sabores deliciosos da Tia Ce.
          Em breve voce podera fazer seu pedido diretamente pelo site!
        </p>
      </div>

      <Card className="mx-auto max-w-lg text-center">
        <div className="flex items-center justify-center gap-2 text-brand-gold">
          <Clock className="h-5 w-5" />
          <span className="font-semibold">Enquanto isso...</span>
        </div>
        <p className="mt-3 text-muted-foreground">
          Faca seu pedido por telefone ou WhatsApp!
          Nossa equipe tera prazer em atende-lo.
        </p>
        <div className="mt-6 flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
          <a
            href="tel:+5500000000000"
            className="inline-flex items-center gap-2 rounded-lg bg-brand-red px-6 py-3 font-semibold text-white transition-colors hover:bg-brand-red-dark"
          >
            Ligar Agora
          </a>
          <Link
            href="/"
            className="inline-flex items-center gap-2 rounded-lg border-2 border-brand-gold px-6 py-3 font-semibold text-brand-gold transition-colors hover:bg-brand-gold hover:text-brand-dark"
          >
            Voltar ao Inicio
          </Link>
        </div>
      </Card>
    </div>
  )
}
