import { Router } from 'express'
import { validateRole } from '../../middlewares/validateRole'
import { UserController as controller } from './user.controller'

const router = Router()

router.get('/', validateRole(['admin']), controller.getAllData)
router.get('/:id', validateRole(['admin']), controller.getData)
router.patch('/:id', validateRole(['admin']), controller.updateData)
router.delete('/:id', validateRole(['admin']), controller.deleteData)

export const UserRouter = router
