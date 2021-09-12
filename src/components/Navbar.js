import React, { Component } from "react";
// import { Link } from "react-router-dom";

export class Navbar extends Component {
  render() {
    return (
      <nav className="navbar navbar-expand-lg navbar-dark bg-danger">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            Indian Times
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavDropdown"
            aria-controls="navbarNavDropdown"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavDropdown">
            <ul className="navbar-nav">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">
                  Home
                </a>
              </li>
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="#"
                  id="navbarDropdownMenuLink"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  All
                </a>
                <ul
                  className="dropdown-menu"
                  aria-labelledby="navbarDropdownMenuLink"
                >
                  <li className="nav-item">
                    <a className="nav-link" href="">
                      Business
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#">
                      Entertainment
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#">
                      General
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#">
                      Health
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#">
                      Sciece
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#">
                      Technology
                    </a>
                  </li>
                </ul>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Business
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Entertainment
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  General
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Health
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Sciece
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Technology
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    );
  }
}

export default Navbar;
