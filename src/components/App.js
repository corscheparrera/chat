import React, { Component } from 'react'
import Chat from './Chat.js'

const chatPath = 'all-chat/chat-V68h7qVsHiWsIyLcx0T0pC2qrfQ2'
class App extends Component {
  render() {
    return (
      <div>
        <h1>Chat Room </h1>
        <Chat path={chatPath} />
      </div>
    )
  }
}
export default App
