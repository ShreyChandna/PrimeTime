import React, { Component } from 'react'
import {
  Link
} from "react-router-dom";

export class Navbar extends Component {


  render() {
    return (
      <div>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
    <Link className="navbar-brand" to="/home">Newspedia</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to="/home">HOME</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/general">GENERAL</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/business">BUSINESS</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/sports">SPORTS</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/science">SCIENCE</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/health">HEALTH</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/entertainment">ENTERTAINMENT</Link>
        </li>
        
      </ul>
    </div>
  </div>
</nav>
      </div>
    )
  }
}

export default Navbar
