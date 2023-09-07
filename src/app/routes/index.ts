import { Router } from 'express'
import { AuthRouter } from '../modules/auth/auth.route'
import { BookRouter } from '../modules/book/book.route'
import { CategoryRouter } from '../modules/category/category.route'
import { OrderRouter } from '../modules/order/order.route'
import { ProfileRouter } from '../modules/profile/profile.route'
import { UserRouter } from '../modules/user/user.route'

const AppRouter = Router()

AppRouter.use('/categories', CategoryRouter)
AppRouter.use('/users', UserRouter)
AppRouter.use('/books', BookRouter)
AppRouter.use('/auth', AuthRouter)
AppRouter.use('/profile', ProfileRouter)
AppRouter.use('/orders', OrderRouter)

export default AppRouter
