import React from "react";
import Logo from "/public/images/airbnb-logo.png";

export default function Header() {
  return (
    <nav className="navbar">
      <img src={Logo} className="nav--logo" />
    </nav>
  );
}
