import React, { PureComponent } from 'react';
import classes from './App.css';
import Persons from '../components/Persons/Persons';
import Cockpit from '../components/Cockpit/Cockpit';
import withClass from '../hoc/withClass';
import Aux from '../hoc/Aux';


class App extends PureComponent {
  
  constructor(props){
    super(props);
    console.log('[App.js] Inside Constructor', props);
    this.state = {
      persons: [
        { id: '001', name: 'Artur', age: 22 },
        { id: '002', name: 'Max', age: 32 },
        { id: '003', name: 'Oleg', age: 42 }
      ],
      otherValue: 'String',
      showPerson: false,
      toggleClickCounter: 0
    }
  }

  componentWillMount(){
    console.log('[App.js] Inside componentWillMount', this.props);
  }
  componentDidMount() {
    console.log('[App.js] Inside componentDidMount', this.props);
  }

  // shouldComponentUpdate(nextProps, nextState) {
  //   console.log('[Update App.js] Inside shouldComponentUpdate', nextProps, nextState);
  //   return nextState.persons !== this.state.persons 
  //     || nextState.showPerson !== this.state.showPerson;
  // }
  componentWillUpdate(nextProps, nextState) {
    console.log('[Update App.js] Inside componentWillUpdate', nextProps, nextState);
  }
  componentDidUpdate() {
    console.log('[Update App.js] Inside componentDidUpdate')
  }

  // state = {
  //   persons: [
  //     {id: '001', name: 'Artur', age: 22},
  //     {id: '002', name: 'Max', age: 32},
  //     {id: '003', name: 'Oleg', age: 42}  
  //   ],
  //   otherValue: 'String',
  //   showPerson: false
  // }

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
    this.setState( (prevState, props) => {
      return {
        showPerson: !doesShow,
        toggleClickCounter: prevState.toggleClickCounter + 1
      }
    })
  }

  render() {
    console.log('[App.js] Inside render', this.props);
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
      <Aux>
        <button onClick={() => this.setState({showPerson: true})}>Show Persons</button>
        <Cockpit 
        appTitle={this.props.title}
        showPerson={this.state.showPerson}
        persons={this.state.persons}
        clicked={this.togglePersonsHandler}/>
          {persons}
      </Aux>
    );
  }
}

export default withClass(App, classes.App);
