/** @format */

import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
//constants
import usericon from "../../Images/usericon.png";
import play1 from "../../Images/play1.png";
import { fetchAsyncMovies, fetchAsyncShows } from "../../features/movies/movieSlice";
//scss
import "./Header.scss";

const Header = () => {
  const [term, setTerm] = useState("");
  const dispatch = useDispatch()

  const submitHandler = (e) => {
    e.preventDefault();
    if(term === "") return alert("Please enter search term")
    dispatch(fetchAsyncMovies(term))
    dispatch(fetchAsyncShows(term))
    setTerm("")
  };

  return (
    <div className="header">
      <div className="logo">
        <div className="logo-image">
          <Link to="/">
            <img src={play1} alt="play" />
          </Link>
        </div>
      </div>
      <div className="search-bar">
        <form onSubmit={submitHandler}>
          <input
            type="text"
            value={term}
            placeholder="Search Movies or Shows"
            onChange={(e) => setTerm(e.target.value)}
          />
          <button type="submit">
            <i className="fa fa-search" />
          </button>
        </form>
      </div>
      <div className="user-image">
        <img src={usericon} alt="usericon" />
      </div>
    </div>
  );
};

export default Header;
