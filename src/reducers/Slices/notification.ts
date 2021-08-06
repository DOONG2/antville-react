import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { NoticeObject } from '../../lib/api/notice/types'

type NotificationState = {
  notices?: NoticeObject[]
}

const initialState = {
  notices: undefined,
} as NotificationState

const notificationSlice = createSlice({
  name: 'notification',
  initialState,
  reducers: {
    setNotices(state, action: PayloadAction<NoticeObject[] | undefined>) {
      state.notices = action.payload
    },
  },
})

export default notificationSlice
