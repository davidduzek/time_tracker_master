import React from "react";
import Sidebar from "../components/Sidebar";
import { ReactComponent as Image } from "../images/undraw_page_not_found_su7k.svg";

import "./Error404.css";

function Error404() {
  return (
    <div className="error404">
      <Sidebar />
      <div className="error404__layout">
        <div className="error404__container">
          <h1 className="error404__title">Whoops, something went wrong!</h1>
          <p>The page you are looking for does't exist.</p>
          <p>You can use our Sidebar to navigate or check your adress again.</p>
          <Image className="error404__image" />
        </div>
      </div>
    </div>
  );
}

export default Error404;
