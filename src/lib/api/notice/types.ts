export interface NoticeObject {
  id: number
  type: NoticeType
  param: string
  webParam: string | null
  isChecked: boolean
  createdAt: string
  sender: Sender
}

export interface Sender {
  id: number
  nickname: string
  profileImg: string | null
}

export enum NoticeType {
  TAG = 'TAG',
  LIKE = 'LIKE',
  POST_COMMENT = 'POST_COMMENT',
  COMMENT_COMMENT = 'COMMENT_COMMENT',
  COMMENT_TAG = 'COMMENT_TAG',
  COMMENT_LIKE = 'COMMENT_LIKE',
  FOLLOW = 'FOLLOW',
}

export function getRoutePath(notice: NoticeObject) {
  if (notice.type === NoticeType.FOLLOW) {
    return `/user/${notice.sender.nickname}/profile`
  } else {
    return `/feed/detail/${notice.webParam ?? notice.param}`
  }
}

export function getContent(notice: NoticeObject) {
  switch (notice.type) {
    case NoticeType.TAG:
      return `@${
        notice.sender!.nickname
      } 님이 게시글에 회원님을 태그하였습니다.`
    case NoticeType.LIKE:
      return `@${notice.sender!.nickname} 님이 회원님의 게시글을 좋아합니다.`
    case NoticeType.COMMENT_TAG:
      return `@${notice.sender!.nickname} 님이 댓글에 회원님을 태그하였습니다.`
    case NoticeType.COMMENT_LIKE:
      return `@${notice.sender!.nickname} 님이 회원님의 댓글을 좋아합니다.`
    case NoticeType.FOLLOW:
      return `@${notice.sender!.nickname} 님이 회원님을 팔로우 합니다.`
    default:
      return null
  }
}
