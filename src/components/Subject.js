import React, { Component } from 'react';

export default class Subject extends Component {
  constructor(props) {
    super(props)
    // This binding is necessary to make `this` work in the callback
    this.handleClick = this.handleClick.bind(this);
    this.handleClick2 = this.handleClick2.bind(this);

    this.state = {
      isClicked: false,
      isClicked2: false
    }
  }

  handleClick() {
    this.setState(prevState => ({
      isClicked: !prevState.isClicked
    }) );

    console.log(this.state.isClicked);

  }

  handleClick2() {
    this.setState(prevState => ({
      isClicked2: !prevState.isClicked2
    }) );

    console.log(this.state.isClicked2);

  }

  render() {
    console.log("p1: ", this.props)
    console.log("p2: ", this.props.subject)
    console.log("p3: ", this.props.subject.topics)
    console.log("p4: ", this.props.subject.topics[0].playlist)

    let resources = null

    let linksOrTitle = this.props.subject.topics.map((t, i) => {
      if (t.playlist) {
        return  <div key={i}>
                  <p onClick={this.handleClick2}>{t.title}</p>
                  <ul>
                      {t.links.map((l, j) => {
                        if (this.state.isClicked2) {
                          return  <li key={j}>
                                    <a href={l.url}>{l.title}</a>
                                  </li>
                        } else {
                          return null
                        }
                      }) }
                    </ul>
                </div>
      } else {
        return  <p key={i}>
                  <a href={t.url}>{t.title}</a>
                </p>
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
        {resources}
      </div>
    )
  }
}
