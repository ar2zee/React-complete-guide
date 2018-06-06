import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  state = {
    persons: [
      {name: 'Artur', age: 22},
      {name: 'Max', age: 32},
      {name: 'Oleg', age: 42}  
    ]
  }

  switchNameHandler = () => {
    console.log('Clicked')
  }

  render() {
    return (
      <div className="App">
       <h1>Hi, I'm React App</h1>
       <p>This is Working</p>
       <button onClick={this.switchNameHandler}>Switch Names</button>
       <Person name={this.state.persons[0].name} age={this.state.persons[0].age}/>
       <Person name={this.state.persons[1].name} age={this.state.persons[1].age}>My Hobbies is: Soccer</Person>
       <Person name={this.state.persons[2].name} age={this.state.persons[2].age}/>
      </div>
    );
  }
}

export default App;
