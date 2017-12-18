import React, { Component } from 'react';
import { withTracker } from 'meteor/react-meteor-data';

import { ProductsCollection } from './../../shared/collections/ProductsCollection';
import { addToCart } from './../api';

import Product from './../components/ProductComponent';

class Musics extends Component {
  constructor(props) {
    super(props);

    this.onAddToCart = this.onAddToCart.bind(this);
  }

  onAddToCart(product) {
    addToCart(product);
  }

  render() {
    const { products } = this.props;

    return (
      <div>
        <h2>Musics</h2>

        {products.map(product => (
          <Product
            title={product.title}
            price={product.price}
            inventory={product.inventory}
            key={product._id}
            onAddToCart={() => this.onAddToCart(product)}
          />
        ))}
      </div>
    );
  }
}

export default withTracker(() => {
  return {
    products: ProductsCollection.find({ department: 'music' }).fetch(),
  }
})(Musics);