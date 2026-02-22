import { Card } from '@/components/ui/Card'
import { Users, Search } from 'lucide-react'

export default function ClientesPage() {
  return (
    <div className="space-y-6">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h1 className="text-2xl font-bold text-foreground">Clientes</h1>
          <p className="text-sm text-muted-foreground">
            Base de clientes e historico de pedidos
          </p>
        </div>
        <div className="flex items-center gap-2 rounded-lg border border-border bg-white px-3 py-2">
          <Search className="h-4 w-4 text-muted-foreground" />
          <span className="text-sm text-muted-foreground">Buscar cliente...</span>
        </div>
      </div>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
        <div className="rounded-xl border border-border bg-white p-5 shadow-sm">
          <p className="text-sm text-muted-foreground">Total de Clientes</p>
          <p className="text-2xl font-bold text-foreground">0</p>
        </div>
        <div className="rounded-xl border border-border bg-white p-5 shadow-sm">
          <p className="text-sm text-muted-foreground">Novos Este Mes</p>
          <p className="text-2xl font-bold text-brand-gold">0</p>
        </div>
        <div className="rounded-xl border border-border bg-white p-5 shadow-sm">
          <p className="text-sm text-muted-foreground">Clientes Recorrentes</p>
          <p className="text-2xl font-bold text-brand-red">0</p>
        </div>
      </div>

      <Card>
        <div className="flex flex-col items-center justify-center py-16 text-center">
          <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-brand-red/10">
            <Users className="h-8 w-8 text-brand-red" />
          </div>
          <h2 className="mb-2 text-lg font-semibold text-foreground">Nenhum cliente cadastrado</h2>
          <p className="max-w-md text-muted-foreground">
            A lista de clientes sera preenchida automaticamente conforme pedidos forem realizados.
            Voce podera ver historico de pedidos, enderecos e dados de contato.
          </p>
          <span className="mt-4 inline-flex items-center rounded-full bg-brand-gold/10 px-3 py-1 text-xs font-medium text-brand-gold">
            Em desenvolvimento
          </span>
        </div>
      </Card>
    </div>
  )
}
