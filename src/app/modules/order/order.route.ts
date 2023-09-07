import { Router } from 'express'
import { validateRole } from '../../middlewares/validateRole'
import { OrderController as controller } from './order.controller'

const router = Router()

router.post('/create-order', validateRole(['customer']), controller.createData)
router.get('/', validateRole(['admin', 'customer']), controller.getAllData)
router.get('/:id', validateRole(['admin', 'customer']), controller.getData)

export const OrderRouter = router
