import React from "react";
import "../media/background.css";
const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar">
      <div className="container-fluid">
        <a className="navbar-brand" href="/champions"></a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div className="navbar-nav"></div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
