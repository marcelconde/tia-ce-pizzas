import type {
  Order,
  OrderItem,
  OrderStatusHistory,
  Payment,
  Product,
  ProductImage,
  User,
  GuestCustomer,
  Address,
  Employee,
  OrderStatus,
} from '@/generated/prisma/client'

export type OrderWithRelations = Order & {
  items: (OrderItem & {
    product: Product & { images: ProductImage[] }
    halfProduct?: (Product & { images: ProductImage[] }) | null
  })[]
  statusHistory: OrderStatusHistory[]
  payment: Payment | null
  user: User | null
  guestCustomer: GuestCustomer | null
  address: Address | null
  deliveryDriver: (Employee & { user: User }) | null
}

export type OrderItemWithProducts = OrderItem & {
  product: Product & { images: ProductImage[] }
  halfProduct?: (Product & { images: ProductImage[] }) | null
}

export interface OrderSummary {
  id: string
  code: string
  customerName: string
  customerPhone: string
  status: OrderStatus
  total: number
  itemCount: number
  createdAt: string
  orderType: string
}
