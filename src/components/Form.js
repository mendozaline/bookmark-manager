import React, { Component } from 'react'

export default class Form extends Component {
  constructor(props) {
    super(props)
    this.handleTyping = this.handleTyping.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
    this.updatePlaylistObj = this.updatePlaylistObj.bind(this)
    this.insertPlaylistObj = this.insertPlaylistObj.bind(this)

    this.state = {
      title: '',
      url: '',
      playlist: false,
      playlistTitle: '',
      playlistUrl: '',
      links: [],
    }

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

  render() {
    let submitPlaylistLinks = null
    if (this.state.playlist) {
      submitPlaylistLinks = (
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
      submitPlaylistLinks = null
    }

    return(
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

          {submitPlaylistLinks}

          <br />

          <button onClick={this.handleSubmit}>Submit</button>
        </form>
      </div>
    )

  }

}
