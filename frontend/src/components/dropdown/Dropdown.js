import React from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { logoutUser } from "../../actions/userActions";
import "./dropdown.css";

const Dropdown = ({ showDropdown }) => {
  const dispatch = useDispatch();

  const renderDropdown = () => {
    if (showDropdown) {
      return (
        <div className={`dropdown-container`}>
          <div className="dropdown-profile">
            <Link to="/profile">Profile</Link>
          </div>
          <div
            className="dropdown-logout"
            onClick={() => dispatch(logoutUser())}
          >
            <p>Logout</p>
          </div>
        </div>
      );
    }

    return null;
  };

  return <>{renderDropdown()}</>;
};

export default Dropdown;
