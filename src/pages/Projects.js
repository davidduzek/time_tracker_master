import React from "react";
import "./Projects.css";

import Sidebar from "../components/Sidebar";
import ChatRoom from "../components/ChatRoom";
import Chat from "../components/Chat";

function Projects() {
  return (
    <div className="projects">
      <Sidebar />
      <div className="projects__layout">
        <h1 className="projects__title">Project Chat Groups</h1>
        <div className="projects__container">
          <div className="projects__chatRooms">
            <h3 className="chatRooms__title">Select Room</h3>
            <ChatRoom title="Awesome Room" />
            <ChatRoom title="Badass Room" />
            <ChatRoom title="Simple Room" />
          </div>
          <div className="projects__chat">
            <Chat />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Projects;
