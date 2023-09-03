import { Router } from 'express'
import { CategoryRouter } from '../modules/category/category.route'
import { UserRouter } from '../modules/user/user.route'

const AppRouter = Router()

AppRouter.use('/categories', CategoryRouter)
AppRouter.use('/users', UserRouter)

export default AppRouter
