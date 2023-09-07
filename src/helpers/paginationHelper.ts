type iOrder = 'desc' | 'asc'

export type iPagination = {
  page?: number
  size?: number
  sortBy?: string
  sortOrder?: iOrder
}

type iPaginationReturn = {
  page: number
  size: number
  skip: number
  sortBy: string
  sortOrder: iOrder
}

export const paginationFields: string[] = ['page', 'size', 'sortBy', 'sortOrder']

const createPagination = (options: iPagination): iPaginationReturn => {
  const page = Number(options.page || 1)
  const size = Number(options.size || 10)
  const skip = (page - 1) * size

  const sortBy = options.sortBy || 'createdAt'
  const sortOrder = options.sortOrder || 'desc'

  return {
    page,
    size,
    skip,
    sortBy,
    sortOrder
  }
}

export default createPagination
