import React from "react";
import "./header.css";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { logoutUser } from "../../actions/userActions";

const Header = () => {
  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;
  const dispatch = useDispatch();

  return (
    <header className="header">
      <div className="header-container">
        <div className="header-brand">
          <Link to="/">
            <h2>shoplab</h2>
          </Link>
        </div>
        <nav className="nav-links">
          <ul>
            <li>
              <Link to="/cart">
                <i className="fas fa-shopping-basket"></i>Cart
              </Link>
            </li>
            {userInfo ? (
              <>
                <li>
                  <Link to="/profile">
                    <i className="far fa-user"></i>
                    {userInfo.name}
                  </Link>
                </li>
                <li>
                  <div onClick={() => dispatch(logoutUser())}>
                    <i className="fas fa-sign-out-alt"></i>
                    Logout
                  </div>
                </li>
              </>
            ) : (
              <Link to="/login">
                <li>
                  <i className="far fa-user"></i>Sign In
                </li>
              </Link>
            )}

            {/* <li>
              <form onSubmit={(e) => e.preventDefault()}>
                <input
                  className="header-search"
                  type="text"
                  placeholder="Search"
                />
                <button className="header-button">
                  <i class="fas fa-search"></i>
                </button>
              </form>
            </li> */}
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
