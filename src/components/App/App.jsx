import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux'

function App() {
  // Get airlineList from redux
  const airlineList = useSelector(store => store.airlineList)
  // Track new airline to add in local state
  const [ newAirline, setNewAirline ] = useState('')
  // talk to redux from react
  const dispatch = useDispatch();

  const handleSubmit = (event) => {
    // Don't reload when we submit form
    event.preventDefault()
    // Tell redux to add new airline
    dispatch({
      type: 'ADD_AIRLINE',
      // Pass new airline, tracking in state
    })
    // Clear the form
    setNewAirline('')
  }
  
  return (
    <form onSubmit={handleSubmit}>
      <h1>Redux Airport</h1>
      <h3>New Airline : {newAirline}</h3>
      <input 
        type='text' 
        placeholder='Airline Name'
        value={newAirline}
        onChange={ event => setNewAirline(event.target.value)} 
        />
      <button type='submit'>Add Airline</button>
      <ul>
        {airlineList.map((airline, index) => 
          <li key={index}>{airline}</li>
        )}
      </ul> 
    </form>
    
    
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