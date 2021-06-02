import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { getCategoriesResponse, getSearchResponse } from '../../api/tenor/types'
import { postOptions } from '../../types/post'

type postState = postOptions

const initialState = {
  isUp: false,
  isDown: false,
  categorys: null,
  gifs: null,
  query: '',
  previewUrl: null,
  sumitData: { body: '' },
} as postState

const postSlice = createSlice({
  name: 'post',
  initialState,
  reducers: {
    setIsUp(state, action: PayloadAction<boolean>) {
      state.isUp = action.payload
      state.isDown = false
    },
    setIsDown(state, action: PayloadAction<boolean>) {
      state.isUp = false
      state.isDown = action.payload
    },
    setCategorys(state, action: PayloadAction<getCategoriesResponse | null>) {
      state.categorys = action.payload
    },
    setGifs(state, action: PayloadAction<getSearchResponse | null>) {
      state.gifs = action.payload
    },
    setQuery(state, action: PayloadAction<string>) {
      state.query = action.payload
    },
    setPreviewUrl(state, action: PayloadAction<string | ArrayBuffer | null>) {
      state.previewUrl = action.payload
    },
    setBody(state, action: PayloadAction<string>) {
      state.sumitData.body = action.payload
    },
  },
})

export default postSlice
