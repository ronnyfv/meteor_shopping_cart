import React from 'react';
// import { styles } from 'bootstrap/scss/bootstrap.scss';

const CartItem = ({ title, price, onRemoveItem }) => {
  console.log(styles);
  return (
    <div>
      <span>{title}</span>
      <span>Price: {price}</span>
      <button className={styles['btn'] + ' ' + styles['btn-success']} onClick={onRemoveItem}>Remove</button>
    </div>
  );
};

export default CartItem;