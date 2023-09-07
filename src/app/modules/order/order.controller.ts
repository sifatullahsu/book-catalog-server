import { Request, Response } from 'express'
import httpStatus from 'http-status'
import apiResponse from '../../../shared/apiResponse'
import catchAsync from '../../../shared/catchAsync'
import { OrderService as service } from './order.service'

const createData = catchAsync(async (req: Request, res: Response) => {
  const result = await service.createData(req.body, req.user!)

  apiResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: `Order created successfully.`,
    data: result
  })
})

const getAllData = catchAsync(async (req: Request, res: Response) => {
  const result = await service.getAllData(req.user!)

  apiResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: `Orders fetched successfully.`,
    data: result
  })
})

const getData = catchAsync(async (req: Request, res: Response) => {
  const result = await service.getData(req.params.id, req.user!)

  apiResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: `Order fetched successfully.`,
    data: result
  })
})

export const OrderController = {
  createData,
  getAllData,
  getData
}
