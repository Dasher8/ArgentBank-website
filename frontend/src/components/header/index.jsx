import React from "react";
import Logo from "../../assets/img/argentBankLogo.png";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "../../../src/index.css";

export default function Header() {
  return (
    <header>
      <nav className="main-nav">
        <Link className="main-nav-logo" to="./index.html">
          <img
            className="main-nav-logo-image"
            src={Logo}
            alt="Argent Bank Logo"
          />
          <h1 className="sr-only">Argent Bank</h1>
        </Link>
        <div>
          <Link className="main-nav-item" to="/login">
            <FontAwesomeIcon icon="fa-solid fa-circle-user" />
            Sign In
          </Link>
        </div>
      </nav>
    </header>
  );
}
