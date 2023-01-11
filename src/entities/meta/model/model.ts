import type { StateTypes } from './types'
import { createSlice, PayloadAction } from '@reduxjs/toolkit'

const initialState: StateTypes = {
  isAuth: false,
}

export const metaSlice = createSlice({
  name: 'meta',
  initialState: initialState,
  reducers: {
    setIsAuth: (state, action: PayloadAction<boolean>) => {
      state.isAuth = action.payload
    },
  }
})

export const {
  setIsAuth,
} = metaSlice.actions

export default metaSlice.reducer