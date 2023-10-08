import React from "react";
import Logo from "/src/images/airbnb-logo.png";

export default function Header() {
  return (
    <nav className="navbar">
      <img src={Logo} className="nav--logo" />
    </nav>
  );
}
