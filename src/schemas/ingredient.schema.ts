import { z } from 'zod'

export const ingredientSchema = z.object({
  name: z.string().min(2, 'Nome deve ter pelo menos 2 caracteres'),
  unit: z.enum(['GRAMAS', 'QUILOGRAMAS', 'MILILITROS', 'LITROS', 'UNIDADE', 'PORCAO', 'FATIA']),
  costPerUnit: z.number().min(0, 'Custo deve ser positivo'),
  currentStock: z.number().min(0, 'Estoque não pode ser negativo').default(0),
  minimumStock: z.number().min(0, 'Estoque mínimo não pode ser negativo').default(0),
  isActive: z.boolean().default(true),
})

export const stockEntrySchema = z.object({
  ingredientId: z.string().min(1, 'Selecione um ingrediente'),
  type: z.enum(['ENTRADA', 'SAIDA_MANUAL', 'AJUSTE', 'DESCARTE']),
  quantity: z.number().positive('Quantidade deve ser maior que zero'),
  note: z.string().optional(),
})

export type IngredientInput = z.infer<typeof ingredientSchema>
export type StockEntryInput = z.infer<typeof stockEntrySchema>
