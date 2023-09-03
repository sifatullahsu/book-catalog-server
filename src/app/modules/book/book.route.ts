import { Router } from 'express'
import { BookController as controller } from './book.controller'

const router = Router()

router.post('/create-book', controller.createData)
router.get('/', controller.getAllData)
router.get('/:id', controller.getData)
router.patch('/:id', controller.updateData)
router.delete('/:id', controller.deleteData)

router.get('/:categoryId/category', controller.getAllDataByCategoryId)

export const BookRouter = router
