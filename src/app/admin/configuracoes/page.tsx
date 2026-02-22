import { Card } from '@/components/ui/Card'
import { Settings, Store, Clock, CreditCard, Bell, Palette } from 'lucide-react'

export default function ConfiguracoesPage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-foreground">Configuracoes</h1>
        <p className="text-sm text-muted-foreground">
          Configuracoes gerais da loja e do sistema
        </p>
      </div>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {[
          {
            title: 'Dados da Loja',
            desc: 'Nome, endereco, telefone e informacoes de contato',
            icon: Store,
            color: 'brand-red',
          },
          {
            title: 'Horario de Funcionamento',
            desc: 'Defina os dias e horarios em que a loja aceita pedidos',
            icon: Clock,
            color: 'brand-gold',
          },
          {
            title: 'Formas de Pagamento',
            desc: 'PIX, cartao de credito, debito e dinheiro',
            icon: CreditCard,
            color: 'brand-red',
          },
          {
            title: 'Notificacoes',
            desc: 'Sons, alertas e integracoes com WhatsApp',
            icon: Bell,
            color: 'brand-gold',
          },
          {
            title: 'Aparencia',
            desc: 'Logo, cores e personalizacao do site',
            icon: Palette,
            color: 'brand-red',
          },
          {
            title: 'Sistema',
            desc: 'Backup, integracao com impressora e configuracoes avancadas',
            icon: Settings,
            color: 'brand-gold',
          },
        ].map((setting) => (
          <Card key={setting.title} className="cursor-pointer transition-all hover:-translate-y-0.5 hover:shadow-md">
            <div className="flex items-start gap-3">
              <div className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-${setting.color}/10`}>
                <setting.icon className={`h-5 w-5 text-${setting.color}`} />
              </div>
              <div>
                <h3 className="font-semibold text-foreground">{setting.title}</h3>
                <p className="mt-1 text-sm text-muted-foreground">{setting.desc}</p>
              </div>
            </div>
          </Card>
        ))}
      </div>

      <div className="rounded-xl border border-border bg-brand-cream-light p-4 text-center">
        <span className="inline-flex items-center rounded-full bg-brand-gold/10 px-3 py-1 text-xs font-medium text-brand-gold">
          Em desenvolvimento
        </span>
        <p className="mt-2 text-sm text-muted-foreground">
          As configuracoes serao editaveis em breve. Por enquanto, as opcoes acima representam as areas que estarao disponiveis.
        </p>
      </div>
    </div>
  )
}
