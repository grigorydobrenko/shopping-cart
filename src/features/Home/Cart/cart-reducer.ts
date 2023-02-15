import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {DeviceItem} from "../../../app/api";


const initialState = {
    cartItems: localStorage.getItem('cartItems') ? JSON.parse(localStorage.getItem('cartItems') || '{}') : [],
    cartTotalQuantity: 0,
    cartTotalAmount: 0,
}

const slice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addItem(state, action: PayloadAction<{ item: DeviceItem[] }>) {
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
        removeItem(state, action: PayloadAction<{ id: string }>) {
            const nextCartItems = state.cartItems.filter((item: DeviceItem) => item.id !== action.payload.id)

            state.cartItems = nextCartItems

            localStorage.setItem('cartItems', JSON.stringify(state.cartItems))
        },
        decreaseItemQuantity(state, action: PayloadAction<{ id: string }>) {
            const index = state.cartItems.findIndex((item: DeviceItem) => item.id === action.payload.id)

            if (state.cartItems[index].cartQuantity > 1) {
                state.cartItems[index].cartQuantity -= 1;

            } else if (state.cartItems[index].cartQuantity === 1) {
                const nextCartItems = state.cartItems.filter((item: DeviceItem) => item.id !== action.payload.id)

                state.cartItems = nextCartItems
            }

            localStorage.setItem('cartItems', JSON.stringify(state.cartItems))
        },
        clearCart(state) {
            state.cartItems = []
            localStorage.setItem('cartItems', JSON.stringify(state.cartItems))
        },
        getTotals(state) {
            let { total, quantity } = state.cartItems.reduce(
                (cartTotal:  {
                    total: number,
                    quantity: number,
                }, cartItem: DeviceItem) => {
                    const { cost, cartQuantity } = cartItem;
                    const itemTotal = cost * cartQuantity;

                    cartTotal.total += itemTotal;
                    cartTotal.quantity += cartQuantity;

                    return cartTotal;
                },
                {
                    total: 0,
                    quantity: 0,
                }
            );
            total = parseFloat(total.toFixed(2));
            state.cartTotalQuantity = quantity;
            state.cartTotalAmount = total;
        },
    }
})

export const cartReducer = slice.reducer
export const {addItem, removeItem, decreaseItemQuantity, clearCart, getTotals} = slice.actions