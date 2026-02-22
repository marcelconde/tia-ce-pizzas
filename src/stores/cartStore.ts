'use client'

import { create } from 'zustand'
import { persist } from 'zustand/middleware'
import type { CartItem, CartStore } from '@/types/cart'

export const useCartStore = create<CartStore>()(
  persist(
    (set, get) => ({
      items: [],
      couponCode: null,
      couponDiscount: 0,
      note: '',

      addItem: (item) => {
        const id = `${item.productId}-${item.halfProductId || 'full'}-${item.size}-${Date.now()}`
        set((state) => {
          // Check if same item already exists (same product, half, size, no special note)
          const existing = state.items.find(
            (i) =>
              i.productId === item.productId &&
              i.halfProductId === item.halfProductId &&
              i.size === item.size &&
              !i.note &&
              !item.note
          )

          if (existing) {
            return {
              items: state.items.map((i) =>
                i.id === existing.id
                  ? { ...i, quantity: i.quantity + item.quantity }
                  : i
              ),
            }
          }

          return { items: [...state.items, { ...item, id }] }
        })
      },

      removeItem: (id) => {
        set((state) => ({
          items: state.items.filter((item) => item.id !== id),
        }))
      },

      updateQuantity: (id, quantity) => {
        if (quantity < 1) {
          get().removeItem(id)
          return
        }
        set((state) => ({
          items: state.items.map((item) =>
            item.id === id ? { ...item, quantity } : item
          ),
        }))
      },

      updateNote: (id, note) => {
        set((state) => ({
          items: state.items.map((item) =>
            item.id === id ? { ...item, note } : item
          ),
        }))
      },

      setOrderNote: (note) => set({ note }),

      applyCoupon: (code, discount) => {
        set({ couponCode: code, couponDiscount: discount })
      },

      removeCoupon: () => {
        set({ couponCode: null, couponDiscount: 0 })
      },

      clearCart: () => {
        set({
          items: [],
          couponCode: null,
          couponDiscount: 0,
          note: '',
        })
      },

      itemCount: () => {
        return get().items.reduce((total, item) => total + item.quantity, 0)
      },

      subtotal: () => {
        return get().items.reduce(
          (total, item) => total + item.unitPrice * item.quantity,
          0
        )
      },
    }),
    {
      name: 'tia-ce-cart',
    }
  )
)
