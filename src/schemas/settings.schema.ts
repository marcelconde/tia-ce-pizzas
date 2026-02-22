import { z } from 'zod'

export const operatingHourSchema = z.object({
  dayOfWeek: z.number().int().min(0).max(6),
  isOpen: z.boolean(),
  openTime: z.string().regex(/^\d{2}:\d{2}$/, 'Formato deve ser HH:MM'),
  closeTime: z.string().regex(/^\d{2}:\d{2}$/, 'Formato deve ser HH:MM'),
})

export const storeSettingsSchema = z.object({
  storeName: z.string().min(1),
  storePhone: z.string().min(10),
  storeWhatsapp: z.string().min(10).optional(),
  storeAddress: z.string().optional(),
  minimumOrderValue: z.number().min(0).default(0),
  averagePreparationMinutes: z.number().int().positive().default(30),
  isStoreOpenOverride: z.boolean().optional(),
  pixKey: z.string().optional(),
  operatingHours: z.array(operatingHourSchema).length(7),
})

export const deliveryZoneSchema = z.object({
  name: z.string().min(2, 'Nome deve ter pelo menos 2 caracteres'),
  neighborhoods: z.array(z.string()).min(1, 'Adicione pelo menos um bairro'),
  fee: z.number().min(0, 'Taxa não pode ser negativa'),
  estimatedMinutes: z.number().int().positive().default(40),
  isActive: z.boolean().default(true),
  sortOrder: z.number().int().min(0).default(0),
})

export const promotionSchema = z.object({
  title: z.string().min(2, 'Título deve ter pelo menos 2 caracteres'),
  description: z.string().optional(),
  image: z.string().optional(),
  discountType: z.enum(['PERCENTAGE', 'FIXED', 'FREE_DELIVERY']),
  discountValue: z.number().positive('Valor do desconto deve ser positivo'),
  minOrderValue: z.number().min(0).optional(),
  isActive: z.boolean().default(true),
  startDate: z.string().min(1, 'Data de início é obrigatória'),
  endDate: z.string().optional(),
})

export const couponSchema = z.object({
  code: z.string().min(3, 'Código deve ter pelo menos 3 caracteres').toUpperCase(),
  discountType: z.enum(['PERCENTAGE', 'FIXED', 'FREE_DELIVERY']),
  discountValue: z.number().positive('Valor do desconto deve ser positivo'),
  minOrderValue: z.number().min(0).optional(),
  maxUses: z.number().int().positive().optional(),
  isActive: z.boolean().default(true),
  startDate: z.string().min(1, 'Data de início é obrigatória'),
  endDate: z.string().optional(),
})

export type OperatingHourInput = z.infer<typeof operatingHourSchema>
export type StoreSettingsInput = z.infer<typeof storeSettingsSchema>
export type DeliveryZoneInput = z.infer<typeof deliveryZoneSchema>
export type PromotionInput = z.infer<typeof promotionSchema>
export type CouponInput = z.infer<typeof couponSchema>
