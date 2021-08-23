import { InfiniteData, useMutation, useQueryClient } from 'react-query'
import patchNotification from '../../../lib/api/notice/patchNotification'
import { NoticeObject } from '../../../lib/api/notice/types'
import { useRootState } from '../../common/hooks/useRootState'

type Props = {
  id: number
}

export default function usePatchNotice({ id }: Props) {
  const queryClient = useQueryClient()
  const user = useRootState((state) => state.user)
  const patchNoticeApi = async () => {
    try {
      await patchNotification(id)
    } catch (error) {
      console.log(error)
    }
  }

  const mutation = useMutation(patchNoticeApi, {
    onMutate: async () => {
      const key = ['notification', user!.id]
      await queryClient.cancelQueries(key)
      const previousQuery =
        queryClient.getQueryData<InfiniteData<NoticeObject[]>>(key)
      if (previousQuery) {
        const data = {
          pages: previousQuery.pages.flat(),
          pageParams: previousQuery.pageParams,
        }
        const findIndex = data.pages.findIndex((obj) => obj.id === id)
        data.pages[findIndex] = { ...data.pages[findIndex], isChecked: true }
        queryClient.setQueriesData(key, data)
      }
    },
  })

  return { mutation }
}
