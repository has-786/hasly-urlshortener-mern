import React from 'react';
import {combineReducers,createStore,applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';

const prodReducer=(state=[],action)=>{

    switch(action.type)
    {
        case 'add_prod':
          return state.concat(action.payload);
        case 'load_prod':
          return action.payload.products;
        default:
          return state;
    }
}




const cartReducer=(state=[],action)=>{

    switch(action.type)
    {
      case 'load_cart':
        return action.payload.cart.reverse();;

        case 'inc_cart_product':
          var obj=state.find(c=>c._id==action.payload._id);
          var obj1=action.payload;
          obj1.count++;

          if(!obj)
            return state.concat(obj1);
          var newState=[];
          state.map((c,ind)=>{newState.push(c); if(c._id==obj1._id)newState[ind].count++;})
          return newState;


        case 'dec_cart_product':
          var x=state.find(cart=>cart._id==action.payload.id);
          if(x && x.count<=1)return state;
          var newState=[];
          state.map((c,ind)=>{newState.push(c); if(c._id==x._id)newState[ind].count--;})
          return newState;

        case 'remove_cart_product':
            return state.filter(c=>c._id!=action.payload.id);

        case 'clear_cart':
                return [];

        default:
          return state;
    }
}


const orderReducer=(state=[],action)=>{

    switch(action.type)
    {
       case 'load_order':
        return action.payload.reverse();
       case 'add_order':
        return state;
        default:
          return state.reverse();
    }
}
const reducer=combineReducers({prodReducer,userReducer,cartReducer,orderReducer});
export default reducer;
