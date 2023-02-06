import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {DeviceItem} from "../../../app/api";


const slice = createSlice({
    name: 'cart',
    initialState: [] as DeviceItem[],
    reducers: {
        addItem(state, action: PayloadAction<{items: DeviceItem[]}>) {
            state.push(...action.payload.items)
        },
        removeItem(state, action: PayloadAction<{id: string}>) {
        },
        clearCart(state) {
        }
    }
})

export const cartReducer = slice.reducer
export const {addItem} = slice.actions