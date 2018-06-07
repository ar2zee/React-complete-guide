import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  state = {
    persons: [
      {name: 'Artur', age: 22},
      {name: 'Max', age: 32},
      {name: 'Oleg', age: 42}  
    ],
    otherValue: 'String',
    showPerson: false
  }

  switchNameHandler = (newName) => {
    // console.log('Clicked')
    this.setState({
      persons:[
        { name: newName, age: 22 },
        { name: 'Artur', age: 32 },
        { name: 'Oleg', age: 42 }
      ]
    })
  }

  deletePersonHandler = (personIndex) => {
    const persons = this.state.persons;
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
    const style = {
      backgroundColor: 'navy',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer'
    };

    let persons = null;

    if(this.state.showPerson){
      persons = (
        <div>
          {this.state.persons.map((person, index) => {
            return (
            <Person click={() =>this.deletePersonHandler(index)}
             name={person.name} age={person.age} />
            )
          })}
          
        </div> 
      )
    }

    return (
      <div className="App">
       <h1>Hi, I'm React App</h1>
       <p>This is Working</p>
        <button
        style={style} 
        onClick={this.togglePersonsHandler}>Switch Names
        </button>   
        {/* <button onClick={() => this.switchNameHandler('Hulya!')}>Switch Names</button> Alternative way to bind  */}
        {persons}
      </div>
    );
  }
}

export default App;
