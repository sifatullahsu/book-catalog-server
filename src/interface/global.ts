import { Role } from '@prisma/client'
import { JwtPayload } from 'jsonwebtoken'

export type iJwtUser = JwtPayload & {
  userId: string
  role: Role
}
