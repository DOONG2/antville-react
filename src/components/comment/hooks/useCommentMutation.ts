import { InfiniteData, useMutation, useQueryClient } from 'react-query'
import { useParams } from 'react-router-dom'
import { Comment } from '../../../lib/api/comment/types'
import { gifDto } from '../../../lib/api/post/types'
import { comment_query_key, sub_comment_query_key } from '../../../lib/variable'
import useCommentFormData from './useCommentFormData'

type Props = {
  callback: (formData: FormData) => Promise<any>
}

interface onMutateProps {
  body: string
  postId: string
  gifDto?: gifDto
  uploadImage?: File
  parentCommentId?: number
}

export default function useCommentMutation({ callback }: Props) {
  const { id: commentId } = useParams<{ id: string }>()
  const queryClinet = useQueryClient()
  const { getFormData } = useCommentFormData()

  const mutation = useMutation(
    ({ body, postId, gifDto, uploadImage, parentCommentId }) => {
      const formData = getFormData({
        body,
        postId,
        gifDto,
        uploadImage,
        parentCommentId,
      })
      return callback(formData)
    },
    {
      onMutate: async (variables: onMutateProps) => {},
      onSuccess: (res, variables, context) => {
        const parentCommentId = variables.parentCommentId
        let key
        parentCommentId
          ? (key = [sub_comment_query_key, parentCommentId])
          : (key = [comment_query_key, Number(commentId)])
        const previousQuery =
          queryClinet.getQueryData<InfiniteData<Comment[]>>(key)
        if (previousQuery) {
          let data = {
            pages: parentCommentId
              ? previousQuery.pages.flat().concat(res)
              : [res].concat(previousQuery.pages.flat()),
            pageParams: previousQuery.pageParams,
          }

          queryClinet.setQueriesData(key, data)
        }
      },
    }
  )
  return { mutation }
}
