import React from 'react'
import { useParams } from 'react-router-dom'
import MainTemplate from '../../components/main/MainTemPlate'
import usePostById from './hooks/usePostById'
import FeedDetailPage from './FeedDetailPage'
import usePageView from '../../components/common/hooks/usePageView'
import FeedDetailNotFound from './FeedDetailNotFound'

export default function FeedPage() {
  const { id } = useParams<{ id: string }>()
  const { post, isLoading } = usePostById(id)
  usePageView('피드상세')

  if (!post) return <></>

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
