import { z } from 'zod'

export const categorySchema = z.object({
  name: z.string().min(2, 'Nome deve ter pelo menos 2 caracteres'),
  slug: z.string().min(2, 'Slug deve ter pelo menos 2 caracteres').regex(/^[a-z0-9-]+$/, 'Slug deve conter apenas letras minúsculas, números e hífens'),
  description: z.string().optional(),
  image: z.string().optional(),
  sortOrder: z.number().int().min(0).default(0),
  isActive: z.boolean().default(true),
  type: z.enum(['PIZZA', 'BEVERAGE', 'SIDE', 'DESSERT']).default('PIZZA'),
})

export const productSizeSchema = z.object({
  size: z.enum(['PEQUENA', 'MEDIA', 'GRANDE', 'GIGANTE']),
  price: z.number().positive('Preço deve ser maior que zero'),
  isActive: z.boolean().default(true),
})

export const productSchema = z.object({
  categoryId: z.string().min(1, 'Selecione uma categoria'),
  name: z.string().min(2, 'Nome deve ter pelo menos 2 caracteres'),
  slug: z.string().min(2, 'Slug deve ter pelo menos 2 caracteres').regex(/^[a-z0-9-]+$/, 'Slug inválido'),
  description: z.string().optional(),
  isActive: z.boolean().default(true),
  isHalfHalf: z.boolean().default(true),
  sortOrder: z.number().int().min(0).default(0),
  sizes: z.array(productSizeSchema).min(1, 'Adicione pelo menos um tamanho'),
})

export const productIngredientSchema = z.object({
  ingredientId: z.string().min(1, 'Selecione um ingrediente'),
  size: z.enum(['PEQUENA', 'MEDIA', 'GRANDE', 'GIGANTE']),
  quantity: z.number().positive('Quantidade deve ser maior que zero'),
})

export type CategoryInput = z.infer<typeof categorySchema>
export type ProductInput = z.infer<typeof productSchema>
export type ProductSizeInput = z.infer<typeof productSizeSchema>
export type ProductIngredientInput = z.infer<typeof productIngredientSchema>
