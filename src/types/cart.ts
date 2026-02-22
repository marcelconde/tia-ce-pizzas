import type { PizzaSize } from '@/generated/prisma/client'

export interface CartItem {
  id: string // unique cart item id (generated client-side)
  productId: string
  productName: string
  productImage?: string
  halfProductId?: string
  halfProductName?: string
  size: PizzaSize
  quantity: number
  unitPrice: number
  note?: string
}

export interface CartStore {
  items: CartItem[]
  couponCode: string | null
  couponDiscount: number
  note: string

  // Actions
  addItem: (item: Omit<CartItem, 'id'>) => void
  removeItem: (id: string) => void
  updateQuantity: (id: string, quantity: number) => void
  updateNote: (id: string, note: string) => void
  setOrderNote: (note: string) => void
  applyCoupon: (code: string, discount: number) => void
  removeCoupon: () => void
  clearCart: () => void

  // Derived
  itemCount: () => number
  subtotal: () => number
}
