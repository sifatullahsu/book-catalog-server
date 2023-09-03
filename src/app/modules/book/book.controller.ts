import { Request, Response } from 'express'
import httpStatus from 'http-status'
import apiResponse from '../../../shared/apiResponse'
import catchAsync from '../../../shared/catchAsync'
import { BookService as service } from './book.service'

const createData = catchAsync(async (req: Request, res: Response) => {
  const result = await service.createData(req.body)

  apiResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: `Book created successfully.`,
    data: result
  })
})

const getAllData = catchAsync(async (req: Request, res: Response) => {
  const result = await service.getAllData()

  apiResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: `Books fetched successfully.`,
    data: result
  })
})

const getData = catchAsync(async (req: Request, res: Response) => {
  const result = await service.getData(req.params.id)

  apiResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: `Book fetched successfully.`,
    data: result
  })
})

const updateData = catchAsync(async (req: Request, res: Response) => {
  const result = await service.updateData(req.params.id, req.body)

  apiResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: `Book updated successfully.`,
    data: result
  })
})

const deleteData = catchAsync(async (req: Request, res: Response) => {
  const result = await service.deleteData(req.params.id)

  apiResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: `Book deleted successfully.`,
    data: result
  })
})

const getAllDataByCategoryId = catchAsync(async (req: Request, res: Response) => {
  const result = await service.getAllDataByCategoryId(req.params.categoryId)

  apiResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: `Books with associated category data fetched successfully`,
    data: result
  })
})

export const BookController = {
  createData,
  getAllData,
  getData,
  updateData,
  deleteData,
  getAllDataByCategoryId
}
