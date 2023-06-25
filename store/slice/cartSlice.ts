import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

export interface cartState {
  items: Array<any>,
  totalAmount: number,
  totalQuantity: number
}

const initialState: cartState = {
  items: [],
  totalAmount: 0,
  totalQuantity: 0
}

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    AddToCart: (state: cartState, action: PayloadAction<{ product: any; quantity: number }>) => {
      const cartItem = action.payload.product;
      const alreadyExist = state.items.find((currElem) => currElem._id === cartItem._id);

      state.totalQuantity += action.payload.quantity;
      state.totalAmount += action.payload.quantity * action.payload.product.price;
      if (!alreadyExist) {
        const totalPrice = cartItem.price * action.payload.quantity;
        state.items.push({
          ...cartItem,
          quantity: action.payload.quantity,
          totalPrice,
        });
      } else {
        const totalPrice = alreadyExist.totalPrice + alreadyExist.price * action.payload.quantity;
        alreadyExist.quantity += action.payload.quantity;
        alreadyExist.totalPrice = totalPrice;
      }

    },
    removeFromCart: (state: cartState, action: PayloadAction<any>) => {
      const productId = action.payload;
      const ExistProduct = state.items.find((item) => item._id === productId)

      state.totalQuantity--;
      state.totalAmount = state.totalAmount - ExistProduct.price;

      if (ExistProduct.quantity === 1) {
        state.items = state.items.filter((item) => (item._id !== productId));
      } else {
        ExistProduct.quantity--;
        ExistProduct.totalAmount -= ExistProduct.price;
      }

    },
    clearCart: (state) => {
      state = initialState
    },
  },
})

// Action creators are generated for each case reducer function
export const cartActions = cartSlice.actions

export default cartSlice.reducer