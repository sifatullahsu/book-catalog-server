import { Order, OrderedBook, Prisma } from '@prisma/client'
import httpStatus from 'http-status'
import { prisma } from '../../../app'
import ApiError from '../../../errors/apiError'
import { iJwtUser } from '../../../interface/global'

type iType = Order

const createData = async (
  payload: { orderedBooks: OrderedBook[] },
  user: iJwtUser
): Promise<iType | null> => {
  const result = await prisma.$transaction(async session => {
    const order = await session.order.create({
      data: { userId: user.userId }
    })

    const orderItems = await session.orderedBook.createMany({
      data: payload.orderedBooks.map((item: OrderedBook) => ({ ...item, orderId: order.id }))
    })

    if (!orderItems.count) throw new ApiError(httpStatus.BAD_REQUEST, 'Items not created.')

    const result = await session.order.findUnique({
      where: {
        id: order.id
      },
      include: {
        orderedBooks: {
          select: {
            bookId: true,
            quantity: true
          }
        }
      }
    })

    return result
  })

  return result
}

const getAllData = async (user: iJwtUser): Promise<iType[]> => {
  const where: Prisma.OrderWhereInput = user.role === 'admin' ? {} : { userId: user.userId }

  const result = await prisma.order.findMany({
    where,
    include: {
      orderedBooks: {
        select: {
          bookId: true,
          quantity: true
        }
      }
    }
  })

  return result
}

const getData = async (id: string, user: iJwtUser): Promise<iType | null> => {
  const result = await prisma.order.findUnique({
    where: {
      id
    },
    include: {
      orderedBooks: {
        select: {
          bookId: true,
          quantity: true
        }
      }
    }
  })

  if (user.role === 'customer' && user.userId !== result?.userId) {
    throw new ApiError(httpStatus.UNAUTHORIZED, 'Unauthorized access.')
  }

  return result
}

export const OrderService = {
  createData,
  getAllData,
  getData
}
