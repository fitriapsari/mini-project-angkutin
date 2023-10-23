import React from "react"
import { Link } from "react-router-dom"

function Navbar() {
  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-dark fixed-top">
        <div className="container-fluid mx-5">
          <a className="navbar-brand text-light fw-bold" href="#">
            Angkut<span className="text-primary">in</span>
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div
            className="collapse navbar-collapse justify-content-end"
            id="navbarNav"
          >
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link to="/" className="nav-link text-light">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/login" className="nav-link text-light">
                  Login
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/signup" className="nav-link text-light">
                  Signup
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/about" className="nav-link text-light">
                  AboutUs
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/service" className="nav-link text-light">
                  Service
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  )
}

export default Navbar
