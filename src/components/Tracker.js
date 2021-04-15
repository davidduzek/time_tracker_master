import React, { useState, useRef } from "react";

import "./Tracker.css";

import ScheduleIcon from "@material-ui/icons/Schedule";
import DehazeIcon from "@material-ui/icons/Dehaze";
import TrackerDay from "./TrackerDay";

function Tracker() {
  const [taskName, setTaskName] = useState();
  const [timer, setTimer] = useState(0);
  const [isActive, setIsActive] = useState(false);
  const countRef = useRef(null);

  const handleStart = () => {
    setIsActive(true);
    countRef.current = setInterval(() => {
      setTimer((timer) => timer + 1);
    }, 1000);
  };

  const handleEnd = () => {
    clearInterval(countRef.current);
    setIsActive(false);
    setTimer(0);

    setTaskName("");
  };

  const formatTime = () => {
    const getSeconds = `0${timer % 60}`.slice(-2);
    const minutes = `${Math.floor(timer / 60)}`;
    const getMinutes = `0${minutes % 60}`.slice(-2);
    const getHours = `0${Math.floor(timer / 3600)}`.slice(-2);

    return `${getHours} : ${getMinutes} : ${getSeconds}`;
  };

  return (
    <div className="tracker">
      <div className="container">
        <div className="tracker__top">
          <div className="tracker__left">
            <input
              className="tracker__input"
              type="text"
              placeholder="What are you working on?"
              value={taskName}
              onChange={(e) => setTaskName(e.target.value)}
              required
            />
          </div>
          <div className="tracker__right">
            <div className="tracker__projectInfo">
              <select name="project" className="tracker__addProject">
                <option value="none" selected>
                  Add Project
                </option>
                <option value="London">London</option>
                <option value="Amazon">Amazon</option>
                <option value="Eurovea">Eurovea</option>
              </select>

              <span className="tracker__time">{formatTime()}</span>
              {!isActive ? (
                <button
                  className="tracker__taskButton tracker__startButton"
                  onClick={handleStart}
                >
                  Start Task
                </button>
              ) : (
                <button
                  className="tracker__taskButton tracker__endButton"
                  onClick={handleEnd}
                >
                  End Task
                </button>
              )}
            </div>
            <div className="tracker__projectSettings">
              <ScheduleIcon />
              <DehazeIcon />
            </div>
          </div>
        </div>
        <div className="tracker__week">
          <div className="week__top">
            <div className="week__date">
              <span>15. Feb - 21. Feb</span>
            </div>
            <div className="week__totalHours">
              Week Hours: <span className="timeTotal">36:00</span>
            </div>
          </div>
          <TrackerDay />
        </div>
      </div>
    </div>
  );
}

export default Tracker;
