import { Card } from '@/components/ui/Card'
import { UserCog, Plus } from 'lucide-react'

export default function FuncionariosPage() {
  return (
    <div className="space-y-6">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h1 className="text-2xl font-bold text-foreground">Funcionarios</h1>
          <p className="text-sm text-muted-foreground">
            Gerencie a equipe e permissoes de acesso
          </p>
        </div>
        <button className="inline-flex items-center gap-2 rounded-lg bg-brand-red px-4 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-brand-red-dark">
          <Plus className="h-4 w-4" />
          Novo Funcionario
        </button>
      </div>

      <Card>
        <div className="flex flex-col items-center justify-center py-16 text-center">
          <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-brand-red/10">
            <UserCog className="h-8 w-8 text-brand-red" />
          </div>
          <h2 className="mb-2 text-lg font-semibold text-foreground">Nenhum funcionario cadastrado</h2>
          <p className="max-w-md text-muted-foreground">
            Cadastre funcionarios, defina funcoes (cozinheiro, atendente, entregador, gerente)
            e controle permissoes de acesso ao painel administrativo.
          </p>
          <span className="mt-4 inline-flex items-center rounded-full bg-brand-gold/10 px-3 py-1 text-xs font-medium text-brand-gold">
            Em desenvolvimento
          </span>
        </div>
      </Card>
    </div>
  )
}
