import type {
  Ingredient,
  InventoryTransaction,
  IngredientUnit,
} from '@/generated/prisma/client'

export type IngredientWithTransactions = Ingredient & {
  transactions: InventoryTransaction[]
}

export interface StockAlert {
  ingredientId: string
  ingredientName: string
  unit: IngredientUnit
  currentStock: number
  minimumStock: number
  percentageRemaining: number
}
