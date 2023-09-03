import { Request, Response } from 'express'
import httpStatus from 'http-status'
import apiResponse from '../../../shared/apiResponse'
import catchAsync from '../../../shared/catchAsync'
import { CategoryService as service } from './category.service'

const module = 'Category'

const createData = catchAsync(async (req: Request, res: Response) => {
  const result = await service.createData(req.body)

  apiResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: `${module} created successfully.`,
    data: result
  })
})

const getAllData = catchAsync(async (req: Request, res: Response) => {
  const result = await service.getAllData()

  apiResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: `${module} fetch successfully.`,
    data: result
  })
})

const getData = catchAsync(async (req: Request, res: Response) => {
  const result = await service.getData(req.params.id)

  apiResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: `${module} fetch successfully.`,
    data: result
  })
})

const updateData = catchAsync(async (req: Request, res: Response) => {
  const result = await service.updateData(req.params.id, req.body)

  apiResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: `${module} update successfully.`,
    data: result
  })
})

const deleteData = catchAsync(async (req: Request, res: Response) => {
  const result = await service.deleteData(req.params.id)

  apiResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: `${module} delete successfully.`,
    data: result
  })
})

export const CategoryController = {
  createData,
  getAllData,
  getData,
  updateData,
  deleteData
}
