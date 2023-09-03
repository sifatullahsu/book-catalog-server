import { Request, Response } from 'express'
import httpStatus from 'http-status'
import apiResponse from '../../../shared/apiResponse'
import catchAsync from '../../../shared/catchAsync'
import { UserService as service } from '../user/user.service'

const signUp = catchAsync(async (req: Request, res: Response) => {
  const result = await service.createData(req.body)

  apiResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: `User created successfully!`,
    data: result
  })
})

const signIn = catchAsync(async (req: Request, res: Response) => {
  const result = await service.signIn(req.body)

  apiResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: `User signin successfully!`,
    token: result
  })
})

export const AuthController = {
  signUp,
  signIn
}
