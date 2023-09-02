import { Category } from '@prisma/client'
import { prisma } from '../../../app'

type iType = Category

const createData = async (payload: iType): Promise<iType> => {
  const result = await prisma.category.create({
    data: payload
  })

  return result
}

const getAllData = async (): Promise<iType[]> => {
  const result = await prisma.category.findMany({
    where: {}
  })

  return result
}

const getData = async (id: string): Promise<iType | null> => {
  const result = await prisma.category.findUnique({
    where: {
      id
    }
  })

  return result
}

const updateData = async (id: string, payload: Partial<iType>): Promise<iType> => {
  const result = await prisma.category.update({
    where: {
      id
    },
    data: payload
  })

  return result
}

const deleteData = async (id: string): Promise<iType> => {
  const result = await prisma.category.delete({
    where: {
      id
    }
  })

  return result
}

export const CategoryService = {
  createData,
  getAllData,
  getData,
  updateData,
  deleteData
}
