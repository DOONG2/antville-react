import React from 'react'
import FeedBody from '../feed/FeedBody'
import PostForm from '../post/PostForm'
import PopularStock from '../stock/PopularStock'

export default function MainPage() {
  return (
    <>
      <PopularStock />
      <PostForm />
      <FeedBody />
    </>
  )
}
