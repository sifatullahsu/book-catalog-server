import { User } from '@prisma/client'
import { prisma } from '../../../app'

type iType = User

const createData = async (payload: iType): Promise<iType> => {
  const result = await prisma.user.create({
    data: payload
  })

  return result
}

const getAllData = async (): Promise<iType[]> => {
  const result = await prisma.user.findMany({
    where: {}
  })

  return result
}

const getData = async (id: string): Promise<iType | null> => {
  const result = await prisma.user.findUnique({
    where: {
      id
    }
  })

  return result
}

const updateData = async (id: string, payload: Partial<iType>): Promise<iType> => {
  const result = await prisma.user.update({
    where: {
      id
    },
    data: payload
  })

  return result
}

const deleteData = async (id: string): Promise<iType> => {
  const result = await prisma.user.delete({
    where: {
      id
    }
  })

  return result
}

export const UserService = {
  createData,
  getAllData,
  getData,
  updateData,
  deleteData
}
