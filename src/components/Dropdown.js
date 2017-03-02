import React, { Component } from 'react'

export default class Dropdown extends Component {
  constructor(props) {
    super(props)
    this.dropDown = this.dropDown.bind(this)
    this.dropDownSub = this.dropDownSub.bind(this)
    this.state = {
      dropdownUrl: ''
    }
  }

  dropDown(event) {
    event.preventDefault()
    this.setState({
      dropdownUrl: event.target.value
    })
  }

  dropDownSub(event) {
    event.preventDefault()
    window.open(this.state.dropdownUrl)
  }

  render() {
    let Here = this.props.t.links.map((l, j) => {
      return (
        <option key={j} value={l.url}>
          {l.title}
        </option>
      )
    })
        
    return(
      <form onSubmit={this.dropDownSub}>
        <label>
          Pick your video:
          <select value={this.state.selected} onChange={this.dropDown}>
            <option value="">Select a video</option>
            {Here}
          </select>
        </label>
        <input type="submit" value="Submit" />
      </form>
    )

  }

}
