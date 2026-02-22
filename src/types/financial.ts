import type { PaymentMethod } from '@/generated/prisma/client'

export interface DailySummary {
  date: string
  totalOrders: number
  totalRevenue: number
  averageTicket: number
  paymentBreakdown: Record<PaymentMethod, number>
}

export interface FinancialReport {
  period: {
    start: string
    end: string
  }
  totalRevenue: number
  totalExpenses: number
  netProfit: number
  orderCount: number
  averageTicket: number
  paymentBreakdown: Record<PaymentMethod, number>
  expenseBreakdown: Record<string, number>
  dailyRevenue: { date: string; revenue: number }[]
}

export interface CashRegisterSummary {
  id: string
  status: 'ABERTO' | 'FECHADO'
  openingAmount: number
  currentBalance: number
  totalSales: number
  totalExpenses: number
  totalWithdrawals: number
  totalDeposits: number
  openedAt: string
  closedAt?: string
}
