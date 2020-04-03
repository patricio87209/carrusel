import React, { Component, useState} from 'react';
import '../../src/App.css'



function Carrusel({children, name, color}){
  
  const [index, setIndex] = useState(0);
  const size = children.length


    const previousItem = () => {
        
        ((index -1) % size) < 0 ? setIndex(size - 1) : setIndex((index -1) % size);  
    }

    const nextItem = () => {
        setIndex((index +1) % size)
    }

    let colorStyle = {color}
    
return (
    <div className='Centrado Border'>
    <h1>{ name? name : "Carrusel"}</h1>
        { children[index]}
        <button onClick={previousItem} style = {colorStyle}>
            Anterior
        </button>
        <button onClick={nextItem} style = {colorStyle}>
            Siguiente
        </button>
    </div>
  );
}

export default Carrusel;