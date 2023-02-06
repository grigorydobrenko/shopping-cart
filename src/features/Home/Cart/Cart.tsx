import React from 'react';
import {Box} from "@mui/material";
import {useAppSelector} from "../../../app/hooks";
import CartItem from "./CartItem";

const Cart = () => {

    const cartItems = useAppSelector(state => state.cart)
    const cartMappedItems = cartItems.map(item => <CartItem item={item}/>
    )

    return (
        <Box sx={{width: '30%', bgcolor: 'background.paper', overflow: 'auto', border: 1}}>
            {cartItems ? cartMappedItems : <div>'cart is empty'</div>}

        </Box>
    )
}

export default Cart