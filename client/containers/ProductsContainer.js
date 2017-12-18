import React, { Component } from 'react';
import { Route, Link, Switch, Redirect } from 'react-router-dom'

import BooksContainer from './BooksContainer';
import MusicsContainer from './MusicsContainer';

class Products extends Component {
  constructor(props) {
    super(props);

    this.onAddToCart = this.onAddToCart.bind(this);
  }

  onAddToCart(product) {
    CartCollection.insert({
      title: product.title,
      price: product.price,
      inventory: product.inventory,
      quantity: 1,
    });
  }

  render() {
    return (
      <div>
        <h2>Available products</h2>

        <ul>
          <li>
            <Link to="/products/books">
              Books
            </Link>
          </li>
          <li>
            <Link to="/products/musics">
              Musics
            </Link>
          </li>
        </ul>

        <Switch>
          <Route path="/products/books" component={BooksContainer}/>
          <Route path="/products/musics" component={MusicsContainer}/>
        </Switch>
      </div>
    );
  }
}

export default Products;