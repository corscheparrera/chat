import React, {Component} from 'react'
import fire from './Firebase.js'
import firebase from 'firebase'
import {Grid, Row, Col} from 'react-bootstrap'

import Messages from './Messages'
import ChatInput from './ChatInput'

const database = fire.database()
const avocat = {
  name: 'Maître Harvey'
}

export default class Chat extends Component {
  constructor(props) {
    super(props)
    this.state = {
      chat: []
    }
  }

  startChat = async() => {
    try {
      await database.goOnline()
    } catch (e) {
      console.log(e)
    }
  }

  componentWillMount() {
    this.startChat()
  }
  componentDidMount() {
    database
      .ref(`${this.props.path}`)
      .on('child_added', x => this.updateState(x.val()))
  }

  updateState = data => {
    this.setState({
      chat: this
        .state
        .chat
        .concat([data])
    })
  }

  render() {
    return (

      <Grid className="App">
        <Row>
          <Col sm={11} smOffset={1}>
            <Messages chat={this.state.chat}/>
          </Col>
        </Row>
        <Row>
          <Col sm={6} smOffset={3}>

            <ChatInput user={avocat} path={this.props.path}/>
          </Col>
        </Row>

      </Grid>

    )
  }
}
