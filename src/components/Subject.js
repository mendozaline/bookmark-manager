import React, { Component } from 'react';

export default class Subject extends Component {
  constructor(props) {
    super(props)
    // This binding is necessary to make `this` work in the callback
    this.handleClick = this.handleClick.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleTyping = this.handleTyping.bind(this)
    this.dropDown = this.dropDown.bind(this)
    this.dropDownSub = this.dropDownSub.bind(this)

    this.state = {
      isClicked: false,
      playlist: false,
      dropdownUrl: ''
    }
  } //end constructor

  handleClick() {
    this.setState(prevState => ({
      isClicked: !prevState.isClicked
    }));
  }

  handleTyping(event) {
    const target = event.target
    const name = target.name
    const value = target.type === 'checkbox' ? target.checked : target.value
    //ternary
    console.log("primary name: ", name)
    console.log("primary value: ", value)

    this.setState({
      [name]: value
    })
//    console.log("title: ", this.state.title)
//    console.log("url: ", this.state.url)
//    console.log("playlist boolean: ", this.state.playlist)
  }

  handleSubmit(event) {
    event.preventDefault();
    console.log('STATE:' +
                '\ntitle: ' +  this.state.title + 
                '\nurl: ' + this.state.url + 
                '\nplaylist: ' + this.state.playlist + 
                '\nlinks', this.state.links)

    const newRes = {
      title: this.state.title,
      url: this.state.url,
      playlist: this.state.playlist,
      links: this.state.links
    }
    this.props.addRes(this.props.i, newRes)
    this.setState({
      title: '',
      url: '',
      playlist: false, //needs to switch back to false/unchecked
                        //!this.state.playlist
      playlistTitle: '',
      playlistUrl: '',
      links: [],
    });
  }

  dropDown(event) {
    event.preventDefault()
    console.log('dropdown value: ', event.target.value)
    this.setState({
      dropdownUrl: event.target.value
    })
  }

  dropDownSub(event) {
    event.preventDefault()
    window.open(this.state.dropdownUrl)
  }

  render() {

    let resources = null

    let linksOrTitle = this.props.subject.topics.map((t, i) => {
      if (t.playlist) {
        return  <li key={i}>
                  {t.title}
                  <br/>
                  <form onSubmit={this.dropDownSub}>
                    <label>
                      Pick your video:
                      <select value={this.state.selected} onChange={this.dropDown}>
                        <option value="">Select option</option>
                          {t.links.map((l, j) => {
                            return  <option key={j} value={l.url}>
                                      {l.title}
                                    </option>
                          }) }
                      </select>
                    </label>
                    <input type="submit" value="Submit" />
                  </form>
                  <p></p>
                </li>
      } else {
        return  <li key={i}>
                  <a href={t.url}>{t.title}</a>
                  <p></p>
                </li>
      }
    })

    if (this.state.isClicked) {
      resources = linksOrTitle
    } else {
      resources = null
    }

    return(
      <div>
        <h2 onClick={this.handleClick}>
          {this.props.subject.subject}
        </h2>

        <ul>
          {resources}
        </ul>

      </div>
    )
  }
}
