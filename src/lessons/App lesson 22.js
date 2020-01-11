import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { render } from '@testing-library/react';

class App extends Component {
  constructor() {
    super();
    this.state = {
      string: 'the ruff gang',
      monsters: [
        {name: 'Frank', id: 'a1'},
        {name: 'Drack', id: 'a2'},
        {name: 'Zombi', id: 'a3'}
      ]
    };
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
