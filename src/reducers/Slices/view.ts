import { createSlice, PayloadAction } from '@reduxjs/toolkit'

interface ViewState {
  isOpenLoginForm: boolean
  isOpenSignUpForm: boolean
  isOpenFindPasswordForm: boolean
  isOpenProfileDropDown: boolean
  isOpenNoticeDropDown: boolean
  isOpenFollowingModal: boolean
  isOpenFollwerModal: boolean
  isOpenGifForm: boolean
  isOpenSearchBar: boolean
  isFocusPostInput: boolean
  isFocusSearchBar: boolean
  isFailLoginSubmit: boolean
  isFailFindPasswordSubmit: boolean
}

const initialState: ViewState = {
  isOpenLoginForm: false,
  isOpenSignUpForm: false,
  isOpenFindPasswordForm: false,
  isOpenProfileDropDown: false,
  isOpenNoticeDropDown: false,
  isOpenFollowingModal: false,
  isOpenFollwerModal: false,
  isOpenSearchBar: false,
  isOpenGifForm: false,
  isFocusPostInput: false,
  isFocusSearchBar: false,
  isFailLoginSubmit: false,
  isFailFindPasswordSubmit: false,
}

const viewSlice = createSlice({
  name: 'view',
  initialState,
  reducers: {
    setIsOpenLoginForm(state, action: PayloadAction<boolean>) {
      state.isOpenLoginForm = action.payload
      state.isOpenSignUpForm = false
      state.isOpenFindPasswordForm = false
    },
    setIsOpenSignUpForm(state, action: PayloadAction<boolean>) {
      state.isOpenLoginForm = false
      state.isOpenSignUpForm = action.payload
      state.isOpenFindPasswordForm = false
    },
    setIsOpenFindPasswordForm(state, action: PayloadAction<boolean>) {
      state.isOpenLoginForm = false
      state.isOpenSignUpForm = false
      state.isOpenFindPasswordForm = action.payload
    },
    setIsOpenProfileDropDown(state, action: PayloadAction<boolean>) {
      state.isOpenProfileDropDown = action.payload
      state.isOpenNoticeDropDown = false
    },
    setIsOpenNoticeDropDown(state, action: PayloadAction<boolean>) {
      state.isOpenProfileDropDown = false
      state.isOpenNoticeDropDown = action.payload
    },
    setIsOpenFollowingModal(state, action: PayloadAction<boolean>) {
      state.isOpenFollowingModal = action.payload
    },
    setIsOpenFollwerModal(state, action: PayloadAction<boolean>) {
      state.isOpenFollwerModal = action.payload
    },
    setIsOpenGifForm(state, action: PayloadAction<boolean>) {
      state.isOpenGifForm = action.payload
    },
    setIsFocusPostInput(state, action: PayloadAction<boolean>) {
      state.isFocusPostInput = action.payload
    },
    setIsFocusSearchBar(state, action: PayloadAction<boolean>) {
      state.isFocusSearchBar = action.payload
      if (action.payload === true) {
        state.isOpenProfileDropDown = false
        state.isOpenNoticeDropDown = false
      }
    },
    setIsFailLoginSubmit(state, action: PayloadAction<boolean>) {
      state.isFailLoginSubmit = action.payload
    },
    setIsFailFindPasswordSubmit(state, action: PayloadAction<boolean>) {
      state.isFailFindPasswordSubmit = action.payload
    },
  },
})

export default viewSlice
