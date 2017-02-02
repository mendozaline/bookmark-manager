import React, { Component } from 'react';

export default class Subject extends Component {
  constructor(props) {
    super(props)
  }

  // event handlers

  render() {
    console.log("props1: ", this.props)
    console.log("props2: ", this.props.subject)
    console.log("props3: ", this.props.subject.resources[0].title)
    console.log("props4: ", this.props.subject.resources[0].url)

    return(
      <div>
        <h3>{this.props.subject.subject}</h3>
        <ul>
          {this.props.subject.resources.map((r, i) => {
            return <li key={i}><a href={r.url}>{r.title}</a></li>}) }
        </ul>
      </div>
    )
  }

}
