import { Router } from 'express'
import { AuthController as controller } from './auth.controller'

const router = Router()

router.post('/signup', controller.signUp)
router.post('/signin', controller.signIn)

export const AuthRouter = router
