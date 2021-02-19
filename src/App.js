import React, {useState, useEffect} from 'react';
import './App.css';
import axios from 'axios';
import {BASE_URL, API_KEY} from './constants'
import Character from './components/Character'

const App = () => {
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.
  const [characters, setCharacters] = useState({});

  // Fetch characters from the API in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.

  useEffect(() => {
    const getCharacters = () => {
      axios.get(`${BASE_URL}${API_KEY}`)
        .then(res => {
          setCharacters(res.data)
        })
        .catch(err => {
          console.log(err)
        })
    }
    getCharacters();
  }, [])

  return (
    <div className="App">
      <Characters />
    </div>
  );
}

export default App;
