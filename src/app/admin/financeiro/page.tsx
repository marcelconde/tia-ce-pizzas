import { Card } from '@/components/ui/Card'
import { DollarSign, TrendingUp, TrendingDown, Wallet } from 'lucide-react'

export default function FinanceiroPage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-foreground">Financeiro</h1>
        <p className="text-sm text-muted-foreground">
          Visao geral das financas do negocio
        </p>
      </div>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
        <div className="rounded-xl border border-border bg-white p-5 shadow-sm">
          <div className="flex items-center gap-2">
            <DollarSign className="h-5 w-5 text-success" />
            <p className="text-sm text-muted-foreground">Receita do Mes</p>
          </div>
          <p className="mt-1 text-2xl font-bold text-foreground">R$ 0,00</p>
        </div>
        <div className="rounded-xl border border-border bg-white p-5 shadow-sm">
          <div className="flex items-center gap-2">
            <TrendingDown className="h-5 w-5 text-danger" />
            <p className="text-sm text-muted-foreground">Despesas do Mes</p>
          </div>
          <p className="mt-1 text-2xl font-bold text-foreground">R$ 0,00</p>
        </div>
        <div className="rounded-xl border border-border bg-white p-5 shadow-sm">
          <div className="flex items-center gap-2">
            <TrendingUp className="h-5 w-5 text-brand-gold" />
            <p className="text-sm text-muted-foreground">Lucro Estimado</p>
          </div>
          <p className="mt-1 text-2xl font-bold text-foreground">R$ 0,00</p>
        </div>
        <div className="rounded-xl border border-border bg-white p-5 shadow-sm">
          <div className="flex items-center gap-2">
            <Wallet className="h-5 w-5 text-brand-red" />
            <p className="text-sm text-muted-foreground">Caixa Atual</p>
          </div>
          <p className="mt-1 text-2xl font-bold text-foreground">R$ 0,00</p>
        </div>
      </div>

      <Card>
        <div className="flex flex-col items-center justify-center py-16 text-center">
          <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-brand-gold/10">
            <DollarSign className="h-8 w-8 text-brand-gold" />
          </div>
          <h2 className="mb-2 text-lg font-semibold text-foreground">Painel financeiro</h2>
          <p className="max-w-md text-muted-foreground">
            Acompanhe receitas, despesas, lucro e fluxo de caixa. Gere relatorios
            financeiros, controle abertura e fechamento de caixa diariamente.
          </p>
          <span className="mt-4 inline-flex items-center rounded-full bg-brand-gold/10 px-3 py-1 text-xs font-medium text-brand-gold">
            Em desenvolvimento
          </span>
        </div>
      </Card>
    </div>
  )
}
