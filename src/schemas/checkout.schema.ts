import { z } from 'zod'

export const customerInfoSchema = z.object({
  name: z.string().min(2, 'Nome deve ter pelo menos 2 caracteres'),
  phone: z.string().min(10, 'Telefone inválido').max(15),
  email: z.string().email('Email inválido').optional().or(z.literal('')),
})

export const addressSchema = z.object({
  cep: z.string().length(8, 'CEP deve ter 8 dígitos'),
  logradouro: z.string().min(3, 'Logradouro é obrigatório'),
  numero: z.string().min(1, 'Número é obrigatório'),
  complemento: z.string().optional(),
  bairro: z.string().min(2, 'Bairro é obrigatório'),
  cidade: z.string().min(2, 'Cidade é obrigatória'),
  uf: z.string().length(2, 'UF deve ter 2 caracteres'),
  referencia: z.string().optional(),
})

export const paymentSchema = z.discriminatedUnion('method', [
  z.object({
    method: z.literal('PIX_ONLINE'),
  }),
  z.object({
    method: z.literal('CARTAO_CREDITO'),
    cardToken: z.string().min(1, 'Token do cartão é obrigatório'),
    installments: z.number().int().min(1).max(12).default(1),
  }),
  z.object({
    method: z.literal('DINHEIRO'),
    changeFor: z.number().positive('Valor para troco deve ser positivo').optional(),
  }),
  z.object({
    method: z.literal('CARTAO_ENTREGA'),
  }),
  z.object({
    method: z.literal('PIX_ENTREGA'),
  }),
])

export const checkoutSchema = z.object({
  customer: customerInfoSchema,
  address: addressSchema.optional(),
  orderType: z.enum(['DELIVERY', 'RETIRADA']),
  payment: paymentSchema,
  items: z.array(z.object({
    productId: z.string().min(1),
    halfProductId: z.string().optional(),
    size: z.enum(['PEQUENA', 'MEDIA', 'GRANDE', 'GIGANTE']),
    quantity: z.number().int().positive(),
    note: z.string().optional(),
  })).min(1, 'Adicione pelo menos um item ao carrinho'),
  couponCode: z.string().optional(),
  note: z.string().optional(),
})

export type CustomerInfoInput = z.infer<typeof customerInfoSchema>
export type AddressInput = z.infer<typeof addressSchema>
export type PaymentInput = z.infer<typeof paymentSchema>
export type CheckoutInput = z.infer<typeof checkoutSchema>
