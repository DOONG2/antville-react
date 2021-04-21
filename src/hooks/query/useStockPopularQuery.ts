import { isError, useQuery } from 'react-query'
import getStockPopular from '../../api/stock/getStockPopular'

const useStockPopularQuery = () => {
  const { isLoading, error, data, isFetching } = useQuery('stockPopular', () =>
    getStockPopular()
  )

  return { isLoading, error, data, isFetching }
}

export default useStockPopularQuery
