import {
  ClipboardList,
  CheckCircle,
  ChefHat,
  Flame,
  Truck,
  PackageCheck,
  XCircle,
  type LucideIcon,
} from 'lucide-react'

import type {
  OrderStatus,
  PizzaSize,
  PaymentMethod,
  PaymentStatus,
  IngredientUnit,
  CategoryType,
} from '@/generated/prisma/client'

// ========================================
// ORDER STATUS CONFIG
// ========================================

export type OrderStatusConfig = {
  label: string
  color: string
  icon: LucideIcon
  next: OrderStatus | null
}

export const ORDER_STATUS_CONFIG: Record<OrderStatus, OrderStatusConfig> = {
  RECEBIDO: {
    label: 'Recebido',
    color: 'yellow',
    icon: ClipboardList,
    next: 'CONFIRMADO',
  },
  CONFIRMADO: {
    label: 'Confirmado',
    color: 'blue',
    icon: CheckCircle,
    next: 'PREPARANDO',
  },
  PREPARANDO: {
    label: 'Preparando',
    color: 'orange',
    icon: ChefHat,
    next: 'NO_FORNO',
  },
  NO_FORNO: {
    label: 'No Forno',
    color: 'red',
    icon: Flame,
    next: 'SAIU_ENTREGA',
  },
  SAIU_ENTREGA: {
    label: 'Saiu p/ Entrega',
    color: 'purple',
    icon: Truck,
    next: 'ENTREGUE',
  },
  ENTREGUE: {
    label: 'Entregue',
    color: 'green',
    icon: PackageCheck,
    next: null,
  },
  CANCELADO: {
    label: 'Cancelado',
    color: 'gray',
    icon: XCircle,
    next: null,
  },
}

// ========================================
// PIZZA SIZE LABELS
// ========================================

export const PIZZA_SIZE_LABELS: Record<PizzaSize, string> = {
  PEQUENA: 'Pequena',
  MEDIA: 'M\u00e9dia',
  GRANDE: 'Grande',
  GIGANTE: 'Gigante',
}

export const PIZZA_SIZE_SHORT: Record<PizzaSize, string> = {
  PEQUENA: 'P',
  MEDIA: 'M',
  GRANDE: 'G',
  GIGANTE: 'GG',
}

// ========================================
// PAYMENT LABELS
// ========================================

export const PAYMENT_METHOD_LABELS: Record<PaymentMethod, string> = {
  PIX_ONLINE: 'Pix Online',
  CARTAO_CREDITO: 'Cart\u00e3o de Cr\u00e9dito',
  CARTAO_DEBITO: 'Cart\u00e3o de D\u00e9bito',
  PIX_ENTREGA: 'Pix na Entrega',
  DINHEIRO: 'Dinheiro',
  CARTAO_ENTREGA: 'Cart\u00e3o na Entrega',
}

export const PAYMENT_STATUS_LABELS: Record<PaymentStatus, string> = {
  PENDENTE: 'Pendente',
  APROVADO: 'Aprovado',
  RECUSADO: 'Recusado',
  CANCELADO: 'Cancelado',
  REEMBOLSADO: 'Reembolsado',
  EM_ANALISE: 'Em An\u00e1lise',
}

// ========================================
// INGREDIENT UNIT LABELS
// ========================================

export const INGREDIENT_UNIT_LABELS: Record<IngredientUnit, string> = {
  GRAMAS: 'Gramas',
  QUILOGRAMAS: 'Quilogramas',
  MILILITROS: 'Mililitros',
  LITROS: 'Litros',
  UNIDADE: 'Unidade',
  PORCAO: 'Por\u00e7\u00e3o',
  FATIA: 'Fatia',
}

export const INGREDIENT_UNIT_SHORT: Record<IngredientUnit, string> = {
  GRAMAS: 'g',
  QUILOGRAMAS: 'kg',
  MILILITROS: 'ml',
  LITROS: 'L',
  UNIDADE: 'un',
  PORCAO: 'por\u00e7.',
  FATIA: 'fatia',
}

// ========================================
// CATEGORY TYPE LABELS
// ========================================

export const CATEGORY_TYPE_LABELS: Record<CategoryType, string> = {
  PIZZA: 'Pizza',
  BEVERAGE: 'Bebida',
  SIDE: 'Acompanhamento',
  DESSERT: 'Sobremesa',
}

// ========================================
// EXPENSE CATEGORIES
// ========================================

export const EXPENSE_CATEGORIES = [
  'Ingredientes',
  'Embalagens',
  'G\u00e1s',
  'Energia El\u00e9trica',
  '\u00c1gua',
  'Aluguel',
  'Sal\u00e1rios',
  'Manuten\u00e7\u00e3o',
  'Marketing',
  'Impostos',
  'Combust\u00edvel',
  'Equipamentos',
  'Limpeza',
  'Outros',
] as const

// ========================================
// APP
// ========================================

export const APP_NAME = 'Tia C\u00ea Pizzas'
