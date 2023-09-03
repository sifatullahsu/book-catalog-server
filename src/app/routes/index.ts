import { Router } from 'express'
import { CategoryRouter } from '../modules/category/category.route'

const AppRouter = Router()

AppRouter.use('/categories', CategoryRouter)

export default AppRouter
