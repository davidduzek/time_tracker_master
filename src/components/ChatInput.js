import { Button } from "@material-ui/core";
import React, { useState } from "react";

import "./ChatInput.css";

function ChatInput() {
  const [input, setInput] = useState("");

  const sendMessage = (e) => {
    e.preventDefault();

    //send message

    setInput("");
  };

  return (
    <div className="chatInput">
      <form>
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder={`Message #ChannelName`}
        />
        <Button hidden type="submit" onClick={sendMessage}>
          SEND
        </Button>
      </form>
    </div>
  );
}

export default ChatInput;
