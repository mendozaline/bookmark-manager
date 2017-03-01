import React, { Component } from 'react'
import Form from './Form.js'
import Resources from './Resources.js'

export default class Subject extends Component {
  constructor(props) {
    super(props)
    this.handleClick = this.handleClick.bind(this)
    this.handleDel = this.handleDel.bind(this)

    this.state = {
      isClicked: false,
    }
  }

  handleClick() {
    this.setState(prevState => ({
      isClicked: !prevState.isClicked
    }));
  }

  handleDel(event) {
    event.preventDefault()
    this.props.removeSub(this.props.i)
  }

  render() {
    //console.log('subject:', this.props.subject)
    let currentResources = null
    let addResource = null
    if (this.state.isClicked) {
      currentResources = <Resources 
                           items={this.props.subject}
                           removeRes={this.props.removeRes}
                           i={this.props.i}
                           />
      addResource = <Form i={this.props.i} addRes={this.props.addRes} />
    } else {
      currentResources = null
      addResource = null
    }

    return(
      <div>
        <h2 onClick={this.handleClick}>
          {this.props.subject.subject}
        </h2>
        <button id="del" onClick={this.handleDel}>x</button>
        {currentResources}
        {addResource}
        <br/>
        <br/>
      </div>
    )
  }
}
