import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { render } from '@testing-library/react';

class App extends Component {
  constructor() {
    super();
    this.state = {
      string: 'the ruff gang',
      monsters: [] //comment
    };
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    //.then(users => console.log(users))
    .then(users => this.setState({monsters: users}));
    
  }

  render() {
    return (
      <div className="App">
          {
            <h3>'Collers For Kings'</h3>,
            this.state.monsters.map(
              monster => 
              <h1 key={monster.id}> 
                {monster.name} 
                </h1>)
          }
      </div>
    );
  }
}

export default App;
