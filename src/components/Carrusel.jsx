import React, { Component } from 'react';
import '../../src/App.css'


function Carrusel(props){
  return (
    <div className='App'>
        {props.children}
    </div>
  );
}

export default Carrusel;