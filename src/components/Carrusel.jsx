import React, { Component, useState, useEffect} from 'react';
import '../../src/App.css'



function Carrusel(props){
  
  let [componentRendered, setComponentRendered] = useState(0);
  let size = props.children.length


    const previousItem = () => {
        
        ((componentRendered -1) % props.children.length) < 0 ? setComponentRendered(props.children.length - 1) : setComponentRendered((componentRendered -1) % props.children.length);  
        console.log(componentRendered)
    }

    const nextItem = () => {
        setComponentRendered((componentRendered +1) % props.children.length)
        console.log(componentRendered)
    }

    let colorStyle = {color: props.color}
return (
    <div className='App'>
    <h1>Carrusel</h1>
        {props.children[componentRendered]}
        <button onClick={previousItem} style = {colorStyle}>
            Anterios
        </button>
        <button onClick={nextItem} style = {colorStyle}>
            Siguiente
        </button>
    </div>
  );
}

export default Carrusel;