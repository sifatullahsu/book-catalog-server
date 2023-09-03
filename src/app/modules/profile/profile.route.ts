import { Router } from 'express'
import { validateRole } from '../../middlewares/validateRole'
import { UserController as controller } from '../user/user.controller'

const router = Router()

router.get('/', validateRole(['admin', 'customer']), controller.getProfile)

export const ProfileRouter = router
