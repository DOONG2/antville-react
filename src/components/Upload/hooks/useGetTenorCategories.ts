import { useEffect, useState } from 'react'
import getCategories from '../../../lib/api/tenor/getCategories'
import { getCategoriesResponse } from '../../../lib/api/tenor/types'
import { useRootState } from '../../common/hooks/useRootState'

export default function useGetTenorCategories() {
  const { isOpenGifForm } = useRootState((state) => state.view)
  const [categorys, setCategorys] = useState<getCategoriesResponse>()

  useEffect(() => {
    if (isOpenGifForm) {
      const callApi = async () => {
        const data = await getCategories()
        setCategorys(data)
      }
      callApi()
    }
  }, [isOpenGifForm])

  return { categorys }
}
