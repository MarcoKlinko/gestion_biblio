import React from "react";
import { Link } from "react-router-dom";
import style from "./style.module.css";

const Navigation = () => {
    return <nav className="navbar navbar-expand-lg bg-body-tertiary">
    <div className="container">
      <Link className="navbar-brand" to="/">LOGO</Link>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
          <li className="nav-item">
            <Link className="nav-link active" aria-current="page" to="/">Accuil</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link active" aria-current="page" to="/books">Livres</Link>
          </li>
        </ul>
        <li className={`nav-item ${style.login__link}`}>
            <Link className="nav-link" to="/login">Se connecter</Link>
        </li>
        <form className="d-flex" role="search">
            <input className="form-control" type="search" placeholder="Search" aria-label="Search"/>
            <button className="btn btn-outline-success" type="submit">Search</button>
        </form>
      </div>
    </div>
  </nav>
}

export default Navigation;