import React, { Component, useEffect, useState } from 'react';
import '../../src/App.css'

function Alertador(){

  const [bool, setBool] = useState(false);

  useEffect(() => {
    alert("Alerta: componente montado.");

    return function desmontado() {
      alert("Alerta: componente desmontado.");
    };

},[]);

useEffect(() => {
  alert("Alerta: componente actualizado.");

},[bool]);

  const handleClick = () => {
    setBool(!bool)
    console.log(bool)
  }

  return (
    <div className='Box Centrado' onClick={handleClick}>
      <h1> ALERTA! </h1>
    </div>
  );
}

export default Alertador;