import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Main from './components/main';

class App extends Component {
  world = 'mundo';
  render() {
    return (
      <div>
        <Main></Main>
      </div>
    );
  }
}

export default App;
