import React from 'react';
import './header.css';
import { Link } from 'react-router-dom';
// import Dropdown from '../dropdown/Dropdown';

const Header = () => {
  // const [isDropdownOpen, setIsDropdownOpen] = React.useState(false);

  return (
    <header className="header">
      <div className="header-container">
        <div className="header-brand">
          <Link to="/">
            <h2>M&H</h2>
          </Link>
        </div>
        <nav className="nav-links">
          <ul>
            <li>
              <Link to="/cart">
                <i className="fas fa-shopping-basket"></i>Cart
              </Link>
            </li>
            <li>
              <Link to="/signin">
                <i className="far fa-user"></i>Sign In
              </Link>
            </li>
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
        {/* <Dropdown showDropdown={isDropdownOpen} /> */}
      </div>
    </header>
  );
};

export default Header;
