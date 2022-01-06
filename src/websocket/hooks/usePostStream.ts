import { useMemo, useEffect } from 'react'
import { Observer, Subject } from 'rxjs'
import { Post } from 'src/api/types'

export default function usePostStream() {
  const subject = useMemo(() => new Subject<Post>(), [])

  const pushPost = (post: Post) => {
    subject.next(post)
  }

  const getSubscription = (observer: Partial<Observer<Post>>) => {
    return subject.subscribe(observer)
  }

  useEffect(() => {
    return () => subject.unsubscribe()
  }, [])

  return { pushPost, getSubscription }
}
