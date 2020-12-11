import logo from './logo.svg';
import './App.css';
import React from 'react';

import {connect} from 'react-redux';
function App(props) {
  return (
    <div className="App">
      {props.user.map(u=>
      <div>
      <p>{u.name}&nbsp;&nbsp;&nbsp;{u.email}</p>
      </div>
      )}
    </div>
  );
}


const mapStateToProps=(state)=>{
  return {user:state.userReducer}
}
/*
const mapDispatchToProps=(state)=>{
  return {user:userReducer.state}
}
*/

export default connect(mapStateToProps)(App);
