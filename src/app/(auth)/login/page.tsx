'use client'

import { useState, Suspense } from 'react'
import { signIn } from 'next-auth/react'
import { useRouter, useSearchParams } from 'next/navigation'
import Logo from '@/components/shared/Logo'
import Link from 'next/link'

function LoginForm() {
  const router = useRouter()
  const searchParams = useSearchParams()
  const callbackUrl = searchParams.get('callbackUrl') || '/admin'

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setError('')
    setLoading(true)

    try {
      const result = await signIn('credentials', {
        email,
        password,
        redirect: false,
      })

      if (result?.error) {
        setError('Email ou senha incorretos')
      } else {
        router.push(callbackUrl)
      }
    } catch {
      setError('Erro ao fazer login. Tente novamente.')
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="flex min-h-screen items-center justify-center bg-brand-cream-light px-4">
      <div className="w-full max-w-md">
        {/* Logo */}
        <div className="mb-8 flex justify-center">
          <Link href="/" aria-label="Voltar para a página inicial">
            <Logo size="lg" />
          </Link>
        </div>

        {/* Card */}
        <div className="rounded-2xl border border-border bg-white p-8 shadow-lg">
          <h1 className="mb-2 text-center text-2xl font-bold text-brand-dark">
            Painel Administrativo
          </h1>
          <p className="mb-6 text-center text-sm text-muted-foreground">
            Faça login para acessar o painel
          </p>

          <form onSubmit={handleSubmit} className="space-y-4">
            {error && (
              <div className="rounded-lg bg-danger/10 p-3 text-sm text-danger">
                {error}
              </div>
            )}

            <div>
              <label
                htmlFor="email"
                className="mb-1.5 block text-sm font-medium text-foreground"
              >
                Email
              </label>
              <input
                id="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full rounded-lg border border-border bg-white px-4 py-2.5 text-sm outline-none transition-colors focus:border-brand-red focus:ring-2 focus:ring-brand-red/20"
                placeholder="admin@tiacepizzas.com"
                required
              />
            </div>

            <div>
              <label
                htmlFor="password"
                className="mb-1.5 block text-sm font-medium text-foreground"
              >
                Senha
              </label>
              <input
                id="password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full rounded-lg border border-border bg-white px-4 py-2.5 text-sm outline-none transition-colors focus:border-brand-red focus:ring-2 focus:ring-brand-red/20"
                placeholder="••••••••"
                required
              />
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full rounded-lg bg-brand-red px-4 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-brand-red-dark disabled:cursor-not-allowed disabled:opacity-50"
            >
              {loading ? (
                <span className="flex items-center justify-center gap-2">
                  <svg
                    className="h-4 w-4 animate-spin"
                    viewBox="0 0 24 24"
                    fill="none"
                  >
                    <circle
                      className="opacity-25"
                      cx="12"
                      cy="12"
                      r="10"
                      stroke="currentColor"
                      strokeWidth="4"
                    />
                    <path
                      className="opacity-75"
                      fill="currentColor"
                      d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"
                    />
                  </svg>
                  Entrando...
                </span>
              ) : (
                'Entrar'
              )}
            </button>
          </form>

          <div className="mt-6 text-center">
            <Link
              href="/"
              className="text-sm text-brand-red transition-colors hover:text-brand-red-dark"
            >
              Voltar ao site
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default function LoginPage() {
  return (
    <Suspense fallback={
      <div className="flex min-h-screen items-center justify-center bg-brand-cream-light">
        <div className="h-8 w-8 animate-spin rounded-full border-4 border-brand-red border-t-transparent" />
      </div>
    }>
      <LoginForm />
    </Suspense>
  )
}
