import React from "react";
import { Link } from "react-router-dom";
import style from "./style.module.css";
import logolib from "../../assets/logo-lib.png"

const Navigation = () => {
    return <nav className={`navbar navbar-expand-lg bg-body-tertiary ${style.navWrapper}`}>
    <div className="container">
      <Link className={`navbar-brand ${style.logo}`} to="/">
        <img className="img-fluid" src={logolib} alt="" />
      </Link>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
          <li className="nav-item">
            <Link className="nav-link active" aria-current="page" to="/">Home</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link active" aria-current="page" to="/books">Books</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link active" aria-current="page" to="/about">About Us</Link>
          </li>
        </ul>
        <li className={`nav-item ${style.login__link} btn btn-md btn-info text-white px-5`}>
            <Link className="nav-link" to="/login">Login</Link>
        </li>
      </div>
    </div>
  </nav>
}

export default Navigation;