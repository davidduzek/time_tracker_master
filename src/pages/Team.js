import React from "react";
import Sidebar from "../components/Sidebar";

import "./Team.css";

function Team() {
  return (
    <div className="team">
      <Sidebar />
      <div className="team__layout">
        <h1 className="team__title">Managing Team & Groups</h1>
        <div className="team__container">
          <div className="team__nav">Top meh</div>
          <div className="team__members"></div>
        </div>
      </div>
    </div>
  );
}

export default Team;
