import { Router } from 'express'
import { BookRouter } from '../modules/book/book.route'
import { CategoryRouter } from '../modules/category/category.route'
import { UserRouter } from '../modules/user/user.route'

const AppRouter = Router()

AppRouter.use('/categories', CategoryRouter)
AppRouter.use('/users', UserRouter)
AppRouter.use('/books', BookRouter)

export default AppRouter
