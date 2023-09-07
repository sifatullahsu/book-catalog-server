import { Role } from '@prisma/client'
import { JwtPayload } from 'jsonwebtoken'

export type iJwtUser = JwtPayload & {
  userId: string
  role: Role
}

export type iTypeWithPagination<T> = {
  meta: {
    page: number
    size: number
    total: number
    totalPage: number
  }
  data: T
}
