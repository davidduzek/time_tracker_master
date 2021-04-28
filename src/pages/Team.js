import React, { useState } from "react";
import Groups from "../components/Groups";
import Member from "../components/Member";
import Sidebar from "../components/Sidebar";

import "./Team.css";

function Team() {
  const [isActive, setIsActive] = useState(false);

  const switchMembers = () => {
    setIsActive(true);
  };

  const switchGroups = () => {
    setIsActive(false);
  };

  return (
    <div className="team">
      <Sidebar />
      <div className="team__layout">
        <h1 className="team__title">Managing Members & Groups</h1>
        <div className="team__navs">
          <button className="team__nav" onClick={switchGroups}>
            Members
          </button>
          <button className="team__nav" onClick={switchMembers}>
            Groups
          </button>
        </div>
        <div className="team__container">
          {!isActive ? (
            <div className="team__members">
              <h3 className="team__title">Your Collegues</h3>
              <div className="member__top">
                <div className="member__name member__topTitle">Fullname</div>
                <div className="member__email member__topTitle">Hot Email</div>
                <div className="member__rights member__topTitle"> Rights</div>
              </div>
              <Member />
              <Member />
              <Member />
              <Member />
              <Member />
              <Member />
              <Member />
              <Member />
            </div>
          ) : (
            <div className="team__groups">
              <h3 className="team__title">All Groups</h3>
              <div className="member__top">
                <div className="member__name member__topTitle">Group Name</div>
                <div className="member__email member__topTitle">
                  Group People
                </div>
                <div className="member__rights member__topTitle"> Settings</div>
              </div>
              <Groups />
              <Groups />
              <Groups />
              <Groups />
              <Groups />
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Team;
