import { Router } from 'express'
import { validateRole } from '../../middlewares/validateRole'
import { BookController as controller } from './book.controller'

const router = Router()

router.post('/create-book', validateRole(['admin']), controller.createData)
router.get('/', controller.getAllData)
router.get('/:id', controller.getData)
router.patch('/:id', validateRole(['admin']), controller.updateData)
router.delete('/:id', validateRole(['admin']), controller.deleteData)

router.get('/:categoryId/category', controller.getAllDataByCategoryId)

export const BookRouter = router
