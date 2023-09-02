import { PrismaClient } from '@prisma/client'
import cors from 'cors'
import express, { Application } from 'express'
import AppRouter from './app/routes'

const app: Application = express()
app.use(express.json())
app.use(cors())
app.use(express.urlencoded({ extended: true }))

app.use('/', AppRouter)

export default app

export const prisma = new PrismaClient({
  errorFormat: 'minimal'
})
