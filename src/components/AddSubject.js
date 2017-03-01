import React, { Component } from 'react';

export default class AddSubject extends Component {
  constructor(props) {
    super(props)
    this.handleTyping = this.handleTyping.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
    this.state = {
      subject: '',
    }
  }

  handleTyping(event) {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  handleSubmit(event) {
    event.preventDefault()
    const newSubject = {
      subject: this.state.subject,
      topics: [],
    }
    this.props.addSub(newSubject)
  }

  render() {

    return (
      <form onSubmit={this.handleSubmit}>
        <label htmlFor="subject"><strong>Add new subject:</strong></label>
        <input
          name="subject"
          id="subject"
          type="string"
          value={this.state.subject}
          onChange={this.handleTyping} />
        <button id="add" onClick={this.handleSubmit}>+</button>

        <br />
      </form>
      
    )
  }

}
