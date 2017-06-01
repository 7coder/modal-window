import React from 'react';
import ReactDOM from 'react-dom';

import { createStore, combineReducers, applyMiddleware } from 'redux';
import { createLogger } from 'redux-logger';
import { Provider } from 'react-redux';

import App from './components/App';


/******** REDUX начало **********/

let modalInitialState = {
  modal: { visibility: false, type: null }
};

let userInitialState = {
  user: { firstname: 'none', lastname: 'none', username: 'none', age: 0, gender: 'none'}
};

const modalReducer = (state = modalInitialState, action) => {
   switch(action.type){
     case 'SHOW_MODAL_WINDOW' : return Object.assign({}, state, { modal : {visibility: true, type: action.modalType}});
     case 'HIDE_MODAL_WINDOW' : return Object.assign({}, state, { modal: {visibility: false, type: action.modalType}});
     default : return state;
   };
};

const userReducer = (state = userInitialState, action) => {
    switch (action.type) {
      case 'SEND_DATA_USERS' : return Object.assign({}, state, action.userData);
      default: return state;
    };
};

/******** REDUX конец **********/

const myStore = createStore(combineReducers({modalReducer, userReducer}), applyMiddleware(createLogger()));

ReactDOM.render(<Provider store={myStore}><App /></Provider>, document.getElementById('app'));
