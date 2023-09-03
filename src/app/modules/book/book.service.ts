import { Book } from '@prisma/client'
import { prisma } from '../../../app'

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

const getAllData = async (): Promise<iType[]> => {
  const result = await prisma.book.findMany({
    where: {}
  })

  return result
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

const getAllDataByCategoryId = async (categoryId: string): Promise<iType[]> => {
  const result = await prisma.book.findMany({
    where: {
      categoryId: {
        equals: categoryId
      }
    }
  })

  return result
}

export const BookService = {
  createData,
  getAllData,
  getData,
  updateData,
  deleteData,
  getAllDataByCategoryId
}
