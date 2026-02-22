import type { PaymentMethod, PaymentStatus } from '@/generated/prisma/client'

export interface PaymentInfo {
  method: PaymentMethod
  status: PaymentStatus
  amount: number
  pixQrCode?: string | null
  pixCopiaECola?: string | null
  changeFor?: number | null
  mercadoPagoId?: string | null
}
