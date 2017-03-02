import React, { Component } from 'react'
import Dropdown from './Dropdown.js'

export default class Resources extends Component {
  constructor(props) {
    super(props)
    this.handleDel = this.handleDel.bind(this)
    this.state = {
    }
  }

  handleDel(event) {
    event.preventDefault()
    this.props.removeRes(this.props.i, event.target.name)
  }

  render() {
    let dropdownOrLink = this.props.items.topics.map((t, i) => {
      if (t.playlist) {
        return  (
          <li key={i}>
            {t.title} 
            <button id="del" name={i} onClick={this.handleDel}>x</button>
            <br/>
            <Dropdown t={t} i={i} />
            <br/>
          </li>
        )
      } else {
        return (
          <li key={i}>
            <a href={t.url}>{t.title}</a>
            <button id="del" name={i} onClick={this.handleDel}>x</button>
            <br/>
            <br/>
          </li>
        )
      }
    })

    return (
      <ul>
        {dropdownOrLink}
      </ul>
    )

  }

}
