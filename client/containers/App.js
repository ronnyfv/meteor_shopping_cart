import React, { Component } from 'react';
import { Route, Link, Switch, Redirect } from 'react-router-dom'

import Products from  './ProductsContainer';
import Cart from  './CartContainer';

import NavBar from './../components/NavBar';

import 'bootstrap/scss/bootstrap.scss';

class App extends Component {
  render() {
    const links = [
      <Link className="nav-link" to="/products">Your Store</Link>,
      <Link className="nav-link" to="/cart">Cart</Link>
    ];
    return (
      <div>
        <h1>Store</h1>

        <NavBar primary links={links}></NavBar>

        <Switch>
          <Route path="/products" component={Products}/>
          <Route path="/cart" component={Cart}/>
        </Switch>
      </div>
    );
  }
}

export default App;