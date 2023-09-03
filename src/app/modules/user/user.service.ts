import { User } from '@prisma/client'
import bcrypt from 'bcrypt'
import { prisma } from '../../../app'
import config from '../../../config'
import { createToken } from '../../../helpers/jwtHelper'

type iType = User

const createData = async (payload: iType): Promise<Partial<iType>> => {
  const hashedPassword = await bcrypt.hash(payload.password, 12)

  const result = await prisma.user.create({
    data: {
      ...payload,
      password: hashedPassword
    }
  })

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { password, ...others } = result

  return others
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

const signIn = async (payload: Partial<iType>): Promise<string> => {
  const { email, password } = payload

  if (!email || !password) {
    throw new Error('Somthing is wrong.')
  }

  const result = await prisma.user.findUnique({
    where: {
      email
    },
    select: {
      id: true,
      email: true,
      role: true,
      password: true
    }
  })

  if (!result) {
    throw new Error('Somthing is wrong.')
  }

  const passwordMatch = await bcrypt.compare(password, result.password)

  if (!passwordMatch) {
    throw new Error('Somthing is wrong.')
  }

  const data = {
    userId: result.id,
    role: result.role
  }

  const token = createToken(data, config.jwtSecret!, '365d')

  return token
}

export const UserService = {
  createData,
  getAllData,
  getData,
  updateData,
  deleteData,
  signIn
}
