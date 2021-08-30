import GA4React from 'ga-4-react'

export function gaSetUserInfo({
  id,
  nickname,
}: {
  id: number
  nickname: string
}) {
  if (process.env.NODE_ENV !== 'production') return
  if (GA4React.isInitialized()) {
    GA4React.getGA4React()?.gtag('set', { id, nickname })
  } else {
    const ga4React = new GA4React('G-W1N0NF60VB', {
      debug_mode: process.env.NODE_ENV !== 'production',
      send_page_view: process.env.NODE_ENV === 'production',
    })
    ga4React.initialize().then((ga4) => {
      ga4.gtag('set', 'user_properties', { id, nickname })
    })
  }
}

export function followEvent(nickname: string) {
  sendGaEvent('팔로우', nickname, 'User')
}

export function addWatchlistEvent(title: string) {
  sendGaEvent('관심종목추가', title, 'Stock')
}

export function postEvent() {
  sendGaEvent('게시글 작성', '', 'Post')
}

export function commentEvent() {
  sendGaEvent('댓글 작성', '', 'Comment')
}

export function likeEvent() {
  sendGaEvent('좋아요', '', 'Post')
}

function sendGaEvent(
  action: string,
  label: string,
  category: string,
  nonInteraction?: boolean
) {
  if (process.env.NODE_ENV !== 'production') return
  GA4React.getGA4React()?.event(action, label, category, nonInteraction)
}
