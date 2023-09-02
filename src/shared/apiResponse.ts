import { Response } from 'express'

type iApiReponse<T> = {
  success: boolean
  statusCode: number
  message: string
  meta?: {
    page?: number
    size?: number
    total?: number
    totalPage?: number
  }
  data: T | null
}

const apiResponse = <T>(res: Response, data: iApiReponse<T>): void => {
  const responseData: iApiReponse<T> = {
    success: data.success,
    statusCode: data.statusCode,
    message: data.message,
    data: data.data,
    meta: data?.meta && {
      page: data?.meta?.page,
      size: data?.meta?.size,
      total: data?.meta?.total,
      totalPage: data?.meta?.totalPage
    }
  }

  res.status(data.statusCode).json(responseData)
}

export default apiResponse
