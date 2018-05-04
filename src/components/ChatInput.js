import React, {Component} from 'react'
import fire from './Firebase.js'
import firebase from 'firebase'
import {Button} from 'react-bootstrap'

const database = fire.database()

const Messages = props => {
  const sendMessage = event => {
    // Stop the form from refreshing the page on submit
    event.preventDefault()
    let messagesRef = database.ref(`${props.path}`)
    messagesRef.push({text: this.userInput.value, user: props.user, createdAt: firebase.database.ServerValue.TIMESTAMP})
    this.userInput.value = ''
  }

  const _handleClick = () => {
    let messagesRef = database.ref(`${props.path}`)
    messagesRef.push({text: this.userInput.value, user: props.user, createdAt: firebase.database.ServerValue.TIMESTAMP})
    this.userInput.value = ''
  }
  return (
    <div>
      <form className="chat-input" onSubmit={sendMessage}>
        <input
          style={{
          marginTop: 30
        }}
          type="text"
          ref={r => (this.userInput = r)}
          placeholder="Envoyer un message..."
          required
          className="form-control"/>
      </form>
      <Button
  
        onClick={() => _handleClick()}
        style={{
        marginTop: 10
      }}>
        Envoyer
      </Button>
    </div>
  )
}
export default Messages

