import { InfiniteData, useMutation, useQueryClient } from 'react-query'
import putLikePost from '../../../lib/api/post/putLikePost'
import { Post } from '../../../lib/api/types'
import { useRootState } from '../../common/hooks/useRootState'

export default function useMutationLike() {
  const queryClient = useQueryClient()
  const user = useRootState((state) => state.user)
  const userId = user!.id
  return useMutation((postId: number) => putLikePost(postId), {
    onSuccess: (data, variables) => {
      queryClient.setQueriesData(['post', userId, { page: 'all' }], (old) => {
        const { pages } = old as InfiniteData<Post>
        let result = pages.flat()
        const idx = result.findIndex((value) => value.id === variables)
        result[idx].isLikedSelf = true
      })
    },
  })
}
