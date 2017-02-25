import React, { Component } from 'react';

export default class Subject extends Component {
  constructor(props) {
    super(props)
    this.handleClick = this.handleClick.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleTyping = this.handleTyping.bind(this)
    this.dropDown = this.dropDown.bind(this)
    this.dropDownSub = this.dropDownSub.bind(this)
    this.updatePlaylistObj = this.updatePlaylistObj.bind(this)
    this.insertPlaylistObj = this.insertPlaylistObj.bind(this)
    this.handleDel = this.handleDel.bind(this)

    this.state = {
      isClicked: false,
      playlist: false,
      dropdownUrl: '',
      title: '',
      url: '',
      playlistTitle: '',
      playlistUrl: '',
      links: [],
    }
  }

  handleClick() {
    this.setState(prevState => ({
      isClicked: !prevState.isClicked
    }));
  }

  handleTyping(event) {
    const target = event.target
    const name = target.name
    const value = target.type === 'checkbox' ? target.checked : target.value

    this.setState({
      [name]: value
    })
  }

  handleSubmit(event) {
    event.preventDefault();
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
      playlist: false,
      playlistTitle: '',
      playlistUrl: '',
      links: [],
    });
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

  updatePlaylistObj(event) {
    event.preventDefault()
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  insertPlaylistObj(event) {
    event.preventDefault()
    const arr = this.state.links
    arr.push({
      title: this.state.playlistTitle,
      url: this.state.playlistUrl
    })
    this.setState({
      playlistTitle: '',
      playlistUrl: ''
    })
  }

  handleDel(event) {
    event.preventDefault()
    this.props.removeSub(this.props.i)
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
                        <option value="">Select a video</option>
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

    let submitPlaylistRes = null
    if (this.state.playlist) {
      submitPlaylistRes = (
        <div>
            <label htmlFor="playlistTitle">Add playlist title:
              <input
                name="playlistTitle"
                id="playlistTitle"
                type="string"
                value={this.state.playlistTitle}
                onChange={this.updatePlaylistObj} />
            </label>
            <br/>
            <label htmlFor="playlistUrl">Add playlist url:
              <input
                name="playlistUrl"
                id="playlistUrl"
                type="string"
                value={this.state.playlistUrl}
                onChange={this.updatePlaylistObj} />
            </label>

            <br/>

            <button onClick={this.insertPlaylistObj}>Add to playlist</button>

        </div>
      )
    } else {
            submitPlaylistRes = null
    }

    let resForm = (
      <div>
        <strong>Add a new resource:</strong>
        <form onSubmit={this.handleSubmit}>
          <label htmlFor="title">Title:</label>
          <input
            name="title"
            id="title"
            type="string"
            value={this.state.title}
            onChange={this.handleTyping} />

          <br />

          <label htmlFor="url">Link:</label>
          <input
            name="url"
            id="url"
            type="string"
            value={this.state.url}
            onChange={this.handleTyping} />

          <br />

          <label htmlFor="playlist">Video playlist?:
            <input
              name="playlist"
              id="check"
              type="checkbox"
              value={this.state.playlist}
              onChange={this.handleTyping} />
          </label>

          <br />

          {submitPlaylistRes}

          <br />

          <button onClick={this.handleSubmit}>Submit</button>
        </form>
      </div>
    )

    let addRes = null
    if (this.state.isClicked) {
      resources = linksOrTitle
      addRes = resForm
    } else {
      resources = null
      addRes = null
    }

    return(
      <div>
        <h2 onClick={this.handleClick}>
          {this.props.subject.subject}
        </h2>
        <button id="del" onClick={this.handleDel}>-</button>
        <ul>
          {resources}
        </ul>
        {addRes}
      </div>
    )
  }
}
