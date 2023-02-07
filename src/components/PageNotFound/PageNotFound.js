import React from "react";
import { Link } from "react-router-dom";
//scss
import "./PageNotFound.scss";

const PageNotFound = () => {
  return (
    <div id="wrapper" className="wrapper">
      <div>
        <h1 className="text-color">404 - Page Not Found !</h1>
      </div>
      <div className="go-wrapper">
        <Link to="/">
          <button className="go-to-home">Go To Home</button>
        </Link>
      </div>
    </div>
  );
};

export default PageNotFound;
