import React from "react";
import Sidebar from "../components/Sidebar";
import { ReactComponent as Image } from "../images/undraw_in_progress_ql66.svg";

import "./Soon.css";

function Soon() {
  return (
    <div className="soon">
      <Sidebar />
      <div className="soon__layout">
        <div className="soon__container">
          <h1 className="soon__title">Coming soon!</h1>
          <p>The page you are looking for is currently being developed.</p>
          <p>Please, use our other sidebar to navigate to other pages.</p>
          <Image className="soon__image" />
        </div>
      </div>
    </div>
  );
}

export default Soon;
