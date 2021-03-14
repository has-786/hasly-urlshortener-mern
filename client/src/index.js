import React,{lazy,Suspense} from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter,Route,Switch} from 'react-router-dom'


import Loading from './components/loading'
//import Home from './components/home';
const Home=lazy(()=>import('./components/home'))
const Header=lazy(()=>import('./components/header'))

//import Signin from './components/signin';
const Signin=lazy(()=>import('./components/signin'))
//import Signup from './components/signup';
const Signup=lazy(()=>import('./components/signup'))
//import Changepassword from './components/changePassword';
const Changepassword=lazy(()=>import('./components/changePassword'))
//import Myurls from './components/myurls';
const Myurls=lazy(()=>import('./components/myurls'))
//import Addurls from './components/addurls';
const Addurls=lazy(()=>import('./components/addurls'))

ReactDOM.render(
  <Suspense fallback={<Loading />}>
      <BrowserRouter>
        <center><Header /></center>
        <Switch>
          <Route  exact path='/' component={Home}/>
          <Route  path='/addurls'  component={Addurls}/>
          <Route  path='/myurls'  component={Myurls}/>
          <Route  path='/signin'  component={Signin}/>
          <Route  path='/signup'  component={Signup}/>
          <Route  path='/changePassword'  component={Changepassword}/>
        </Switch>
      </BrowserRouter>
    </Suspense>,
  document.getElementById('root')
);
