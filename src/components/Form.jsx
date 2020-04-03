import React, { Component , useState} from 'react';
import '../../src/App.css'


function Form (){

    let [nombre, setNombre] = useState(undefined);

    const handleSubmit = () => {
        alert(nombre);
    } 


    const handleChange = (event) => {
      setNombre(event.target.value);
      console.log(event.target.value)
    }

    return(

        <div className='Centrado'>
            <form onSubmit={handleSubmit}>
                <label>
                    Name:
                    <input type="text" value={nombre} onChange={handleChange} />
                </label>
                    <input type="submit" value="Submit" />
            </form>
        </div>
    )
}

export default Form;