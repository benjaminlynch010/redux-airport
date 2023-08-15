import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux'

function App() {
  // Get airlineList from redux
  const airlineList = useSelector(store.airlineList)
  // talk to redux from react
  const dispatch = useDispatch();

  
  return (
    <div>
      <h1>Redux Airport</h1>
      <input placeholder='Airline Name' />
      <button>Add Airline</button>
      <table>{/* Airlines should be listed here */}</table>
    </div>
  );
}

export default App;


// For the initial release we just need to know what airlines have planes at this airport.

// Create a form to add airlines, and a table to show all the airlines that have been added.

// ### Tasks

// - Add Redux to the project. 
//   - Install the necessary dependencies. (`npm install redux@4 react-redux@7 redux-logger@3`)
//   - The array of airlines should be stored inside the redux state.
// - Add a form with one input for an airline name. 
//   - When the user hits an `Add Airline`, button, add that new airline to the redux state.
// - Add a table to display all the airlines at this airport.
// - Create separate React components for both the form & table