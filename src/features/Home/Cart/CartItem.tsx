import React from 'react';
import styles from "./Cart.module.css";
import {useAppDispatch} from "../../../app/hooks";
import {addItem, decreaseItemQuantity, removeItem} from "./cart-reducer";
import {DeviceItem} from "../../../app/api";
import {AddBox} from "@mui/icons-material";
import {IconButton} from "@mui/material";
import IndeterminateCheckBoxIcon from '@mui/icons-material/IndeterminateCheckBox';
import DeleteIcon from '@mui/icons-material/Delete';

const CartItem = ({item}: any) => {

    const dispatch = useAppDispatch()
    const onRemove = (id: string) => {
        dispatch(removeItem({id}))
    }

    const onDecrease = (id: string) => {
        dispatch(decreaseItemQuantity({id}))
    }

    const onIncrease = (item: DeviceItem) => {
        dispatch(addItem({item: [item]}))
    }

    return (
        <div className={styles.cartItemsBox}>
            <div className={styles.cartItem}><span>Артикул:</span> <span>{item.id}</span></div>
            <div className={styles.cartItem}><span>Наименование:</span> <span>{item.name}</span></div>
            <div className={styles.cartItem}><span>Производитель:</span> <span>{item.manufacturer}</span></div>
            <div className={styles.cartItem}><span>Цена:</span> <span>{item.cost}</span></div>
            <div className={styles.cartItem}>
                <IconButton color="primary" onClick={() => onRemove(item.id)} sx={{marginRight: '80px'}}>
                    <DeleteIcon/>
                </IconButton>
                {/*<button onClick={}>remove</button>*/}
                <span>Количество:</span>
                {/*<button onClick={}>-</button>*/}
                <IconButton color="primary" onClick={() => onDecrease(item.id)} sx={{marginLeft: '10px'}}>
                    <IndeterminateCheckBoxIcon/>
                </IconButton>
                <span className={styles.itemQuantity}>{item.cartQuantity}</span>
                <IconButton color="primary" onClick={() => onIncrease(item)} sx={{marginLeft: '10px'}}>
                    <AddBox/>
                </IconButton>
                {/*<button onClick={}>+</button>*/}
            </div>
        </div>
    );
};

export default CartItem;