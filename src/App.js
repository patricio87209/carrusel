import React from 'react';
import logo from './logo.svg';
import './App.css';
import Box from './components/Box';
import Circle from './components/Circle';
import Carrusel from './components/Carrusel'

function App() {
  return (
    <Carrusel>
      <Box/>
      <Box/>
      <Box/>
      <Box/>
      <Circle/>
      <Circle/>
      <Circle/>
      <Circle/>
    </Carrusel>
  );
}

export default App;
