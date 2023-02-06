import React from 'react';
import styles from "./Cart.module.css";

const CartItem = ({item}: any) => {
    return (
        <div className={styles.cartItemsBox}>
            <div className={styles.cartItem}><span>Артикул:</span> <span>{item.id}</span></div>
            <div className={styles.cartItem}><span>Наименование:</span> <span>{item.name}</span></div>
            <div className={styles.cartItem}><span>Производитель:</span> <span>{item.manufacturer}</span></div>
            <div className={styles.cartItem}><span>Цена:</span> <span>{item.cost}</span></div>
        </div>
    );
};

export default CartItem;