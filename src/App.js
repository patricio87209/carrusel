import React from 'react';
import logo from './logo.svg';
import './App.css';
import Box from './components/Box';
import Circle from './components/Circle';
import Carrusel from './components/Carrusel'
import Form from './components/Form';
import Alertador from './components/Alertador'

function App() {
  return (
    <Carrusel name='Carrusel' color='red'>
      <Form/>
      <Box/>
      <Circle/>
      <Alertador/>
      <Carrusel name='Carrusel hijo' color='blue'>
        <Box/>
        <Circle/>
      </Carrusel>
    </Carrusel>
  );
}

export default App;
