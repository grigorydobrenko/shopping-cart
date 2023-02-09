import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {DeviceItem} from "../../../app/api";



const initialState = {
    cartItems: localStorage.getItem('cartItems') ? JSON.parse(localStorage.getItem('cartItems') || '{}') : []
}

const slice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addItem(state, action: PayloadAction<{item: DeviceItem[]}>) {
            if (action.payload.item.length === 0) return
            const index = state.cartItems.findIndex((item: DeviceItem) => item.id === action.payload.item[0]?.id)
            if (index >= 0) {
                state.cartItems[index].cartQuantity += 1
            } else {
                const tempProduct = {...action.payload.item[0], cartQuantity: 1}
                state.cartItems.push(tempProduct)
            }
            localStorage.setItem('cartItems', JSON.stringify(state.cartItems))
        },
        removeItem(state, action: PayloadAction<{id: string}>) {
        },
        clearCart(state) {
        }
    }
})

export const cartReducer = slice.reducer
export const {addItem} = slice.actions