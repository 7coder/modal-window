import React from 'react';
import ReactDOM from 'react-dom';

import { createStore, combineReducers, applyMiddleware } from 'redux';
import { createLogger } from 'redux-logger';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';

import App from './components/App';


/******** REDUX начало **********/

let modalInitialState = {
  visibility: false,
  type: null
};

let userInitialState = {
  firstname: 'none', lastname: 'none', username: 'none', age: 0, gender: 'none'
};

let ajaxInitialState = {
  dataObj: {}, showInfo: false, error: false
};

const modalReducer = (state = modalInitialState, action) => {
   switch(action.type){
     case 'SHOW_MODAL_WINDOW' : return Object.assign({}, state, { visibility: true, type: action.modalType});
     case 'HIDE_MODAL_WINDOW' : return Object.assign({}, state, { visibility: false, type: action.modalType});
     default : return state;
   };
};

const userReducer = (state = userInitialState, action) => {
    switch (action.type) {
      case 'USER_CHANGE_GENDER': return Object.assign({}, state, { gender: action.value});
      default: return state;
    };
};

const ajaxReducer = (state = ajaxInitialState, action) => {
    switch (action.type) {
      case 'AJAX_REQUEST': return state;
      case 'AJAX_REQUEST_SUCCESS': return Object.assign({}, state, { showInfo: true, dataObj: action.obj});
      case 'AJAX_REQUEST_ERROR': return Object.assign({}, state, { showInfo: true, error: action.error});
      case 'CLEAR_DATA': return Object.assign({}, state, ajaxInitialState);
      default: return state;
    };
};

/******** REDUX конец **********/

const myStore = createStore(combineReducers({modalReducer, userReducer, ajaxReducer}), applyMiddleware(createLogger(), thunk));

ReactDOM.render(<Provider store={myStore}><App /></Provider>, document.getElementById('app'));
