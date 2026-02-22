'use client'

import Link from 'next/link'

interface LogoProps {
  size?: 'sm' | 'md' | 'lg' | 'hero'
  showText?: boolean
}

const sizeMap = {
  sm: { icon: 42, text: 'text-base', sub: 'text-[10px]' },
  md: { icon: 52, text: 'text-xl', sub: 'text-xs' },
  lg: { icon: 72, text: 'text-3xl', sub: 'text-sm' },
  hero: { icon: 340, text: 'text-5xl', sub: 'text-lg' },
}

function LogoIcon({ size }: { size: number }) {
  // Gerar os tracinhos decorativos da borda dourada (como a logo real)
  const dashes: React.ReactElement[] = []
  const numDashes = 72
  const cx = 200
  const cy = 200
  const innerR = 140
  const outerR = 155

  for (let i = 0; i < numDashes; i++) {
    const angle = (i * 360) / numDashes
    const rad = (angle * Math.PI) / 180
    const x1 = cx + innerR * Math.cos(rad)
    const y1 = cy + innerR * Math.sin(rad)
    const x2 = cx + outerR * Math.cos(rad)
    const y2 = cy + outerR * Math.sin(rad)
    dashes.push(
      <line
        key={i}
        x1={x1}
        y1={y1}
        x2={x2}
        y2={y2}
        stroke="#C8943E"
        strokeWidth="2.2"
        strokeLinecap="round"
      />
    )
  }

  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 400 400"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="flex-shrink-0"
    >
      {/* Anel externo vermelho */}
      <circle cx="200" cy="200" r="195" fill="#C41E24" />
      {/* Espaço branco entre anéis */}
      <circle cx="200" cy="200" r="178" fill="#FFFFFF" />
      {/* Segundo anel vermelho interno */}
      <circle cx="200" cy="200" r="172" fill="#C41E24" />
      {/* Anel dourado */}
      <circle cx="200" cy="200" r="160" fill="#D4A853" />
      {/* Tracinhos decorativos dourados (raios) */}
      {dashes}
      {/* Círculo interno dourado claro */}
      <circle cx="200" cy="200" r="138" fill="#E0B864" />
      {/* Centro creme */}
      <circle cx="200" cy="200" r="130" fill="#F5E6C8" />

      {/* Texto "Tia Cê" em itálico cursivo */}
      <text
        x="200"
        y="180"
        textAnchor="middle"
        dominantBaseline="middle"
        fill="#1A1A1A"
        fontFamily="'Georgia', 'Times New Roman', serif"
        fontWeight="bold"
        fontStyle="italic"
        fontSize="68"
      >
        Tia Cê
      </text>

      {/* Texto "PIZZAS" em bold */}
      <text
        x="200"
        y="260"
        textAnchor="middle"
        dominantBaseline="middle"
        fill="#1A1A1A"
        fontFamily="'Arial Black', 'Helvetica', sans-serif"
        fontWeight="900"
        fontSize="58"
        letterSpacing="6"
      >
        PIZZAS
      </text>
    </svg>
  )
}

export default function Logo({ size = 'md', showText = true }: LogoProps) {
  const config = sizeMap[size]

  if (size === 'hero') {
    return <LogoIcon size={config.icon} />
  }

  return (
    <Link href="/" className="flex items-center gap-2.5">
      <LogoIcon size={config.icon} />
      {showText && (
        <div className="flex flex-col leading-tight">
          <span
            className={`font-bold ${config.text} text-brand-red`}
            style={{ fontFamily: "'Georgia', serif" }}
          >
            Tia Cê
          </span>
          <span className={`font-semibold ${config.sub} uppercase tracking-widest text-brand-gold-dark`}>
            Pizzas
          </span>
        </div>
      )}
    </Link>
  )
}
