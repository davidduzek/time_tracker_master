import React, { useState, useRef } from "react";

import "./Tracker.css";

import ScheduleIcon from "@material-ui/icons/Schedule";
import DehazeIcon from "@material-ui/icons/Dehaze";
import PlayArrowIcon from "@material-ui/icons/PlayArrow";
import MoreVertIcon from "@material-ui/icons/MoreVert";

function Tracker() {
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
          <div className="tracker__day">
            <div className="day__top">
              <div className="day__date">
                <span>Today</span>
              </div>
              <div className="day__totalHours">
                Day hours: <span className="timeTotal">12:00</span>
              </div>
            </div>
            <div className="day__tasks">
              <div className="day__task">
                <div className="day__taskName">
                  <span className="taskName">Emails</span>
                  <span className="taskProject">Amazon</span>
                </div>
                <div className="day__taskInfo">
                  <span className="taskInfo__time">15:00 - 19:00</span>
                  <span className="timeTotal">4:00</span>
                  <PlayArrowIcon onClick="" />
                  <MoreVertIcon onClick="" />
                </div>
              </div>
              <div className="day__task">
                <div className="day__taskName">
                  <span className="taskName">Designing</span>
                  <span className="taskProject">London</span>
                </div>
                <div className="day__taskInfo">
                  <span className="taskInfo__time">11:00 - 15:00</span>
                  <span className="timeTotal">4:00</span>
                  <PlayArrowIcon onClick="" />
                  <MoreVertIcon onClick="" />
                </div>
              </div>
              <div className="day__task">
                <div className="day__taskName">
                  <span className="taskName">Making calls</span>
                  <span className="taskProject">Eurovea</span>
                </div>
                <div className="day__taskInfo">
                  <span className="taskInfo__time">8:00 - 10:00</span>
                  <span className="timeTotal">2:00</span>
                  <PlayArrowIcon onClick="" />
                  <MoreVertIcon onClick="" />
                </div>
              </div>
              <div className="day__task">
                <div className="day__taskName">
                  <span className="taskName">Clearing Room</span>
                  <span className="taskProject"></span>
                </div>
                <div className="day__taskInfo">
                  <span className="taskInfo__time">6:00 - 8:00</span>
                  <span className="timeTotal">2:00</span>
                  <PlayArrowIcon onClick="" />
                  <MoreVertIcon onClick="" />
                </div>
              </div>
            </div>
          </div>
          <div className="tracker__day">
            <div className="day__top">
              <div className="day__date">
                <span>Today</span>
              </div>
              <div className="day__totalHours">
                Day hours: <span className="timeTotal">12:00</span>
              </div>
            </div>
            <div className="day__tasks">
              <div className="day__task">
                <div className="day__taskName">
                  <span className="taskName">Emails</span>
                  <span className="taskProject">Amazon</span>
                </div>
                <div className="day__taskInfo">
                  <span className="taskInfo__time">15:00 - 19:00</span>
                  <span className="timeTotal">4:00</span>
                  <PlayArrowIcon onClick="" />
                  <MoreVertIcon onClick="" />
                </div>
              </div>
              <div className="day__task">
                <div className="day__taskName">
                  <span className="taskName">Designing</span>
                  <span className="taskProject">London</span>
                </div>
                <div className="day__taskInfo">
                  <span className="taskInfo__time">11:00 - 15:00</span>
                  <span className="timeTotal">4:00</span>
                  <PlayArrowIcon onClick="" />
                  <MoreVertIcon onClick="" />
                </div>
              </div>
              <div className="day__task">
                <div className="day__taskName">
                  <span className="taskName">Making calls</span>
                  <span className="taskProject">Eurovea</span>
                </div>
                <div className="day__taskInfo">
                  <span className="taskInfo__time">8:00 - 10:00</span>
                  <span className="timeTotal">2:00</span>
                  <PlayArrowIcon onClick="" />
                  <MoreVertIcon onClick="" />
                </div>
              </div>
              <div className="day__task">
                <div className="day__taskName">
                  <span className="taskName">Clearing Room</span>
                  <span className="taskProject"></span>
                </div>
                <div className="day__taskInfo">
                  <span className="taskInfo__time">6:00 - 8:00</span>
                  <span className="timeTotal">2:00</span>
                  <PlayArrowIcon onClick="" />
                  <MoreVertIcon onClick="" />
                </div>
              </div>
            </div>
          </div>
          <div className="tracker__day">
            <div className="day__top">
              <div className="day__date">
                <span>Today</span>
              </div>
              <div className="day__totalHours">
                Day hours: <span className="timeTotal">12:00</span>
              </div>
            </div>
            <div className="day__tasks">
              <div className="day__task">
                <div className="day__taskName">
                  <span className="taskName">Emails</span>
                  <span className="taskProject">Amazon</span>
                </div>
                <div className="day__taskInfo">
                  <span className="taskInfo__time">15:00 - 19:00</span>
                  <span className="timeTotal">4:00</span>
                  <PlayArrowIcon onClick="" />
                  <MoreVertIcon onClick="" />
                </div>
              </div>
              <div className="day__task">
                <div className="day__taskName">
                  <span className="taskName">Designing</span>
                  <span className="taskProject">London</span>
                </div>
                <div className="day__taskInfo">
                  <span className="taskInfo__time">11:00 - 15:00</span>
                  <span className="timeTotal">4:00</span>
                  <PlayArrowIcon onClick="" />
                  <MoreVertIcon onClick="" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Tracker;
