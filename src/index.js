import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {Provider} from 'react-redux';
import store from './store/configStore';
import Product from './containers/products';
import Cart from './containers/cart';
import Addproduct from './containers/addproducts';
import Checkout from './containers/checkout';
import Order from './containers/order';
import Login from './components/login';
import Signup from './components/signup';

import {BrowserRouter,Switch,Route} from 'react-router-dom';

ReactDOM.render(
  <Provider store={store}>
      <BrowserRouter>
        <Switch>
          <Route exact path='/' component={Product}/>
          <Route  path='/addproduct'  component={Addproduct}/>
          <Route  path='/cart'  component={Cart}/>
          <Route  path='/checkout'  component={Checkout}/>
          <Route  path='/order'  component={Order}/>
          <Route  path='/login'  component={Login}/>
          <Route  path='/Signup'  component={Signup}/>

        </Switch>
      </BrowserRouter>
  </Provider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
