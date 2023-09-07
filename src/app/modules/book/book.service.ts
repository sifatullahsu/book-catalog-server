/* eslint-disable @typescript-eslint/no-explicit-any */
import { Book, Prisma } from '@prisma/client'
import { prisma } from '../../../app'
import createPagination, { iPagination } from '../../../helpers/paginationHelper'
import { iTypeWithPagination } from '../../../interface/global'
import { bookSearchAbleFields } from './book.constant'
import { iBookFilters } from './book.interface'

type iType = Book

const createData = async (payload: iType): Promise<iType> => {
  const result = await prisma.book.create({
    data: payload,
    include: {
      categories: true
    }
  })

  return result
}

const getAllData = async (
  filters: Partial<iBookFilters>,
  pagination: Partial<iPagination>
): Promise<iTypeWithPagination<iType[]>> => {
  const { page, size, skip, sortBy, sortOrder } = createPagination(pagination)
  const { search, ...others } = filters

  const keys = Object.keys(others)
  const andConditions = []

  if (search) {
    andConditions.push({
      OR: bookSearchAbleFields.map(field => ({
        [field]: {
          contains: search,
          mode: 'insensitive'
        }
      }))
    })
  }

  if (keys.length > 0) {
    andConditions.push({
      AND: keys.map(key => {
        if (key === 'minPrice') {
          return {
            price: { gte: parseFloat((others as any)[key]) }
          }
        } else if (key === 'maxPrice') {
          return {
            price: { lte: parseFloat((others as any)[key]) }
          }
        } else if (key === 'category') {
          return {
            categoryId: { equals: (others as any)[key] }
          }
        } else {
          return {
            [key]: { equals: (others as any)[key] }
          }
        }
      })
    })
  }

  const whereConditions: Prisma.BookWhereInput = andConditions.length > 0 ? { AND: andConditions } : {}

  const result = await prisma.book.findMany({
    where: whereConditions,
    orderBy: { [sortBy]: sortOrder },
    take: size,
    skip
  })

  const total = await prisma.book.count({
    where: whereConditions
  })

  return {
    meta: {
      page,
      size,
      total,
      totalPage: Math.ceil(total / size)
    },
    data: result
  }
}

const getData = async (id: string): Promise<iType | null> => {
  const result = await prisma.book.findUnique({
    where: {
      id
    }
  })

  return result
}

const updateData = async (id: string, payload: Partial<iType>): Promise<iType> => {
  const result = await prisma.book.update({
    where: {
      id
    },
    data: payload
  })

  return result
}

const deleteData = async (id: string): Promise<iType> => {
  const result = await prisma.book.delete({
    where: {
      id
    }
  })

  return result
}

const getAllDataByCategoryId = async (
  categoryId: string,
  pagination: Partial<iPagination>
): Promise<iTypeWithPagination<iType[]>> => {
  const { page, size, skip, sortBy, sortOrder } = createPagination(pagination)
  const query = {
    categoryId: {
      equals: categoryId
    }
  }

  const result = await prisma.book.findMany({
    where: query,
    orderBy: { [sortBy]: sortOrder },
    take: size,
    skip
  })

  const total = await prisma.book.count({
    where: query
  })

  return {
    meta: {
      page,
      size,
      total,
      totalPage: Math.ceil(total / size)
    },
    data: result
  }
}

export const BookService = {
  createData,
  getAllData,
  getData,
  updateData,
  deleteData,
  getAllDataByCategoryId
}
