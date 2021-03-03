import React from 'react';
import {combineReducers,createStore,applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import {logger} from 'redux-logger';
import reducer from '../reducer/configReducer';

const store=createStore(reducer,[],applyMiddleware(thunk));
export default store;
