import Link from 'next/link'
import { Clock, MapPin, Phone, Star, ArrowRight, Flame } from 'lucide-react'
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import Logo from '@/components/shared/Logo'

export default function HomePage() {
  return (
    <>
      <Navbar />
      <main>
        {/* Hero Section */}
        <section className="relative overflow-hidden bg-brand-dark">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--brand-red)_0%,_transparent_50%)] opacity-20" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,_var(--brand-gold)_0%,_transparent_50%)] opacity-10" />
          <div className="relative mx-auto max-w-7xl px-6 py-24 sm:px-8 lg:py-32">
            <div className="flex flex-col items-center gap-12 lg:flex-row lg:items-center lg:gap-16">
              {/* Texto do Hero */}
              <div className="flex-1 text-center lg:text-left">
                <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-brand-gold/30 bg-brand-gold/10 px-5 py-2 text-sm font-medium text-brand-gold backdrop-blur-sm">
                  <Flame className="h-4 w-4" />
                  Delivery de Pizzas Artesanais
                </div>
                <h1 className="mb-6 text-5xl font-extrabold leading-[1.1] tracking-tight text-white sm:text-6xl lg:text-7xl">
                  As melhores
                  <br />
                  pizzas{' '}
                  <span className="bg-gradient-to-r from-brand-gold to-brand-gold-light bg-clip-text text-transparent">
                    da Tia Cê
                  </span>
                </h1>
                <p className="mx-auto mb-10 max-w-lg text-lg leading-relaxed text-brand-cream/70 lg:mx-0">
                  Feitas com amor e os melhores ingredientes. Peça agora e receba
                  quentinha na sua casa!
                </p>
                <div className="flex flex-col items-center gap-4 sm:flex-row sm:justify-center lg:justify-start">
                  <Link
                    href="/cardapio"
                    className="group inline-flex items-center gap-2 rounded-xl bg-brand-red px-8 py-4 text-lg font-bold text-white shadow-lg shadow-brand-red/30 transition-all hover:bg-brand-red-dark hover:shadow-xl hover:shadow-brand-red/40"
                  >
                    Ver Cardápio
                    <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
                  </Link>
                  <a
                    href="tel:+5500000000000"
                    className="inline-flex items-center gap-2 rounded-xl border-2 border-brand-gold/50 px-8 py-4 text-lg font-bold text-brand-gold transition-all hover:border-brand-gold hover:bg-brand-gold hover:text-brand-dark"
                  >
                    <Phone className="h-5 w-5" />
                    Ligar Agora
                  </a>
                </div>
              </div>

              {/* Logo grande do Hero */}
              <div className="flex-shrink-0">
                <div className="relative">
                  <div className="absolute -inset-8 rounded-full bg-brand-gold/10 blur-3xl" />
                  <div className="absolute -inset-16 rounded-full bg-brand-red/5 blur-3xl" />
                  <div className="relative drop-shadow-2xl">
                    <Logo size="hero" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Features */}
        <section className="bg-brand-cream-light py-20">
          <div className="mx-auto max-w-7xl px-6 sm:px-8">
            <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
              {[
                {
                  icon: Star,
                  title: 'Ingredientes Selecionados',
                  desc: 'Usamos apenas os melhores ingredientes, frescos e de qualidade.',
                  iconWrapClass: 'bg-brand-red/10',
                  iconClass: 'text-brand-red',
                },
                {
                  icon: Clock,
                  title: 'Entrega Rápida',
                  desc: 'Sua pizza chega quentinha! Acompanhe o status em tempo real.',
                  iconWrapClass: 'bg-brand-gold/10',
                  iconClass: 'text-brand-gold',
                },
                {
                  icon: MapPin,
                  title: 'Diversas Regiões',
                  desc: 'Entregamos em vários bairros da região com taxa justa.',
                  iconWrapClass: 'bg-brand-red/10',
                  iconClass: 'text-brand-red',
                },
              ].map((item) => (
                <div
                  key={item.title}
                  className="flex flex-col items-center rounded-2xl bg-white p-8 text-center shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-md"
                >
                  <div
                    className={`mb-5 flex h-16 w-16 items-center justify-center rounded-2xl ${item.iconWrapClass}`}
                  >
                    <item.icon className={`h-8 w-8 ${item.iconClass}`} />
                  </div>
                  <h3 className="mb-2 text-xl font-bold text-brand-dark">{item.title}</h3>
                  <p className="leading-relaxed text-muted-foreground">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Popular Pizzas */}
        <section className="py-20">
          <div className="mx-auto max-w-7xl px-6 sm:px-8">
            <div className="mb-12 text-center">
              <h2 className="mb-3 text-3xl font-extrabold text-brand-dark sm:text-4xl">
                Nossas Pizzas Mais Pedidas
              </h2>
              <p className="text-lg text-muted-foreground">
                Sabores que conquistam nossos clientes toda noite
              </p>
            </div>
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {[
                { name: 'Calabresa', price: '29,90', emoji: '🍕' },
                { name: 'Margherita', price: '29,90', emoji: '🍕' },
                { name: 'Portuguesa', price: '32,90', emoji: '🍕' },
                { name: 'Frango c/ Catupiry', price: '32,90', emoji: '🍕' },
              ].map((pizza) => (
                <div
                  key={pizza.name}
                  className="group overflow-hidden rounded-2xl border border-border bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
                >
                  <div className="relative flex h-48 items-center justify-center bg-gradient-to-br from-brand-cream to-brand-cream-light">
                    <span className="text-7xl transition-transform duration-300 group-hover:scale-110">
                      {pizza.emoji}
                    </span>
                  </div>
                  <div className="p-5">
                    <h3 className="mb-1 text-lg font-bold text-brand-dark">{pizza.name}</h3>
                    <p className="mb-4 text-sm text-muted-foreground">
                      Pizza artesanal feita com ingredientes frescos
                    </p>
                    <div className="flex items-center justify-between">
                      <div>
                        <span className="text-xs text-muted-foreground">a partir de</span>
                        <p className="text-xl font-extrabold text-brand-red">
                          <span className="text-sm font-bold">R$</span> {pizza.price}
                        </p>
                      </div>
                      <Link
                        href="/cardapio"
                        className="rounded-lg bg-brand-red px-4 py-2 text-sm font-semibold text-white transition-all hover:bg-brand-red-dark hover:shadow-md"
                      >
                        Pedir
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-12 text-center">
              <Link
                href="/cardapio"
                className="group inline-flex items-center gap-2 text-lg font-semibold text-brand-red transition-colors hover:text-brand-red-dark"
              >
                Ver cardápio completo
                <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Link>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="bg-brand-red py-20">
          <div className="mx-auto max-w-4xl px-6 text-center sm:px-8">
            <h2 className="mb-4 text-3xl font-extrabold text-white sm:text-4xl">
              Fome? Peça agora mesmo!
            </h2>
            <p className="mb-10 text-lg text-white/80">
              Monte sua pizza, acompanhe o preparo em tempo real e receba em casa.
            </p>
            <Link
              href="/cardapio"
              className="group inline-flex items-center gap-2 rounded-xl bg-brand-gold px-10 py-4 text-lg font-bold text-brand-dark shadow-lg transition-all hover:bg-brand-gold-dark hover:shadow-xl"
            >
              Fazer Pedido
              <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
        </section>

        {/* Horário de Funcionamento */}
        <section className="py-20">
          <div className="mx-auto max-w-2xl px-6 text-center sm:px-8">
            <div className="mb-5 inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-brand-gold/10">
              <Clock className="h-7 w-7 text-brand-gold" />
            </div>
            <h2 className="mb-8 text-3xl font-extrabold text-brand-dark">
              Horário de Funcionamento
            </h2>
            <div className="overflow-hidden rounded-2xl border border-border bg-white shadow-sm">
              <div className="divide-y divide-border">
                {[
                  { day: 'Segunda-feira', hours: 'Fechado', closed: true },
                  { day: 'Terça-feira', hours: '18:00 - 23:30', closed: false },
                  { day: 'Quarta-feira', hours: '18:00 - 23:30', closed: false },
                  { day: 'Quinta-feira', hours: '18:00 - 23:30', closed: false },
                  { day: 'Sexta-feira', hours: '18:00 - 00:00', closed: false },
                  { day: 'Sábado', hours: '18:00 - 00:00', closed: false },
                  { day: 'Domingo', hours: '18:00 - 23:00', closed: false },
                ].map(({ day, hours, closed }) => (
                  <div
                    key={day}
                    className={`flex items-center justify-between px-6 py-4 transition-colors hover:bg-brand-cream-light/50 ${
                      closed ? 'bg-danger/5' : ''
                    }`}
                  >
                    <span className="font-medium text-foreground">{day}</span>
                    <span
                      className={`rounded-full px-3 py-1 text-sm font-semibold ${
                        closed
                          ? 'bg-danger/10 text-danger'
                          : 'bg-brand-red/10 text-brand-red'
                      }`}
                    >
                      {hours}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
