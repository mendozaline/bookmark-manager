import React, { Component } from 'react';
import Subject from './components/Subject.js';

class App extends Component {
  constructor() {
    super();

    this.state = {resources: [
      {
        subject: "Functional Programming Basics",
        topics: [
          {
            title: "FunFunFunction - Functional Programming Playlist",
            url: "https://www.youtube.com/watch?v=BMUiFMZr7vk&list=PL0zVEGEvSaeEd9hlmCXrk5yUyqUag-n84",
            playlist: true,
            links: [
              {title: "Part 1 - Higher-order functions",
               url: "https://www.youtube.com/watch?v=BMUiFMZr7vk"},
              {title: "Part 2 - Map",
               url: "https://www.youtube.com/watch?v=bCqtb-Z5YGQ"},
              {title: "Part 3 - Reduce basics",
               url: "https://www.youtube.com/watch?v=Wl98eZpkp-c"},
              {title: "Part 4 - Reduce advanced",
               url: "https://www.youtube.com/watch?v=1DMolJ2FrNY"}
            ]
          }
        ]
      },

      {
        subject: "ES6",
        topics: [
          {
            title: "FunFunFunction: ES6 JavaScript Features",
            url: "",
            playlist: true,
            links: [
              {title: "var, let and const - What, Why and How",
               url: "https://www.youtube.com/watch?v=sjyJBL5fkp8"},
              {title: "Arrow functions in JavaScript - What, Why and How",
               url: "https://www.youtube.com/watch?v=6sQDTgOqh-I"}
            ]
          },
          {
            title: "Kyle Robinson Young: Essential ES6 / ES2015 JavaScript",
            url: "https://www.youtube.com/watch?v=CozSF5abcTA",
            playlist: false,
          },
          {
            title: "JavaScript Scene: JavaScript ES6+: var, let, or const?",
            url: "https://medium.com/javascript-scene/javascript-es6-var-let-or-const-ba58b8dcde75",
            playlist: false
          },
          {
            title: "ES6Interactive Guide",
            url: "http://stack.formidable.com/es6-interactive-guide/#/",
            playlist: true,
            links: [
              {title: "Arrow functions",
               url: "http://stack.formidable.com/es6-interactive-guide/#/"},
              {title: "Classes",
               url: "http://stack.formidable.com/es6-interactive-guide/#/classes"},
              {title: "Concise methods",
               url: "http://stack.formidable.com/es6-interactive-guide/#/concise-methods"},
              {title: "Destructuring",
               url: "http://stack.formidable.com/es6-interactive-guide/#/destructuring"},
              {title: "Object literals",
               url: "http://stack.formidable.com/es6-interactive-guide/#/object-literals"},
              {title: "Spread operator",
               url: "stack.formidable.com/es6-interactive-guide/#/spread-operator"}
            ]
          },
          {
            title: "LearnCode",
            url: "",
            playlist: true,
            links: [
              {title: "Javascript ES6 Cheatsheet #1 - the best of JS ES6", url: "https://www.youtube.com/watch?v=AfWYO8t7ed4"},
              {title: "Javascript ES6 Cheatsheet #2 - the best of JS ES6",
               url: "https://www.youtube.com/watch?v=LmL0Gh193M0"}
            ]
          },
          {
            title: "The New Boston",
            url: "https://www.youtube.com/watch?v=ZJZfIw3P8No&list=PL6gx4Cwl9DGBhgcpA8eTYYWg7im72LgLt",
            playlist: true,
            links: [
              {title: "Tutorial 1 - Let",
               url: "http://stack.formidable.com/es6-interactive-guide/#/"},
              {title: "Tutorial 2 - Arrow Functions",
               url: "https://www.youtube.com/watch?v=wOwnOFb-SNA"},
              {title: "Tutorial 3 - Template Literals",
               url: "https://www.youtube.com/watch?v=s5Py5Ibx1vo"},
              {title: "Tutorial 4 - Spread Operator",
               url: "https://www.youtube.com/watch?v=oTuM8aS62Bg"},
              {title: "Tutorial 5 - Classes",
               url: "https://www.youtube.com/watch?v=XHYvWYbqgJE"},
              {title: "Tutorial 6 - Inheritance",
               url: "https://www.youtube.com/watch?v=S_8WrECd0PU"}
            ]
          },

          {
            title: "Egghead.io: Learn ES6 (ECMAScript 2015)",
            url: "https://egghead.io/courses/learn-es6-ecmascript-2015",
            playlist: true,
            links: [
              {title: "Arrow Function => in ES6",
               url: "https://egghead.io/lessons/arrow-function"},
              {title: "The let keyword in ES6",
               url: "https://egghead.io/lessons/the-let-keyword"},
              {title: "Default Values for Function Parameters in ES6",
               url: "https://egghead.io/lessons/ecmascript-6-default-values-for-function-parameters"},
              {title: "const Declarations in es6 (ES2015)",
               url: "https://egghead.io/lessons/ecmascript-6-const-declarations-in-es6-es2015"},
              {title: "Using the ES6 spread operator",
               url: "https://egghead.io/lessons/ecmascript-6-using-the-es6-spread-operator"},
              {title: "Use Template Literals in ES6",
               url: "https://egghead.io/lessons/ecmascript-6-string-templates"},
              {title: "Destructuring Assignment in ES6",
               url: "https://egghead.io/lessons/ecmascript-6-destructuring-assignment"},
            ]
          },
          {
            title: "Mindspace: ES6 JavaScript - The Basics",
            url: "https://www.youtube.com/watch?v=IEf1KAcK6A8",
            playlist: false,
          },
        ]
      },

      {
        subject: "Intro to React",
        topics: [
          {
            title: "React Documentation: Thinking in React",
            url: "https://facebook.github.io/react/docs/thinking-in-react.html",
            playlist: false,
          },
          {
            title: "Mindspace React Tutorial",
            url: "https://www.youtube.com/watch?v=JPT3bFIwJYA&list=PL55RiY5tL51oyA8euSROLjMFZbXaV7skS",
            playlist: true,
            links: [
              {title: "ReactJS Basics - #1 What is React?",
               url: "https://www.youtube.com/watch?v=JPT3bFIwJYA"},
              {title: "ReactJS Basics - #3 First Component",
               url: "https://www.youtube.com/watch?v=G40iHC-h0c0"},
              {title: "ReactJS Basics - #4 Multiple Components",
               url: "https://www.youtube.com/watch?v=9wK4gHoOh1g"},
              {title: "ReactJS Basics - #5 Outputting dynamic Data",
               url: "https://www.youtube.com/watch?v=1JZEmYwRGoU"},
              {title: "ReactJS Basics - #6 Passing Data with Props",
               url: "https://www.youtube.com/watch?v=GIU8ekYndKw"}
            ]
          },
          {
            title: "LearnCode Academy React Tutorial",
            url: "https://www.youtube.com/watch?v=fd2Cayhez58&feature=youtu.be",
            playlist: true,
            links: [
              {title: "REACT JS TUTORIAL #2 - Reactjs Components & Rendering",
               url: "https://www.youtube.com/watch?v=fd2Cayhez58"},
              {title: "REACT JS TUTORIAL #3 - Composing Multiple React.js Components",
               url: "https://www.youtube.com/watch?v=vu_rIMPROoQ"},
              {title: "REACT JS TUTORIAL #4 - State vs Props & Application Data",
               url: "https://www.youtube.com/watch?v=qh3dYM6Keuw"}
            ]
          }
        ]
      },

      {
        subject: "State",
        topics: [
          {
            title: "Hacker Noon: React Stateless Functional Components: Nine Wins You Might Have Overlooked",
            url: "https://hackernoon.com/react-stateless-functional-components-nine-wins-you-might-have-overlooked-997b0d933dbc",
            playlist: false,
          },
          {
            title: "Mindspace: ReactJS Basics",
            url: "",
            playlist: true,
            links: [
              {title: "ReactJS Basics - #8 State of Components",
               url: "https://www.youtube.com/watch?v=e5n9j9n83OM"},
              {title: "ReactJS Basics - #10 Stateless Components",
               url: "https://www.youtube.com/watch?v=SEkfzqIgvTo"}
            ]
          }
        ]
      },

      {
        subject: "Event Handler",
        topics: [
          {
            title: "React Documentation: Handling Events",
            url: "https://facebook.github.io/react/docs/handling-events.html",
            playlist: false,
          },
          {
            title: "Mindspace: ReactJS Basics",
            url: "https://www.youtube.com/watch?v=OcM__8q6p4c&list=PL55RiY5tL51oyA8euSROLjMFZbXaV7skS&index=8",
            playlist: true,
            links: [
              {title: "ReactJS Basics - #7 Events & ReactJS",
               url: "https://www.youtube.com/watch?v=OcM__8q6p4c"},
              {title: "ReactJS Basics - #9 How does ReactJS update the DOM?",
               url: "https://www.youtube.com/watch?v=Iw2BLUjQo1E"}
            ]
          },
          {
            title: "LearnCode Academy React Tutorial",
            url: "https://www.youtube.com/watch?v=_D1JGNidMr4&feature=youtu.be",
            playlist: true,
            links: [
              {title: "REACT JS TUTORIAL #5 - Javascript Events & Data Changes in React",
               url: "https://www.youtube.com/watch?v=_D1JGNidMr4&feature=youtu.be"
              }
            ]
          },
          {
            title: "Smashing Magazine: Understanding JavaScript’s Function.prototype.bind",
            url: "https://www.smashingmagazine.com/2014/01/understanding-javascript-function-prototype-bind/",
            playlist: false,
          }
        ]
      },

      {
        subject: "Forms",
        topics: [
          {
            title: "LevelUpTuts: React For Everyone #14 - Controlled Inputs",
            url: "https://www.youtube.com/watch?v=BvtQMxekmH0",
            playlist: false,
          },
          {
            title: "React Documentation: Forms",
            url: "https://facebook.github.io/react/docs/forms.html",
            playlist: false,
          }
        ]
      }

    ]}
  }

  render() {
    console.log("state: ", this.state.resources)

    return (
      <div>
        {
          this.state.resources.map((r, i) => {
            return(
              <Subject key={i} subject={r}/>
            )
          })
        }
      </div>
    );
  }
}

export default App;
