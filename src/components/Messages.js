import React, {Component} from 'react'

export default class Messages extends Component {

  renderMessanges = (data, i) => {
    return (
      <div
        style={data.user.name === 'Maître Harvey'
        ? msgStyleLawyer
        : msgStyleClient}
        key={i}>
        {data.user.name}: {data.text}
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
  backgroundColor: '#F4A460',
  width: '40%',
  marginLeft: '45%',
  padding: 20,
  borderColor: 'transparent',
  borderRadius: 5,
};
const msgStyleClient = {
  backgroundColor: '#A9A9A9',
  width: '40%',
  padding: 20,
  borderColor: 'transparent',
  borderRadius: 5
};
