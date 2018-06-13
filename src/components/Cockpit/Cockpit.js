import React, {Fragment} from 'react';

import classes from './Cockpit.css';
// import Aux from '../../hoc/Aux';

const cockpit  =(props) => {
    const assignedClasses = [];

    let btnClass = classes.Button;
    
    
    if( props.showPerson) {
        btnClass = [classes.Button, classes.Red].join(' ');
    }

    if (props.persons.length <= 2) {
        assignedClasses.push(classes.red); //
    }
    if (props.persons.length <= 1) {
        assignedClasses.push(classes.bold); //
    }

    return (
            <Fragment>
                <h1>{props.appTitle}</h1>
                <p className={assignedClasses.join(' ')}>This is Working</p>
                <button
                    className={btnClass}
                    onClick={props.clicked}>Switch Names
                </button>
                <button onClick={props.login}> Log In </button>
            {/* <button 
            onClick={() => this.switchNameHandler('Hulya!')}>Switch Names</button> Alternative way to bind  */}
            </Fragment>
            
    )
}

export default cockpit;