import React from "react";
import { Link } from "react-router-dom";

import TimerIcon from "@material-ui/icons/Timer";
import DescriptionIcon from "@material-ui/icons/Description";
import GroupIcon from "@material-ui/icons/Group";
import SettingsIcon from "@material-ui/icons/Settings";
import TodayIcon from "@material-ui/icons/Today";
import EqualizerIcon from "@material-ui/icons/Equalizer";

import "./Sidebar.css";

function Sidebar() {
  return (
    <div className="sidebar">
      <Link to="/" className="sidebar__logo">
        <div>
          <span>TRACKER</span>
        </div>
      </Link>
      <hr className="sidebar__line" />
      <div className="sidebar__nav">
        <Link to="/" className="sidebar__links">
          <div className="link__option">
            <TimerIcon />
            <span>Time Tracker</span>
          </div>
        </Link>
        <Link to="/" className="sidebar__links">
          <div className="link__option">
            <TodayIcon />
            <span>Calendar</span>
          </div>
        </Link>
        <Link to="/" className="sidebar__links">
          <div className="link__option">
            <EqualizerIcon />
            <span>Reports</span>
          </div>
        </Link>
        <Link to="/projects" className="sidebar__links">
          <div className="link__option">
            <DescriptionIcon />
            <span>Projects</span>
          </div>
        </Link>
        <Link to="/teams" className="sidebar__links">
          <div className="link__option">
            <GroupIcon />
            <span>Team</span>
          </div>
        </Link>
        <Link to="/settings" className="sidebar__links">
          <div className="link__option">
            <SettingsIcon />
            <span>Settings</span>
          </div>
        </Link>
      </div>
    </div>
  );
}

export default Sidebar;
