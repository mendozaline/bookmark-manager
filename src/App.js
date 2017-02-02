import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor() {
    super();

    this.state = {
      resources: [
        {title: "FunFunFunction Functional Programming Playlist",
         url: "https://www.youtube.com/watch?v=BMUiFMZr7vk&list=PL0zVEGEvSaeEd9hlmCXrk5yUyqUag-n84"},
        {title: "FunFunFunction var, let, and const",
         url: "https://www.youtube.com/watch?v=sjyJBL5fkp8"},
        {title: "FunFunFunction arrow functions",
         url: "https://www.youtube.com/watch?v=6sQDTgOqh-I"},
        {title: "Kyle Robinson Young ES6 Essentials",
         url: "https://www.youtube.com/watch?v=CozSF5abcTA"},
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
