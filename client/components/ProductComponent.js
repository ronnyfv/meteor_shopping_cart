import React from 'react';

const Product = ({ price, inventory, title, onAddToCart }) => {
  return (
    <div>
      <span>{title} - ${price} {inventory ? `Current inventory ${inventory}` : null}</span>
      <button onClick={onAddToCart}>Add To Cart</button>
    </div>
  );
};

export default Product;