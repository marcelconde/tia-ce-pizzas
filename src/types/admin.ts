export interface DashboardStats {
  todayOrders: number
  todayRevenue: number
  averageTicket: number
  pendingOrders: number
  lowStockCount: number
  activeDrivers: number
}

export interface PopularFlavor {
  productId: string
  productName: string
  orderCount: number
  revenue: number
}

export interface PeakHour {
  hour: number
  orderCount: number
  dayOfWeek?: number
}

export interface DeliveryStats {
  averageTime: number // minutes
  totalDeliveries: number
  onTimePercentage: number
}
