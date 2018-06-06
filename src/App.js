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
    otherValue: 'String'
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

  nameChangedHandler = (event) => {
    this.setState({
      persons: [
        { name: 'Max', age: 22 },
        { name: event.target.value, age: 32 },
        { name: 'Oleg', age: 142 }
      ]
    })
  }

  render() {
    return (
      <div className="App">
       <h1>Hi, I'm React App</h1>
       <p>This is Working</p>
        <button onClick={this.switchNameHandler.bind(this, 'Looser')}>Switch Names</button>   
        {/* <button onClick={() => this.switchNameHandler('Hulya!')}>Switch Names</button> Alternative way to bind  */}
       <Person 
        name={this.state.persons[0].name} 
        age={this.state.persons[0].age}/>
       <Person 
        name={this.state.persons[1].name} 
        age={this.state.persons[1].age}
        click={this.switchNameHandler.bind(this, 'Not A Looser!')}
        changed={this.nameChangedHandler}>My Hobbies is: Soccer</Person>
       <Person 
        name={this.state.persons[2].name} 
        age={this.state.persons[2].age}/>
      </div>
    );
  }
}

export default App;
