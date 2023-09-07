import { iJwtUser } from './global'

declare global {
  namespace Express {
    // eslint-disable-next-line @typescript-eslint/consistent-type-definitions
    interface Request {
      user: iJwtUser | null
    }
  }
}
