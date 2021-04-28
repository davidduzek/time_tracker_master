import React from "react";
import "./Chat.css";

import StarBorderOutlinedIcon from "@material-ui/icons/StarBorderOutlined";
import InfoOutlinedIcon from "@material-ui/icons/InfoOutlined";
import FiberManualRecordIcon from "@material-ui/icons/FiberManualRecord";

import ChatInput from "./ChatInput";
import Message from "./Message";

function Chat() {
  return (
    <div className="chat">
      <div className="chat__header">
        <div className="header__left">
          <h4>
            <FiberManualRecordIcon /> Your Room
          </h4>
          <StarBorderOutlinedIcon />
        </div>
        <div className="header__right">
          <p>
            <InfoOutlinedIcon /> Details
          </p>
        </div>
      </div>
      <div className="chat__messages">
        <Message />
        <Message />
        <Message />
        <Message />
      </div>
      <ChatInput />
    </div>
  );
}

export default Chat;
