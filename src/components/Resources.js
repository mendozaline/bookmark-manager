import React, { Component } from 'react'

export default class Resources extends Component {
  constructor(props) {
    super(props)
    this.dropDown = this.dropDown.bind(this)
    this.dropDownSub = this.dropDownSub.bind(this)
    this.handleDel = this.handleDel.bind(this)

    this.state = {
      dropdownUrl: '',
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

  handleDel(event) {
    event.preventDefault()
//    console.log('i:', this.props.items)
    this.props.removeRes(this.props.i, this.props.items)
  }

  render() {
    let dropdownOrLink = this.props.items.topics.map((t, i) => {
      if (t.playlist) {
        return  (
          <li key={i}>
            {t.title}
            <button id="del" onClick={this.handleDel}>x</button>
            <br/>

            <form onSubmit={this.dropDownSub}>
              <label>
                Pick your video:
                <select value={this.state.selected} onChange={this.dropDown}>
                  <option value="">Select a video</option>
                  {t.links.map((l, j) => {
                    return (
                      <option key={j} value={l.url}>
                        {l.title}
                      </option>
                    )
                  }) }
                </select>
              </label>
              <input type="submit" value="Submit" />
            </form>

            <br/>
          </li>
        )
      } else {
        return (
          <li key={i}>
            <a href={t.url}>{t.title}</a>
            <button id="del" onClick={this.handleDel}>x</button>
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
