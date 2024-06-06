import React, { useEffect } from "react";
import Logo from "../../assets/img/argentBankLogo.png";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { fetchUser } from "../../redux/slices/userSlice";
import { logout } from "../../redux/slices/authenticationSlice";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "../../../src/index.css";

export default function Header() {
  const dispatch = useDispatch();
  const { token } = useSelector((state) => state.auth);
  const { userName } = useSelector((state) => state.user);

  useEffect(() => {
    if (token && !userName) {
      dispatch(fetchUser(token));
    }
  }, [token, dispatch]);

  const navigate = useNavigate();

  const handleLogout = () => {
    dispatch(logout());
    navigate("/");
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
          {token && userName ? (
            <>
              <Link className="main-nav-item" to="/profile">
                <FontAwesomeIcon icon="fa-solid fa-circle-user" />
                <span>{userName}</span>
              </Link>
              <button
                className="main-nav-item logout-button"
                onClick={handleLogout}
              >
                <FontAwesomeIcon icon="fa-solid fa-right-from-bracket" />
                Sign Out
              </button>
            </>
          ) : (
            <Link className="main-nav-item" to="/login">
              <FontAwesomeIcon icon="fa-solid fa-circle-user" />
              Sign In
            </Link>
          )}
        </div>
      </nav>
    </header>
  );
}
