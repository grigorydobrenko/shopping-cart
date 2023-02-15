import React, {useEffect} from 'react';
import {AppBar, Box, IconButton, Toolbar, Typography} from "@mui/material";
import {useAppDispatch, useAppSelector} from "../../app/hooks";
import {clearCart, getTotals} from "../Home/Cart/cart-reducer";
import DeleteIcon from '@mui/icons-material/Delete';

const NavBar = () => {

    const dispatch = useAppDispatch()
    const cart = useAppSelector(state => state.cart)

    const onClearCart = () => {
        dispatch(clearCart())
    }

    useEffect(() => {
        dispatch(getTotals())
    }, [dispatch, cart])

    return (
        <Box>
            <AppBar position="static">
                <Toolbar sx={{width: '1100px', m: '0 auto', display: 'flex', justifyContent: 'space-between'}}>
                    <Typography variant="h6" component="div"
                    >
                        Корзина
                        <IconButton aria-label="delete" size="large" onClick={() => onClearCart()} color={'warning'}
                                    sx={{marginLeft: '180px'}}>
                            <DeleteIcon/>
                        </IconButton>
                    </Typography>
                    <Typography variant="h6" component="div"
                    >
                        Сумма: {cart.cartTotalAmount}
                    </Typography>
                </Toolbar>
            </AppBar>
        </Box>
    );
};

export default NavBar;

