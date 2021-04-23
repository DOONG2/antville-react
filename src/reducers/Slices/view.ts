import { createSlice, PayloadAction } from '@reduxjs/toolkit'

type ViewState = {
  isOpenLoginForm: boolean
  isOpenSignUpForm: boolean
  isFocusSearchBar: boolean
  isFailLoginSubmit: boolean
}

const initialState: ViewState = {
  isOpenLoginForm: false,
  isOpenSignUpForm: false,
  isFocusSearchBar: false,
  isFailLoginSubmit: false,
}

const viewSlice = createSlice({
  name: 'view',
  initialState,
  reducers: {
    setIsOpenLoginForm(state, action: PayloadAction<boolean>) {
      state.isOpenLoginForm = action.payload
      state.isOpenSignUpForm = false
    },
    setIsOpenSignUpForm(state, action: PayloadAction<boolean>) {
      state.isOpenLoginForm = false
      state.isOpenSignUpForm = action.payload
    },
    setIsFocusSearchBar(state, action: PayloadAction<boolean>) {
      state.isFocusSearchBar = action.payload
    },
    setIsFailLoginSubmit(state, action: PayloadAction<boolean>) {
      state.isFailLoginSubmit = action.payload
    },
  },
})

export default viewSlice
