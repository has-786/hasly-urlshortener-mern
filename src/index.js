import React,{useContext,useReducer} from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';
import {Provider} from 'react-redux';
import store from './store/configStore';
import {BrowserRouter,Switch,Route} from 'react-router-dom';

import Home from './components/home';
import Product from './containers/products';
import Disk from './containers/disks';
import Cart from './containers/cart';
import Addproduct from './containers/addproducts';
import Adddisk from './containers/adddisks';
import Addvideo from './containers/addvideos';
import Checkout from './containers/checkout';
import Order from './containers/order';
import Video from './containers/video';
import Login from './components/login';
import Signup from './components/signup';
import Changepassword from './components/changePassword'
import DeleteProducts from './containers/deleteProducts';
import DeleteVideos from './containers/deleteVideos';


ReactDOM.render(

  <Provider store={store}>
      <BrowserRouter>
        <Switch>
          <Route  exact path='/' component={Home}/>
          <Route  path='/paintings' component={Product}/>
          <Route  path='/disk' component={Disk}/>
          <Route  path='/addpainting'  component={Addproduct}/>
          <Route  path='/adddisk'  component={Adddisk}/>
          <Route  path='/addvideo'  component={Addvideo}/>
          <Route  path='/cart'  component={Cart}/>
          <Route  path='/video'  component={Video}/>
          <Route  path='/checkout'  component={Checkout}/>
          <Route  path='/order'  component={Order}/>
          <Route  path='/signin'  component={Login}/>
          <Route  path='/Signup'  component={Signup}/>
          <Route  path='/deletepainting'  component={DeleteProducts}/>
          <Route  path='/deletevideo'  component={DeleteVideos}/>
          <Route  path='/changePassword'  component={Changepassword}/>
        </Switch>
      </BrowserRouter>
  </Provider>
,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
