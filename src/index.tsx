import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import App from './App';
import {Provider, RootStateOrAny} from 'react-redux'
import store from './redux/store'
import { BrowserRouter as Router } from 'react-router-dom';




function saveToLocalStorage(state:RootStateOrAny) {
    try {
        const serializeState = JSON.stringify(state)
        localStorage.setItem('state', serializeState)

    } catch (e){
        console.log(e)
    }
}

store.subscribe(() => saveToLocalStorage(store.getState()))

ReactDOM.render(
  <React.StrictMode>
      <Router>
      <Provider store={store}>
          <App />
      </Provider>
      </Router>
  </React.StrictMode>,
  document.getElementById('root')
);


