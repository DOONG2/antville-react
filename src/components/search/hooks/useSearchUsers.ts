import debounce from 'lodash.debounce'
import { useCallback, useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import getSearchUser from '../../../lib/api/user/getSearchUser'
import searchSlice from '../../../reducers/Slices/search'

type Props = {
  query: string
}

export default function useSearchUsers({ query }: Props) {
  const [isLoading, setIsLoading] = useState(false)
  const { setUsers } = searchSlice.actions
  const dispatch = useDispatch()

  const searchApi = async (term: string) => {
    const result = await getSearchUser(term)
    dispatch(setUsers(result))
    setIsLoading(false)
  }

  const debouncedSearch = useCallback(
    debounce((term) => searchApi(term), 300),
    []
  )

  useEffect(() => {
    if (query === '') {
      dispatch(setUsers(null))
      return
    }
    setIsLoading(true)
    debouncedSearch(query)
  }, [query, debouncedSearch])

  return { isLoading }
}
