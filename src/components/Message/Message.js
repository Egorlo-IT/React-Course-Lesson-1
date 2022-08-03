import Picture from "../../image/man.jpg";

import "./Message.css";

function Message(props) {
  return (
    <div className="container">
      <img src={Picture} alt="doctor" />
      <h1 className="message">{props.message}</h1>
    </div>
  );
}

export default Message;
