import React from 'react';
import styles from "./Cart.module.css";
import {useAppDispatch} from "../../../app/hooks";
import {addItem, decreaseItemQuantity, removeItem} from "./cart-reducer";
import {DeviceItem} from "../../../app/api";

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
                <button onClick={() => onRemove(item.id)}>remove</button>
                <span>Количество:</span>
                <button onClick={() => onDecrease(item.id)}>-</button>
                <span className={styles.itemQuantity}>{item.cartQuantity}</span>
                <button onClick={() => onIncrease(item)}>+</button>
            </div>
        </div>
    );
};

export default CartItem;