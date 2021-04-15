import React from "react";
import { NavLink } from "react-router-dom";
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
      <NavLink to="/" className="sidebar__logo">
        <div>
          <span>TRACKER</span>
        </div>
      </NavLink>
      <hr className="sidebar__line" />
      <div className="sidebar__nav">
        <NavLink
          to="/tracker"
          activeStyle={{ backgroundColor: " #5c6abd" }}
          className="sidebar__links"
        >
          <div className="link__option">
            <TimerIcon />
            <span>Time Tracker</span>
          </div>
        </NavLink>
        <NavLink
          to="/calendar"
          activeStyle={{ backgroundColor: " #5c6abd" }}
          className="sidebar__links"
        >
          <div className="link__option">
            <TodayIcon />
            <span>Calendar</span>
          </div>
        </NavLink>
        <NavLink
          to="/reports"
          activeStyle={{ backgroundColor: " #5c6abd" }}
          className="sidebar__links"
        >
          <div className="link__option">
            <EqualizerIcon />
            <span>Reports</span>
          </div>
        </NavLink>
        <NavLink
          to="/projects"
          activeStyle={{ backgroundColor: " #5c6abd" }}
          className="sidebar__links"
        >
          <div className="link__option">
            <DescriptionIcon />
            <span>Projects</span>
          </div>
        </NavLink>
        <NavLink
          to="/team"
          activeStyle={{ backgroundColor: " #5c6abd" }}
          className="sidebar__links"
        >
          <div className="link__option">
            <GroupIcon />
            <span>Team</span>
          </div>
        </NavLink>
        <NavLink
          to="/settings"
          activeStyle={{ backgroundColor: " #5c6abd" }}
          className="sidebar__links"
        >
          <div className="link__option">
            <SettingsIcon />
            <span>Settings</span>
          </div>
        </NavLink>
      </div>
    </div>
  );
}

export default Sidebar;
