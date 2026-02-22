'use client'

import { useState, useEffect, useCallback } from 'react'
import { io, Socket } from 'socket.io-client'
import type { OrderStatus } from '@/generated/prisma/client'

interface OrderStatusUpdate {
  orderId: string
  status: OrderStatus
  timestamp: string
}

interface UseOrderTrackingReturn {
  currentStatus: OrderStatus | null
  statusHistory: OrderStatusUpdate[]
  connected: boolean
}

let socket: Socket | null = null

function getSocket(): Socket {
  if (!socket) {
    socket = io(process.env.NEXT_PUBLIC_APP_URL || 'http://localhost:3000', {
      path: '/api/socketio',
      transports: ['websocket', 'polling'],
    })
  }
  return socket
}

export function useOrderTracking(orderId: string | null): UseOrderTrackingReturn {
  const [currentStatus, setCurrentStatus] = useState<OrderStatus | null>(null)
  const [statusHistory, setStatusHistory] = useState<OrderStatusUpdate[]>([])
  const [connected, setConnected] = useState(false)

  const handleStatusUpdate = useCallback((data: OrderStatusUpdate) => {
    setCurrentStatus(data.status)
    setStatusHistory((prev) => [...prev, data])
  }, [])

  useEffect(() => {
    if (!orderId) return

    const s = getSocket()

    s.on('connect', () => setConnected(true))
    s.on('disconnect', () => setConnected(false))

    // Subscribe to order room
    s.emit('order:subscribe', orderId)

    // Listen for status updates
    s.on('order:status-updated', handleStatusUpdate)

    return () => {
      s.emit('order:unsubscribe', orderId)
      s.off('order:status-updated', handleStatusUpdate)
    }
  }, [orderId, handleStatusUpdate])

  return { currentStatus, statusHistory, connected }
}
