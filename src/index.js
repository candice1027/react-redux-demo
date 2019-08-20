import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import {createStore} from 'redux';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
function reducer(state,action) {
    if (state === undefined) {
      return {n: 12, name: 'hello'}
    } else {
      if (action.type === 'add') {
        state.n = state.n + action.payload
        let newstate = {...state}
        return newstate
      } else if (action.type === 'minus') {
        let newstate = state - action.payload
        return newstate
      } else {
        return state
      }
    } 
}
const store = createStore(reducer)
render()
function render() {
    ReactDOM.render(
        <Provider store={store}>
            <App/>
        </Provider>, 
    document.getElementById('root'));
}

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
