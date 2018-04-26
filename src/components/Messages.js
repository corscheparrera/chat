import React, { Component } from 'react'

export default class Messages extends Component {
  renderMessanges = (data, i) => {
    return (
      <div key={i}>
        {data.user.name}: {data.text}
      </div>
    )
  }
  render() {
    return this.props.chat.map(this.renderMessanges)
  }
}
