import { createSlice, PayloadAction } from '@reduxjs/toolkit'

type UserEditState = {
  nickname: string
  website?: string
  introduction: string
  uploadImage?: File
}

const initialState = {
  nickname: '',
  introduction: '',
} as UserEditState

const userEditSlice = createSlice({
  name: 'userEditEdit',
  initialState,
  reducers: {
    setNickname(state, action: PayloadAction<string>) {
      state.nickname = action.payload
    },
    setWebsite(state, action: PayloadAction<string>) {
      state.website = action.payload
    },
    setIntroduction(state, action: PayloadAction<string>) {
      state.introduction = action.payload
    },
    setUploadImage(state, action: PayloadAction<File>) {
      state.uploadImage = action.payload
    },
  },
})

export default userEditSlice
