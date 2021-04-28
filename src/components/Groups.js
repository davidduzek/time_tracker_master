import React from "react";

import DeleteForeverIcon from "@material-ui/icons/DeleteForever";
import CreateIcon from "@material-ui/icons/Create";

import "./Groups.css";

function Groups() {
  return (
    <div className="groups">
      <div className="group__name">Best Group</div>
      <div className="group__people">
        Miro Sykora / Miro Sykora / Miro Sykora
      </div>
      <div className="group__settings">
        <CreateIcon />
        <DeleteForeverIcon />
      </div>
    </div>
  );
}

export default Groups;
