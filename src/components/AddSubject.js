import React, { Component } from 'react';

export default class AddSubject extends Component {
  constructor(props) {
    super(props)
    this.handleTyping = this.handleTyping.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
    this.state = {
      subject: '',
    }
  } //end constructor

  handleTyping(event) {
    console.log('name: ', event.target.name)
    console.log('value: ', event.target.value)

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
    console.log('nS: ', newSubject)
    this.props.addSub(newSubject)
  }

  render() {

    return (
      <form onSubmit={this.handleSubmit}>
        <label htmlFor="subject">Add subject:</label>
        <input
          name="subject"
          id="subject"
          type="string"
          value={this.state.subject}
          onChange={this.handleTyping} />

          <br />

        <button onClick={this.handleSubmit}>Submit</button>
      </form>
      
    ) //end return
  } //end render

}
