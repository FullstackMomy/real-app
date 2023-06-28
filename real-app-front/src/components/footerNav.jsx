import { NavLink } from "react-router-dom";
import { useAuth } from "../context/auth.context";

export const FooterNav = () => {
  const { user } = useAuth();

  return (
    <div className="container">
      <nav className="navbar">
        <ul className="navbar-nav mx-auto mb-2 mb-lg-0 d-flex flex-row justify-content-center align-content-center gap-4">
          <li className="nav-item">
            <NavLink className="nav-link" aria-current="page" to="about">
              About
            </NavLink>
          </li>

          {user?.biz && (
            <li className="nav-item">
              <NavLink className="nav-link" to="/my-cards">
                My Cards
              </NavLink>
            </li>
          )}
        </ul>
      </nav>
    </div>
  );
};
