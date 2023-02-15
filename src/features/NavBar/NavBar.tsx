import React from 'react';
import {AppBar, Box, Toolbar, Typography} from "@mui/material";
import {useAppDispatch} from "../../app/hooks";
import {clearCart} from "../Home/Cart/cart-reducer";

const NavBar = () => {

    const dispatch = useAppDispatch()

    const onClearCart = () => {
        dispatch(clearCart())
    }

    return (
        <Box>
        <AppBar  position="static">
            <Toolbar sx={{ width: '1100px', m: '0 auto', display: 'flex', justifyContent: 'space-between' }}>
                <Typography variant="h6" component="div"
                >
                    Cart
                    <button onClick={() => onClearCart()}>Очистить корзину</button>
                </Typography>
                <Typography variant="h6" component="div"
                >
                    Total: 0
                </Typography>
            </Toolbar>
        </AppBar>
        </Box>
    );
};

export default NavBar;

