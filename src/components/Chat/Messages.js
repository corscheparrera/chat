import Moment from "react-moment";
import React from "react";
const msgStyleLawyer = {
  color: "#FFFFFF",
  backgroundColor: "#0074D9",
  width: "40%",
  marginLeft: "45%",
  padding: 20,
  borderColor: "transparent",
  borderRadius: 5,
  marginBottom: 10
};
const msgStyleClient = {
  backgroundColor: "#A9A9A9",
  width: "40%",
  padding: 20,
  borderColor: "transparent",
  borderRadius: 5,
  marginBottom: 10,
  color: "#FFFFFF"
};

function renderMessanges(data, i) {
  return (
    <div
      style={
        data.user.email === "Maître Harvey" ? msgStyleLawyer : msgStyleClient
      }
      key={i}
    >
      <div>
        {data.user.email}: {data.text}
      </div>
      <div>
        <Moment fromNow>{data.createdAt}</Moment>
        {" / "}
        <Moment format="YYYY/MM/DD">{data.createdAt}</Moment>
      </div>
    </div>
  );
}
const Messages = props => <div>{props.chat.map(renderMessanges)}</div>;
export default Messages;
