import { createSlice } from '@reduxjs/toolkit'

interface MobileViewState {
  isOpenLeftDrawer: boolean
  isOpenRightDrawer: boolean
  isOpenSearchModal: boolean
}

const initialState: MobileViewState = {
  isOpenLeftDrawer: false,
  isOpenRightDrawer: false,
  isOpenSearchModal: false,
}

const mobileViewSlice = createSlice({
  name: 'mobileView',
  initialState,
  reducers: {
    openLeftDrawer(state) {
      state.isOpenLeftDrawer = true
    },
    openRightDrawer(state) {
      state.isOpenRightDrawer = true
    },
    openSearchModal(state) {
      state.isOpenSearchModal = true
    },
    closeMoblieModal(state) {
      return (state = initialState)
    },
  },
})

export default mobileViewSlice
