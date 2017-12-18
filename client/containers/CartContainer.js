import React, { Component } from 'react';
import { withTracker } from 'meteor/react-meteor-data';

import { CartCollection } from './../../shared/collections/CartCollection';
import { removeFromCart, quantityUpdate, getCartTotal } from './../api';

import CartItem from './../components/CartItemComponent';
import Inventory from './../components/InventoryComponent';

class Cart extends Component {
  constructor(props) {
    super(props);

    this.state = {
      totalPrice: 0,
    };

    this.onChangeQuantity = this.onChangeQuantity.bind(this);
    this.onRemoveItem = this.onRemoveItem.bind(this);
  }

  componentDidMount() {
    getCartTotal()
      .then(result => {
        this.setState({
          totalPrice: result,
        });
      })
      .catch(error => {
        alert(error);
      });
  }

  componentWillReceiveProps() {
    getCartTotal()
      .then(result => {
        this.setState({
          totalPrice: result,
        });
      })
      .catch(error => {
        alert(error);
      });
  }

  onChangeQuantity(_id, event) {
    quantityUpdate(_id, parseInt(event.target.value))
  }

  onRemoveItem(_id) {
    removeFromCart(_id);
  }

  render() {
    const { totalPrice } = this.state;
    const { products } = this.props;

    return (
      <div>
        {products.map(({ title, price, _id, inventory, quantity }) => (
          <div key={_id}>
            <CartItem 
              title={title}
              price={price}
              key={`cartItem_${_id}`}
              onRemoveItem={() => this.onRemoveItem(_id)}
            />
            <Inventory 
              inventory={inventory}
              quantity={quantity}
              key={`inventory_${_id}`}
              onChangeQuantity={(event) => this.onChangeQuantity(_id, event)}
              _id = {_id}
            />
          </div>
        ))}
        <span>
          $ {totalPrice}
        </span>
      </div>
    );
  }
}

export default withTracker(() => {
  return {
    products: CartCollection.find({}).fetch()
  };
})(Cart);