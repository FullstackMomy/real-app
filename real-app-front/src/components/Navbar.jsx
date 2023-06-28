import { Link, NavLink } from "react-router-dom";
import { useAuth } from "../context/auth.context";
import { useEffect, useState } from "react";

const Navbar = () => {
  const { user } = useAuth();
  const [themeMode, setThemeMode] = useState("dark");
  const htmlTag = document.getElementsByTagName("html")[0];

  useEffect(() => {
    htmlTag.setAttribute("data-bs-theme", themeMode);
  }, [themeMode]);

  return (
    <nav
      id="header"
      style={{ backgroundColor: "#b2bFBE" }}
      className="navbar navbar-expand-lg navbar-light sticky-sm-top"
      aria-label="#mainNav"
    >
      <div className="container">
        <Link className="navbar-brand" to="/">
          <i className="bi bi-card-text me-2"></i>bizCard4U
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#mainNav"
          aria-controls="mainNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="mainNav">
          <ul className="navbar-nav me-auto mb-2 mb-md-0">
            <li className="nav-item">
              <NavLink className="nav-link" to="/about">
                About
              </NavLink>
            </li>

            {user?.biz && (
              <li className="nav-item">
                <NavLink className="nav-link" to="my-cards">
                  My cards
                </NavLink>
              </li>
            )}
          </ul>
          <ul className="navbar-nav ms-auto mb-2 mb-md-0">
            {user ? (
              <li className="nav-item">
                <NavLink className="nav-link" to="/sign-out">
                  Sign out
                </NavLink>
              </li>
            ) : (
              <>
                <li className="nav-item">
                  <NavLink className="nav-link" to="/sign-in">
                    Sign In
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link" to="/sign-up">
                    Sign Up
                  </NavLink>
                </li>
              </>
            )}
          </ul>
        </div>
        <button
          className="btn"
          onClick={() => setThemeMode(themeMode === "light" ? "dark" : "light")}
        >
          {themeMode === "light" ? (
            <i className="bi bi-moon-stars-fill"></i>
          ) : (
            <i className="bi bi-brightness-high-fill"></i>
          )}
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
