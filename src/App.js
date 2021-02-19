import React, {useState, useEffect} from 'react';
import './App.css';
import axios from 'axios';
import {BASE_URL, API_KEY} from './constants'
import Character from './components/Character'
import styled from 'styled-components'

const StyledApp = styled.div`
  @import url('https://fonts.googleapis.com/css2?family=Squada+One&display=swap');

  * {
    font-family: 'Squada One', cursive;
  }
  width:100%;
  display:flex;
  flex-flow:row wrap;
  align-items:center;

  h1.title {
    width:100%;
    font-size:4.5rem;

  }
`

const App = () => {
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.

  const [characters, setCharacters] = useState([]);
  const [current, setCurrent] = useState({});

  // Fetch characters from the API in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.
  useEffect(() => {
    const fetchCharacters = () => {
      axios.get(`${BASE_URL}${API_KEY}`)
        .then(res => {
          setCharacters(res.data);
        })
        .catch(err => {
          console.log(err)
        })
    }
    fetchCharacters();
  }, [])

  console.log(characters)

  return (
    <StyledApp className="App">
      <h1 className="title">SPRINT WARS</h1>
      {characters &&  characters.map(char => <Character key={char.birth_year} character={char}/>)}
    </StyledApp>
  );
}

export default App;
