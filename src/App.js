import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor() {
    super();

    this.state = {
      resource: "https://facebook.github.io/react/docs/thinking-in-react.html"
    };
  }

// event handlers here

  render() {
    return (
      <a href={this.state.resource}>Thinking in React</a>
    );
  }
}

export default App;
