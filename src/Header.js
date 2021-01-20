import React from "react";
import "./Header.css";
import SearchIcon from "@material-ui/icons/Search";
export default function Header() {
  return (
    <div className="header">
      <img
        className="header__logo"
        src="http://pngimg.com/uploads/amazon/amazon_PNG11.png"
      />
      <div className="header__search">
        <input className="header_searchInput" type="text" />
        {/* LOGO */}
      </div>
      <div className="header__nav">
        <div className="header__option">
          <span className="header__optionOne">Hello Yugmesh</span>
          <span className="header__optionOne">Sign in</span>
        </div>

        <div className="header__option">
          <span className="header__optionOne">Returns</span>
          <span className="header__optionOne">Orders</span>
        </div>

        <div className="header__option">
          <span className="header__optionOne">Your</span>
          <span className="header__optionOne">Name</span>
        </div>
      </div>
    </div>
  );
}
