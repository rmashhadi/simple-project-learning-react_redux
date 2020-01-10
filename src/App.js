import React from 'react';
// import {
//   BrowserRouter as Router,
//   Switch,
//   Route
// } from 'react-router-dom'
import Final from './final'
import './App.css';
import {createStore} from 'redux'
import Sender from './components/reducer'
import {Provider} from 'react-redux'
const store= createStore (Sender) 

function App () {
  
    return(
      <Provider store= {store}>
       <Final />
      </Provider>
  
    )
  }

export default App