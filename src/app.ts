import { PrismaClient } from '@prisma/client'
import cors from 'cors'
import express, { Application, NextFunction, Request, Response } from 'express'
import httpStatus from 'http-status'
import errorHandler from './app/middlewares/errorHandler'
import AppRouter from './app/routes'

const app: Application = express()
app.use(express.json())
app.use(cors())
app.use(express.urlencoded({ extended: true }))

// Global routes handler
app.use('/api/v1', AppRouter)

// Global error handler
app.use(errorHandler)

// Not found handler
app.use((req: Request, res: Response, next: NextFunction) => {
  res.status(httpStatus.NOT_FOUND).json({
    success: false,
    message: 'Not Found',
    errorMessages: [
      {
        path: req.originalUrl,
        message: 'API Not Found'
      }
    ]
  })
  next()
})

export default app

export const prisma = new PrismaClient({
  errorFormat: 'minimal'
})
