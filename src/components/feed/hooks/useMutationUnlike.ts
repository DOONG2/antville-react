import { InfiniteData, useMutation, useQueryClient } from 'react-query'
import { useParams } from 'react-router-dom'
import { Comment } from '../../../lib/api/comment/types'
import { Post } from '../../../lib/api/types'
import { useRootState } from '../../common/hooks/useRootState'
import useGetRoutePath from './useGetPath'

type Props = {
  callback: () => Promise<any>
  isPost?: boolean
}

export default function useMutationLike({ callback, isPost }: Props) {
  const queryClient = useQueryClient()
  const user = useRootState((state) => state.user)
  const pathname = useGetRoutePath()
  const { id: commentKeyId } = useParams<{ id: string }>()

  const mutation = useMutation(callback, {
    onMutate: async (id: number) => {
      const key = isPost
        ? ['post', user!.id, { page: pathname }]
        : ['comment', Number(commentKeyId)]
      await queryClient.cancelQueries(key)
      if (isPost) {
        const previousQuery =
          queryClient.getQueryData<InfiniteData<Post[]>>(key)
        if (previousQuery) {
          const data = {
            pages: previousQuery.pages.flat(),
            pageParams: previousQuery.pageParams,
          }
          const findIndex = data.pages.findIndex((obj) => obj.id === id)
          const postCount = data.pages[findIndex].postCount
          data.pages[findIndex] = {
            ...data.pages[findIndex],
            isLikedSelf: false,
            postCount: { ...postCount, likeCount: postCount.likeCount - 1 },
          }
          queryClient.setQueriesData(key, data)
        }
      } else {
        const previousQuery =
          queryClient.getQueryData<InfiniteData<Comment[]>>(key)
        if (previousQuery) {
          const data = {
            pages: previousQuery.pages.flat(),
            pageParams: previousQuery.pageParams,
          }
          const findIndex = data.pages.findIndex((obj) => obj.id === id)
          const commentCount = data.pages[findIndex].commentCount
          data.pages[findIndex] = {
            ...data.pages[findIndex],
            isLikedSelf: false,
            commentCount: {
              ...commentCount,
              likeCount: commentCount.likeCount - 1,
            },
          }
          queryClient.setQueriesData(key, data)
        }
      }
    },
  })
  return { mutation }
}
