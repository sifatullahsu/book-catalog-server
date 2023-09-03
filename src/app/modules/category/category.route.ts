import { Router } from 'express'
import { validateRole } from '../../middlewares/validateRole'
import { CategoryController as controller } from './category.controller'

const router = Router()

router.post('/create-category', validateRole(['admin']), controller.createData)
router.get('/', controller.getAllData)
router.get('/:id', controller.getData)
router.patch('/:id', validateRole(['admin']), controller.updateData)
router.delete('/:id', validateRole(['admin']), controller.deleteData)

export const CategoryRouter = router
