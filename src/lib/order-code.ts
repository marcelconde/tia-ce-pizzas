import { prisma } from '@/lib/prisma'

/**
 * Generates a sequential order code in the format "TIA-YYYYMMDD-XXX".
 *
 * Queries the database for the last order of the given date and increments
 * the sequence number. If no orders exist for the date, starts at 001.
 *
 * Example: "TIA-20260220-001", "TIA-20260220-002", etc.
 */
export async function generateOrderCode(date?: Date): Promise<string> {
  const now = date ?? new Date()
  const year = now.getFullYear()
  const month = String(now.getMonth() + 1).padStart(2, '0')
  const day = String(now.getDate()).padStart(2, '0')
  const dateStr = `${year}${month}${day}`
  const prefix = `TIA-${dateStr}-`

  // Find the last order code for today
  const lastOrder = await prisma.order.findFirst({
    where: {
      code: {
        startsWith: prefix,
      },
    },
    orderBy: {
      code: 'desc',
    },
    select: {
      code: true,
    },
  })

  let nextSequence = 1

  if (lastOrder) {
    // Extract the sequence number from the last order code
    const lastSequence = parseInt(lastOrder.code.split('-').pop() ?? '0', 10)
    nextSequence = lastSequence + 1
  }

  const sequenceStr = String(nextSequence).padStart(3, '0')

  return `${prefix}${sequenceStr}`
}
