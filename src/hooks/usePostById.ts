import { useEffect, useState } from 'react'
import getPostById from '../api/post/getPostById'
import { Post } from '../api/types'

export default function usePostById(id: string) {
  const [post, setPost] = useState<Post>()
  useEffect(() => {
    try {
      const getPostByIdApi = async () => {
        const result = await getPostById(id)
        setPost(result)
      }
      getPostByIdApi()
    } catch (error) {
      console.log(error)
    }
  }, [id])

  return post
}
