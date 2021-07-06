import { useEffect } from 'react'
import deleteWatchlist from '../api/stock/deleteWatchlist'
import putAddWatchlist from '../api/stock/putAddWatchlist'

type Props = {
  isClicked: boolean
  id: number
}

export default function useAddWatchlist({ isClicked, id }: Props) {
  useEffect(() => {
    try {
      const watchlistApi = async () => {
        if (isClicked === true) await putAddWatchlist(id)
        else if (isClicked === false) await deleteWatchlist(id)
      }
      watchlistApi()
    } catch (error) {
      console.log(error)
    }
  }, [isClicked])
}
