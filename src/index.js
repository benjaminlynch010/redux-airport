import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/App/App';

// Imports to get redux up & running
import { createStore, combineReducers } from 'redux'
import { Provider } from 'react-redux'
import { logger } from 'redux-logger'




// * Reducers *
// Add airline to the redux state
const airlineList = (state = [], action) => {
  console.log('Airline Reducer')
  if (action.type === 'ADD_AIRLINE') {
    // Create new array with original values
    // AND the new value from action.payload
    console.log(`The airline was : ${action.payload}`)
    return [ ...state, action.payload ];
  }
  // instead of assigning state to a variable, 
  // we return it's value from a function
  return state
}

/** TODO: Create store */
const storeInstance = createStore(
  airlineList
)


// Add Provider to let redux and react talk to each other
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
      <Provider store={storeInstance}>
        <App />
      </Provider>
    </React.StrictMode>
);