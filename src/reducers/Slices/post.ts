import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import {
  getCategoriesResponse,
  getSearchResponse,
} from '../../lib/api/tenor/types'
import { postOptions } from '../../types/post'

type postState = postOptions

const initialState = {
  isUp: false,
  isDown: false,
  categorys: null,
  gifs: null,
  query: '',
  previewUrl: null,
  submitData: { body: '', sentiment: '', gifDto: undefined },
  isSubmitted: false,
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
      state.submitData.body = action.payload
    },
    setIntialize(state) {
      state.isUp = false
      state.isDown = false
      state.categorys = null
      state.gifs = null
      state.query = ''
      state.previewUrl = null
      state.submitData.body = ''
    },
    setIsSubmitted(state, action: PayloadAction<boolean>) {
      state.isSubmitted = action.payload
    },
    setSentiment(state, action: PayloadAction<string>) {
      state.submitData.sentiment = action.payload
    },
  },
})

export default postSlice
