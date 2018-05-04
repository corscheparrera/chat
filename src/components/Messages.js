import React, {Component} from 'react'
import Moment from 'react-moment';

export default class Messages extends Component {

  renderMessanges = (data, i) => {
    return (

      <div
        style={data.user.name === 'Maître Harvey'
        ? msgStyleLawyer
        : msgStyleClient}
        key={i}>
        <div>
          {data.user.name}: {data.text}
        </div>
        <div>
          <Moment fromNow>{data.createdAt}</Moment>
          { ' / ' }<Moment format="YYYY/MM/DD">{data.createdAt}</Moment>
        </div>

      </div>

    )
  }
  render() {
    return <div >
      {this
        .props
        .chat
        .map(this.renderMessanges)}

    </div>

  }
}
const msgStyleLawyer = {
  color: "#FFFFFF",
  backgroundColor: '#0074D9',
  width: '40%',
  marginLeft: '45%',
  padding: 20,
  borderColor: 'transparent',
  borderRadius: 5,
  marginBottom: 10
};
const msgStyleClient = {
  backgroundColor: '#A9A9A9',
  width: '40%',
  padding: 20,
  borderColor: 'transparent',
  borderRadius: 5,
  marginBottom: 10,
  color: "#FFFFFF"
};
