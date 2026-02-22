import { format, formatDistanceToNow } from 'date-fns'
import { ptBR } from 'date-fns/locale'

/** Compatible with Prisma's Decimal type and any Decimal.js-like value. */
type DecimalLike = { toNumber(): number } | { toString(): string }

/**
 * Formats a number or Prisma Decimal to BRL currency string.
 * Example: 45.9 -> "R$ 45,90"
 */
export function formatBRL(value: number | DecimalLike): string {
  const num = typeof value === 'number' ? value : Number(value)
  return num.toLocaleString('pt-BR', {
    style: 'currency',
    currency: 'BRL',
  })
}

/**
 * Formats a phone number string.
 * Example: "11999999999" -> "(11) 99999-9999"
 */
export function formatPhone(phone: string): string {
  const digits = phone.replace(/\D/g, '')

  if (digits.length === 11) {
    return `(${digits.slice(0, 2)}) ${digits.slice(2, 7)}-${digits.slice(7)}`
  }

  if (digits.length === 10) {
    return `(${digits.slice(0, 2)}) ${digits.slice(2, 6)}-${digits.slice(6)}`
  }

  return phone
}

/**
 * Formats a CEP string.
 * Example: "01234567" -> "01234-567"
 */
export function formatCep(cep: string): string {
  const digits = cep.replace(/\D/g, '')

  if (digits.length === 8) {
    return `${digits.slice(0, 5)}-${digits.slice(5)}`
  }

  return cep
}

/**
 * Formats a CPF string.
 * Example: "12345678900" -> "123.456.789-00"
 */
export function formatCpf(cpf: string): string {
  const digits = cpf.replace(/\D/g, '')

  if (digits.length === 11) {
    return `${digits.slice(0, 3)}.${digits.slice(3, 6)}.${digits.slice(6, 9)}-${digits.slice(9)}`
  }

  return cpf
}

/**
 * Formats a date to "DD/MM/YYYY".
 * Example: new Date('2026-02-20') -> "20/02/2026"
 */
export function formatDate(date: Date | string): string {
  const d = typeof date === 'string' ? new Date(date) : date
  return format(d, 'dd/MM/yyyy', { locale: ptBR })
}

/**
 * Formats a date to "DD/MM/YYYY HH:mm".
 * Example: new Date('2026-02-20T19:30:00') -> "20/02/2026 19:30"
 */
export function formatDateTime(date: Date | string): string {
  const d = typeof date === 'string' ? new Date(date) : date
  return format(d, 'dd/MM/yyyy HH:mm', { locale: ptBR })
}

/**
 * Formats a date to relative time in Portuguese.
 * Example: 5 minutes ago -> "h\u00e1 5 minutos"
 */
export function formatRelativeTime(date: Date | string): string {
  const d = typeof date === 'string' ? new Date(date) : date
  return formatDistanceToNow(d, { addSuffix: true, locale: ptBR })
}
