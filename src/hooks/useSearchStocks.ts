import debounce from 'lodash.debounce'
import { useCallback, useEffect, useState } from 'react'
import getSearchStocks from '../api/stock/getSearchStocks'
import { Stock } from '../api/types'

type Props = {
  query: string
  setSearchedStocks(value: Stock[] | undefined): void
}

export default function useSearchStocks({ query, setSearchedStocks }: Props) {
  const [isLoading, setIsLoading] = useState(false)
  const searchApi = async (term: string) => {
    const result = await getSearchStocks(term)
    setSearchedStocks(result)
    setIsLoading(false)
  }

  const debouncedSearch = useCallback(
    debounce((term) => searchApi(term), 300),
    []
  )

  useEffect(() => {
    if (query === '') return setSearchedStocks(undefined)
    setIsLoading(true)
    debouncedSearch(query)
  }, [query, debouncedSearch])

  return { isLoading }
}
