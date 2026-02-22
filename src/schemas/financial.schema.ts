import { z } from 'zod'

export const openCashRegisterSchema = z.object({
  openingAmount: z.number().min(0, 'Valor inicial não pode ser negativo'),
  note: z.string().optional(),
})

export const closeCashRegisterSchema = z.object({
  closingAmount: z.number().min(0, 'Valor final não pode ser negativo'),
  note: z.string().optional(),
})

export const cashTransactionSchema = z.object({
  type: z.enum(['SANGRIA', 'SUPRIMENTO']),
  amount: z.number().positive('Valor deve ser maior que zero'),
  description: z.string().min(1, 'Descrição é obrigatória'),
})

export const expenseSchema = z.object({
  category: z.string().min(1, 'Selecione uma categoria'),
  description: z.string().min(2, 'Descrição deve ter pelo menos 2 caracteres'),
  amount: z.number().positive('Valor deve ser maior que zero'),
  date: z.string().min(1, 'Data é obrigatória'),
  isRecurring: z.boolean().default(false),
})

export type OpenCashRegisterInput = z.infer<typeof openCashRegisterSchema>
export type CloseCashRegisterInput = z.infer<typeof closeCashRegisterSchema>
export type CashTransactionInput = z.infer<typeof cashTransactionSchema>
export type ExpenseInput = z.infer<typeof expenseSchema>
