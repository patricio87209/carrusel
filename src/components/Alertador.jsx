import React, { Component, useEffect, useState } from 'react';
import '../../src/App.css'

function Alertador(){

  const [counter, setCounter] = useState(0);

  useEffect(() => {
    alert("Alerta: componente montado.");

    return function desmontado() {
      alert("Alerta: componente desmontado.");
    };

},[]);

useEffect(() => {
  if(counter){
    alert("Alerta: componente actualizado.")
  }
},[counter]);

  const handleClick = () => {
    setCounter(counter + 1)
    console.log(counter)
  }

  return (
    <div className='Box Centrado' onClick={handleClick}>
      <h1> ALERTA! </h1>
    </div>
  );
}

export default Alertador;