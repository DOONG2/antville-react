import { useQuery } from 'react-query'
import getWatchList from '../../api/stock/getWatchList'

const useWatchListQuery = () => {
  const { isLoading, data, error, isFetching } = useQuery('watchList', () =>
    getWatchList()
  )

  if (data && data.stocks.length < 1) {
    return { isLoading, data: null, error, isFetching }
  }

  return { isLoading, data, error, isFetching }
}

export default useWatchListQuery
