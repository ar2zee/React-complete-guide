import React, { Component } from 'react';
import classes from './App.css';
import Person from './Person/Person';
import ErrorBoundary from './ErrorBoundary/ErrorBoundary';


class App extends Component {
  state = {
    persons: [
      {id: '001', name: 'Artur', age: 22},
      {id: '002', name: 'Max', age: 32},
      {id: '003', name: 'Oleg', age: 42}  
    ],
    otherValue: 'String',
    showPerson: false
  }

  switchNameHandler = (event, id) => {
      const personIndex = this.state.persons.findIndex(p => {
        return p.id === id;
      })

      const person = {
        ...this.state.persons[personIndex]
      };
      // const person = Object.assign({}, this.state.persons[personIndex]); alternative

      person.name = event.target.value;

      const persons = [...this.state.persons];
      persons[personIndex] = person;

    this.setState({
      persons: persons
    })
  }

  deletePersonHandler = (personIndex) => {
    // const persons = this.state.persons; // bad practise because we are mutatting current array
    // const persons = this.state.persons.slice(); // We're no muttating an array and working with a new one
    const persons = [...this.state.persons];  
    persons.splice(personIndex, 1);
    this.setState({
      persons: persons
    })
  }

  togglePersonsHandler = () => {
    const doesShow =this.state.showPerson;
    this.setState({
      showPerson: !doesShow
    });
  }

  render() {

    let persons = null;
    let btnClass = '';

    if(this.state.showPerson){
      persons = (
        <div>
          {this.state.persons.map((person, index) => {
            return (
              <ErrorBoundary key={person.id}>
            <Person 
             click={() =>this.deletePersonHandler(index)}
             name={person.name} 
             age={person.age} 
             changed={((event) => this.switchNameHandler(event, person.id))} /> 
             </ErrorBoundary>
         )
       })}
        </div> 
      )
      btnClass = classes.Red;
    }

    const assignedClasses = [];
    
    if(this.state.persons.length <= 2){
      assignedClasses.push(classes.red); //
    }
    if (this.state.persons.length <= 1) {
      assignedClasses.push(classes.bold); //
    }


    return (
      <div className={classes.App}>
       <h1>Hi, I'm React App</h1>
       <p className={assignedClasses.join(' ')}>This is Working</p> 
        <button
          className={btnClass}
        onClick={this.togglePersonsHandler}>Switch Names
        </button>   
        {/* <button onClick={() => this.switchNameHandler('Hulya!')}>Switch Names</button> Alternative way to bind  */}
        {persons}
      </div>
    );
  }
}

export default App;
