import { useMemo, useEffect } from 'react'
import { Observer, Subject } from 'rxjs'
import { Post } from 'src/api/types'

// rxjs를 이용한 스트림 비동기 처리 로직
export default function usePostStream() {
  // 다중캐스트를 제공하는 Subject 생성
  const subject = useMemo(() => new Subject<Post>(), [])

  // post observable 이라면 next
  const pushPost = (post: Post) => subject.next(post)

  // observable 실행 함수
  const getSubscription = (observer: Partial<Observer<Post>>) =>
    subject.subscribe(observer)

  // observable 중단 클린업 함수
  useEffect(() => {
    return () => subject.unsubscribe()
  }, [])

  return { pushPost, getSubscription }
}
