import React, { Component } from 'react';
import classes from './App.css';
import Persons from '../components/Persons/Persons';
import Cockpit from '../components/Cockpit/Cockpit';


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
    

    if(this.state.showPerson){
      persons = 
          <Persons 
          persons={this.state.persons} 
          clicked={this.deletePersonHandler}
          changed={this.switchNameHandler}
          />
    }

    return (
      <div className={classes.App}>
      <Cockpit 
      showPerson={this.state.showPerson}
      persons={this.state.persons}
      clicked={this.togglePersonsHandler}/>
        {persons}
      </div>
    );
  }
}

export default App;
