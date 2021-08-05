import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { GifObject } from '../../lib/api/tenor/types'

type FormState = {
  query: string
  gifs?: GifObject[]
}

const initialState = {
  query: '',
  gifs: undefined,
} as FormState

const formSlice = createSlice({
  name: 'form',
  initialState,
  reducers: {
    setGifs(state, action: PayloadAction<GifObject[] | undefined>) {
      state.gifs = action.payload
    },
    setQuery(state, action: PayloadAction<string>) {
      state.query = action.payload
    },
  },
})

export default formSlice
