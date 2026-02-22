/**
 * Validates a Brazilian CPF number.
 * Checks format, rejects known invalid sequences, and verifies check digits.
 */
export function validateCPF(cpf: string): boolean {
  const digits = cpf.replace(/\D/g, '')

  if (digits.length !== 11) return false

  // Reject known invalid sequences (all same digit)
  if (/^(\d)\1{10}$/.test(digits)) return false

  // Validate first check digit
  let sum = 0
  for (let i = 0; i < 9; i++) {
    sum += parseInt(digits.charAt(i)) * (10 - i)
  }
  let remainder = (sum * 10) % 11
  if (remainder === 10) remainder = 0
  if (remainder !== parseInt(digits.charAt(9))) return false

  // Validate second check digit
  sum = 0
  for (let i = 0; i < 10; i++) {
    sum += parseInt(digits.charAt(i)) * (11 - i)
  }
  remainder = (sum * 10) % 11
  if (remainder === 10) remainder = 0
  if (remainder !== parseInt(digits.charAt(10))) return false

  return true
}

/**
 * Validates a Brazilian CEP (postal code).
 * Must be exactly 8 digits (with or without hyphen).
 */
export function validateCEP(cep: string): boolean {
  const digits = cep.replace(/\D/g, '')
  return digits.length === 8 && /^\d{8}$/.test(digits)
}

/**
 * Validates a Brazilian phone number.
 * Accepts 10 digits (landline) or 11 digits (mobile with 9th digit).
 */
export function validatePhone(phone: string): boolean {
  const digits = phone.replace(/\D/g, '')
  return digits.length === 10 || digits.length === 11
}

/**
 * Validates an email address format.
 */
export function validateEmail(email: string): boolean {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  return emailRegex.test(email)
}

/**
 * Sanitizes a phone number by removing all non-digit characters.
 * Example: "(11) 99999-9999" -> "11999999999"
 */
export function sanitizePhone(phone: string): string {
  return phone.replace(/\D/g, '')
}
