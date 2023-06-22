import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

export interface CounterState {
  items: Array<any>,
  totalAmount: number,
  totalQuantity: number
}

const initialState: CounterState = {
  items: [],
  totalAmount: 0,
  totalQuantity: 0
}

export const cartSlice: any = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    increment: (state) => {

    },
    decrement: (state) => {

    },
    incrementByAmount: (state, action: PayloadAction<number>) => {

    },
  },
})

// Action creators are generated for each case reducer function
export const cartActions = cartSlice.actions

export default cartSlice.reducer