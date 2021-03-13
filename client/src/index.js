import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter,Route,Switch} from 'react-router-dom'
import Home from './components/home';
import Signin from './components/signin';
import Signup from './components/signup';
import Changepassword from './components/changePassword';
import Myurls from './components/myurls';
import Addurls from './components/addurls';

ReactDOM.render(
      <BrowserRouter>
        <Switch>
          <Route  exact path='/' component={Home}/>
          <Route  path='/addurls'  component={Addurls}/>
          <Route  path='/myurls'  component={Myurls}/>
          <Route  path='/signin'  component={Signin}/>
          <Route  path='/signup'  component={Signup}/>
          <Route  path='/changePassword'  component={Changepassword}/>
        </Switch>
      </BrowserRouter>,
  document.getElementById('root')
);
