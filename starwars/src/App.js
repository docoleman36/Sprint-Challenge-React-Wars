import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';
import styled from 'styled-components';

import Cards from './components/Cards';

const App = () => {
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.
  const [info, setInfo] = useState([]);

  // Fetch characters from the star wars api in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.

  const Wrapper = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-evenly;
  `;

  useEffect(() => {
    axios
      .get('https://swapi.co/api/people/')
      .then(response => {
        const resource = response.data.results;
        console.log(response);
        setInfo(resource);
      });
  }, []);

  return (
    <div className="App">
      <h1 className="Header">React Wars</h1>
      <Wrapper className="Wrapper">
        {info.map(character => <Cards info={character} />)}
      </Wrapper>
    </div>
  );
}

export default App;
