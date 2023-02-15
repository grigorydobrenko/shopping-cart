import React from 'react';
import {Box} from "@mui/material";
import {useAppSelector} from "../../../app/hooks";
import CartItem from "./CartItem";
import {v4} from "uuid";
import {DeviceItem} from "../../../app/api";

const Cart = () => {

    const cartItems = useAppSelector(state => state.cart.cartItems)
    console.log(cartItems)
    const cartMappedItems = cartItems.map((item: DeviceItem) => <CartItem item={item} key={v4()}/>)

    return (
        <Box sx={{width: '30%', bgcolor: 'background.paper', overflow: 'auto', border: 1}}>
            {cartItems.length ? cartMappedItems : <div>Пустая корзина...</div>}

        </Box>
    )
}

export default Cart