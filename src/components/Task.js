import React, { useState, useEffect } from "react";

import "./Task.css";
import { Card } from '../components/Card/card';
import PlayArrowIcon from "@material-ui/icons/PlayArrow";
import MoreVertIcon from "@material-ui/icons/MoreVert";

function Task(props) {
  const [todo, setTodo] = useState([])
  useEffect(()=>{
      fetch('/api').then(response=>{
          if(response.ok){
              return response.json()
          }
      }).then(data=>setTodo(data))
  },[])

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
        <span className="taskName"><Card listOfTodos={todo}/></span>
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
