import React from "react";

import "./Task.css";

import PlayArrowIcon from "@material-ui/icons/PlayArrow";
import MoreVertIcon from "@material-ui/icons/MoreVert";

function Task(props) {
  const handleRestart = (e) => {
    e.preventDefault();

    //restart
  };

  const handleDelete = (e) => {
    e.preventDefault();

    //delete
  };

  return (
    <div className="day__task">
      <div className="day__taskName">
        <span className="taskName">Emails</span>
        {/* <span className="taskName">{props.name}</span> */}
        <span className="taskProject">Amazon</span>
        {/* <span className="taskProject">{props.project}</span> */}
      </div>
      <div className="day__taskInfo">
        <span className="taskInfo__time">15:00 - 19:00</span>
        {/* <span className="taskInfo__time">{props.timeZone}</span> */}
        <span className="timeTotal">4:00</span>
        {/* <span className="timeTotal">{props.time}</span> */}
        <PlayArrowIcon onClick={handleRestart} />
        <MoreVertIcon onClick={handleDelete} />
      </div>
    </div>
  );
}

export default Task;
