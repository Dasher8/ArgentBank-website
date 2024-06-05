import React from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from 'react-router-dom';
import { logout } from "../../redux/slices/authenticationSlice";
import Logo from "../../assets/img/argentBankLogo.png";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "../../../src/index.css";


export default function HeaderPrivate() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleLogout = () => {
    dispatch(logout());
    navigate('/login');
  };
    return (
        <header>
      <nav className="main-nav">
        <Link className="main-nav-logo" to="/">
          <img
            className="main-nav-logo-image"
            src={Logo}
            alt="Argent Bank Logo"
          />
          <h1 className="sr-only">Argent Bank</h1>
        </Link>
        <div>
          <button className="main-nav-item logout-button" onClick={handleLogout}>
            <FontAwesomeIcon icon="fa-solid fa-circle-user" />
            Sign Out
          </button>
        </div>
      </nav>
    </header>
    )
}