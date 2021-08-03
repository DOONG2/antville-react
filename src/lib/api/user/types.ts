export interface postSignUpRequest {
  id?: number | null
  email: string | null
  nickname: string | null
  password: string | null
  subscribeNewsLetter: boolean | null
}

export type postUserAvatarResponse = {
  profileImg: string
}
