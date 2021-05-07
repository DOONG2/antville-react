import { useQuery } from 'react-query'
import getWatchList from '../../api/stock/getWatchList'

const useWatchListQuery = () => {
  const { isLoading, data, error, isFetching } = useQuery('watchList', () =>
    getWatchList()
  )
  console.log(data?.stocks.length)

  if (data && data.stocks.length < 1) {
    return { isLoading, data: null, error, isFetching }
  }

  return { isLoading, data, error, isFetching }
}

export default useWatchListQuery
