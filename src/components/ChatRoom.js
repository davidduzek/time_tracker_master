import React from "react";

import "./ChatRoom.css";

function ChatRoom({ title }) {
  return (
    <div className="chatRoom">
      <span>#</span> {title}
    </div>
  );
}

export default ChatRoom;
