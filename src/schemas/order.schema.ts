import { z } from 'zod'

export const orderItemSchema = z.object({
  productId: z.string().min(1),
  halfProductId: z.string().optional(),
  size: z.enum(['PEQUENA', 'MEDIA', 'GRANDE', 'GIGANTE']),
  quantity: z.number().int().positive(),
  note: z.string().optional(),
})

export const orderStatusUpdateSchema = z.object({
  status: z.enum([
    'RECEBIDO',
    'CONFIRMADO',
    'PREPARANDO',
    'NO_FORNO',
    'SAIU_ENTREGA',
    'ENTREGUE',
    'CANCELADO',
  ]),
  note: z.string().optional(),
  deliveryDriverId: z.string().optional(),
})

export type OrderItemInput = z.infer<typeof orderItemSchema>
export type OrderStatusUpdateInput = z.infer<typeof orderStatusUpdateSchema>
