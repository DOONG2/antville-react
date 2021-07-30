export interface NoticeObject {
  id: number
  type: string
  param: string
  isChecked: boolean
  createdAt: string
  sender: Sender
}

export interface Sender {
  id: number
  nickname: string
  profileImg?: any
}
