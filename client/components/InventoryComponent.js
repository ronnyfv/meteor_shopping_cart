import React from 'react';

const Inventory = ({ inventory, quantity, _id, onChangeQuantity }) => {
  const options = Array(inventory).fill().map((_, i) => 
    <option key={`inventory_${i}_${_id}`}>{i}</option>
  );

  return (
    <div>
      <span>Quantity</span>

      <select onChange={onChangeQuantity} defaultValue={quantity} required>
        {options}
      </select>
    </div>
  );
};

export default Inventory;