import React from "react";
import "./navbar.css";
import SearchIcon from "@mui/icons-material/Search";
import NotificationsIcon from "@mui/icons-material/Notifications";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
const Navbar = () => {
  return (
    <div className="navbarContainer">
      <div className="navbarWrapper">
        <div className="navbarLeft">
          <img
            className="navbarLeftImg"
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/2560px-Netflix_2015_logo.svg.png"
            alt=""
          />
          <span className="navbarLeftOptions">Home</span>
          <span className="navbarLeftOptions">Movies</span>
        </div>
        <div className="navbarRight">
          <SearchIcon className="navbarIcon" />
          <NotificationsIcon className="navbarIcon" />
          <img
            src="https://images.pexels.com/photos/6899260/pexels-photo-6899260.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
            alt=""
            className="navbarRightImg"
          />
          <div className="navbarRightProfile">
            <ArrowDropDownIcon className="navbarIcon dropdown" />
            <div className="navbarRightOptions">
              <span className="navbarRightOptions">Settings</span>
              <span className="navbarRightOptions">Logout</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
