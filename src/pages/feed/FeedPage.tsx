import React from 'react'
import { useParams } from 'react-router-dom'
import MainTemplate from '../../components/main/MainTemPlate'
import usePostById from './hooks/usePostById'
import FeedDetailPage from './FeedDetailPage'
import FeedDetailNotFound from './FeedDetailNotFound'

export default function FeedPage() {
  const { id } = useParams<{ id: string }>()
  const { post, isLoading } = usePostById(id)

  return (
    <MainTemplate
      children={
        !isLoading &&
        (post ? (
          <FeedDetailPage id={Number(id)} post={post} />
        ) : (
          <FeedDetailNotFound />
        ))
      }
    />
  )
}
