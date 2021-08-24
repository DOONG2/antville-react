import { InfiniteData, useMutation, useQueryClient } from 'react-query'
import { gifDto } from '../../../lib/api/post/types'
import { Post } from '../../../lib/api/types'
import { activated_all, post_query_key } from '../../../lib/variable'
import { useRootState } from '../../common/hooks/useRootState'
import usePostFormData from './usePostFormData'

type Props = {
  callback: (formData: FormData) => Promise<any>
}

interface onMutateProps {
  body: string
  sentiment?: string
  gifDto?: gifDto
  uploadImage?: File
}

export default function usePostMutation({ callback }: Props) {
  const user = useRootState((state) => state.user)
  const queryClinet = useQueryClient()
  const { getFormData } = usePostFormData()

  const mutation = useMutation(
    ({ body, gifDto, uploadImage, sentiment }) => {
      const formData = getFormData({
        body,
        sentiment,
        gifDto,
        uploadImage,
      })
      return callback(formData)
    },
    {
      onMutate: async (variables: onMutateProps) => {},
      onSuccess: (res, variables, context) => {
        const key = [post_query_key, user!.id, { page: activated_all }]
        const previousQuery =
          queryClinet.getQueryData<InfiniteData<Post[]>>(key)
        if (previousQuery) {
          let data = {
            pages: [res].concat(previousQuery.pages.flat()),
            pageParams: previousQuery.pageParams,
          }
          queryClinet.setQueriesData(key, data)
        }
      },
    }
  )
  return { mutation }
}
