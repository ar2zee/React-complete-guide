import React from 'react';
import Radium from 'radium';
import './Person.css'

const person = (props) => {
    const style = {
        '@media (min-width: 500px)' : {
            width: '450px',
            backgroundColor: 'navy'
        }
    }
   return(
    <div className="Person" style={style} >
        <p onClick={props.click}>I'm {props.name} and I'm {props.age} old </p>
        <p>{props.children}</p>
           <input type="text" onChange={props.changed} value={props.name}/>
    </div>
   )
};

export default Radium(person);