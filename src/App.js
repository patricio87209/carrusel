import React from 'react';
import logo from './logo.svg';
import './App.css';
import Box from './components/Box';
import Circle from './components/Circle';
import Carrusel from './components/Carrusel'

function App() {
  return (
    <Carrusel color='red'>
      <Box/>
      <Circle/>
      <Carrusel color='blue'>
        <Box/>
        <Circle/>
      </Carrusel>
    </Carrusel>
  );
}

export default App;
