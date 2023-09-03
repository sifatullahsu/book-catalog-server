/* eslint-disable @typescript-eslint/no-unused-vars */
import { ErrorRequestHandler, NextFunction, Request, Response } from 'express'

const errorHandler: ErrorRequestHandler = (error, req: Request, res: Response, next: NextFunction) => {
  const statusCode = 500

  console.log(error)

  res.status(statusCode).json({
    success: false,
    statusCode,
    message: 'Something went wrong !',
    error: error.message
  })
}

export default errorHandler
