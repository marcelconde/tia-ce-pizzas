import { Card } from '@/components/ui/Card'
import { BarChart3, FileText, Download } from 'lucide-react'

export default function RelatoriosPage() {
  return (
    <div className="space-y-6">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h1 className="text-2xl font-bold text-foreground">Relatorios</h1>
          <p className="text-sm text-muted-foreground">
            Analises e relatorios do negocio
          </p>
        </div>
        <button className="inline-flex items-center gap-2 rounded-lg border border-border bg-white px-4 py-2.5 text-sm font-semibold text-foreground transition-colors hover:bg-muted">
          <Download className="h-4 w-4" />
          Exportar
        </button>
      </div>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {[
          { title: 'Vendas por Periodo', desc: 'Receita total, ticket medio e evolucao de vendas' },
          { title: 'Produtos Mais Vendidos', desc: 'Ranking dos itens mais pedidos do cardapio' },
          { title: 'Horarios de Pico', desc: 'Analise dos horarios com maior volume de pedidos' },
          { title: 'Desempenho de Entregas', desc: 'Tempo medio de entrega e satisfacao do cliente' },
          { title: 'Clientes Frequentes', desc: 'Top clientes por numero de pedidos e valor gasto' },
          { title: 'Analise Financeira', desc: 'Receita vs despesas, margem de lucro e projecoes' },
        ].map((report) => (
          <Card key={report.title} className="cursor-pointer transition-all hover:-translate-y-0.5 hover:shadow-md">
            <div className="flex items-start gap-3">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-brand-red/10">
                <BarChart3 className="h-5 w-5 text-brand-red" />
              </div>
              <div>
                <h3 className="font-semibold text-foreground">{report.title}</h3>
                <p className="mt-1 text-sm text-muted-foreground">{report.desc}</p>
              </div>
            </div>
          </Card>
        ))}
      </div>

      <Card>
        <div className="flex flex-col items-center justify-center py-12 text-center">
          <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-brand-gold/10">
            <FileText className="h-8 w-8 text-brand-gold" />
          </div>
          <h2 className="mb-2 text-lg font-semibold text-foreground">Relatorios detalhados</h2>
          <p className="max-w-md text-muted-foreground">
            Os relatorios serao gerados automaticamente com base nos dados de pedidos,
            vendas e financas. Exporte em PDF ou Excel.
          </p>
          <span className="mt-4 inline-flex items-center rounded-full bg-brand-gold/10 px-3 py-1 text-xs font-medium text-brand-gold">
            Em desenvolvimento
          </span>
        </div>
      </Card>
    </div>
  )
}
