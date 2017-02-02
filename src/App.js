import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor() {
    super();

    this.state = {
      resources: [
        {title: "Thinking in React",
         url: "https://facebook.github.io/react/docs/thinking-in-react.html"},
        {title: "Mindspace React Tutorial",
         url: "https://www.youtube.com/watch?v=JPT3bFIwJYA&list=PL55RiY5tL51oyA8euSROLjMFZbXaV7skS"},
        {title: "LearnCode Academy React Tutorial",
         url: "https://youtu.be/fd2Cayhez58"}]
    };
  }

  render() {
    return (
      <div>
        {this.state.resources.map((resource) => {
          return <a href={resource.url}>{resource.title}</a>
        })}
      </div>
    );
  }
}

export default App;
