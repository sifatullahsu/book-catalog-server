import { Request, Response } from 'express'
import httpStatus from 'http-status'
import apiResponse from '../../../shared/apiResponse'
import catchAsync from '../../../shared/catchAsync'
import { UserService as service } from './user.service'

const createData = catchAsync(async (req: Request, res: Response) => {
  const result = await service.createData(req.body)

  apiResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: `User created successfully.`,
    data: result
  })
})

const getAllData = catchAsync(async (req: Request, res: Response) => {
  const result = await service.getAllData()

  apiResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: `Users fetched successfully.`,
    data: result
  })
})

const getData = catchAsync(async (req: Request, res: Response) => {
  const result = await service.getData(req.params.id)

  apiResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: `User fetched successfully.`,
    data: result
  })
})

const updateData = catchAsync(async (req: Request, res: Response) => {
  const result = await service.updateData(req.params.id, req.body)

  apiResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: `User updated successfully.`,
    data: result
  })
})

const deleteData = catchAsync(async (req: Request, res: Response) => {
  const result = await service.deleteData(req.params.id)

  apiResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: `User deleted successfully.`,
    data: result
  })
})

const getProfile = catchAsync(async (req: Request, res: Response) => {
  const result = await service.getData(req?.user?.userId as string)

  apiResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: `Profile fetched successfully.`,
    data: result
  })
})

export const UserController = {
  createData,
  getAllData,
  getData,
  updateData,
  deleteData,
  getProfile
}
