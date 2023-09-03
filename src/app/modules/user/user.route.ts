import { Router } from 'express'
import { UserController as controller } from './user.controller'

const router = Router()

router.get('/', controller.getAllData)
router.get('/:id', controller.getData)
router.patch('/:id', controller.updateData)
router.delete('/:id', controller.deleteData)

export const UserRouter = router
