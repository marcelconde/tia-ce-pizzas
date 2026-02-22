'use client'

import { useCartStore } from '@/stores/cartStore'

export function useCart() {
  const store = useCartStore()

  return {
    items: store.items,
    couponCode: store.couponCode,
    couponDiscount: store.couponDiscount,
    note: store.note,
    itemCount: store.itemCount(),
    subtotal: store.subtotal(),

    addItem: store.addItem,
    removeItem: store.removeItem,
    updateQuantity: store.updateQuantity,
    updateNote: store.updateNote,
    setOrderNote: store.setOrderNote,
    applyCoupon: store.applyCoupon,
    removeCoupon: store.removeCoupon,
    clearCart: store.clearCart,
  }
}
