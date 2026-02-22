import { clsx, type ClassValue } from 'clsx'
import { twMerge } from 'tailwind-merge'

/**
 * Merges class names using clsx and tailwind-merge.
 * Handles conditional classes and resolves Tailwind CSS conflicts.
 */
export function cn(...inputs: ClassValue[]): string {
  return twMerge(clsx(inputs))
}

/**
 * Converts a text string into a URL-friendly slug.
 * Example: "Pizza Calabresa Especial" -> "pizza-calabresa-especial"
 */
export function slugify(text: string): string {
  return text
    .toString()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '') // Remove diacritics
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9\s-]/g, '')   // Remove non-alphanumeric
    .replace(/\s+/g, '-')           // Replace spaces with hyphens
    .replace(/-+/g, '-')            // Replace multiple hyphens with single
    .replace(/^-+|-+$/g, '')        // Remove leading/trailing hyphens
}

/**
 * Generates an order code in the format "TIA-YYYYMMDD-XXX".
 * Uses random 3-digit suffix. For sequential codes, use order-code.ts.
 */
export function generateOrderCode(): string {
  const now = new Date()
  const year = now.getFullYear()
  const month = String(now.getMonth() + 1).padStart(2, '0')
  const day = String(now.getDate()).padStart(2, '0')
  const seq = String(Math.floor(Math.random() * 999) + 1).padStart(3, '0')

  return `TIA-${year}${month}${day}-${seq}`
}

/**
 * Returns a promise that resolves after the specified milliseconds.
 */
export function sleep(ms: number): Promise<void> {
  return new Promise((resolve) => setTimeout(resolve, ms))
}

/**
 * Extracts initials from a name string.
 * Example: "Maria da Silva" -> "MS"
 */
export function getInitials(name: string): string {
  return name
    .split(' ')
    .filter((part) => part.length > 0)
    .map((part) => part.charAt(0).toUpperCase())
    .slice(0, 2)
    .join('')
}
