import React, { Component } from 'react'
import fire from './Firebase.js'
import firebase from 'firebase'

const database = fire.database()

class Chat extends Component {
  constructor(props) {
    super(props)
    this.state = {
      chat: [],
      user: {
        name: 'Maître Harvey',
      },
    }
  }

  startChat = async () => {
    try {
      await database.goOnline()
    } catch (e) {
      console.log(e)
    }
  }
  _handleClick = () => {
    let msgUser = this.state.user
    let msgText = this.userInput.value
    let messagesRef = database.ref(`${this.props.path}`)
    messagesRef.push({
      text: msgText,
      user: msgUser,
      createdAt: firebase.database.ServerValue.TIMESTAMP,
    })
    this.userInput.value = ''
  }

  // send the message to the Backend
  //   sendMessage(message) {
  //     let messagesRef = database().ref(`all-chat/chat-${this.uid}`)
  //     for (let i = 0; i < message.length; i++) {
  //       messagesRef.push({
  //         text: msgText,
  //         user: msgUser,
  //         createdAt: database.ServerValue.TIMESTAMP,
  //       })
  //     }
  //   }
  componentWillMount() {
    this.startChat()
  }
  componentDidMount() {
    database.ref(`${this.props.path}`).on('child_added', x => this.updateState(x.val()))
  }

  updateState = data => {
    this.setState({
      chat: this.state.chat.concat([data]),
    })
  }

  renderMessanges = (data, i) => {
    return (
      <div key={i}>
        {data.user.name}: {data.text}
      </div>
    )
  }

  render() {
    return (
      <div className="App">
        {/* <h3>{this.state.user}</h3> */}
        <input ref={r => (this.userInput = r)} id="text" type="text" placeholder="Message" />
        <br />
        <br />
        <button onClick={this._handleClick} id="post">
          Post
        </button>
        <br />
        <br /> {this.state.chat.map(this.renderMessanges)}
      </div>
    )
  }
}

export default Chat
