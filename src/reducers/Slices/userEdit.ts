import { createSlice, PayloadAction } from '@reduxjs/toolkit'

type UserEditState = {
  uploadFileUrl?: string
}

const initialState = {
  uploadFileUrl: undefined,
} as UserEditState

const userEditSlice = createSlice({
  name: 'userEditEdit',
  initialState,
  reducers: {
    setUploadFileUrl(state, action: PayloadAction<string | undefined>) {
      state.uploadFileUrl = action.payload
    },
  },
})

export default userEditSlice
