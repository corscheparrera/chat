import React, {Component} from 'react'
import Chat from './Chat.js'
import {Grid, Row, Col} from 'react-bootstrap'

const chatPath = 'all-chat/chat-V68h7qVsHiWsIyLcx0T0pC2qrfQ2'
class App extends Component {
  render() {
    return (
      <Grid >
        <Row>

          <h1 style={{
            textAlign: "center",
            paddingBottom: 30,
          }}>Chat Room
          </h1>

        </Row>
        <Row>
          <Col sm={12} >
            <Chat path={chatPath}/>
          </Col>
        </Row>
      </Grid>
    )
  }
}
export default App
