import React from "react";
import Logo from "/src/images/react-logo.png";
export default function Header() {
  return (
    <nav>
      <div className="logo--text">
        <img src={Logo} className="nav--logo" />
        <h3 className="nav--text">ReactFacts</h3>
      </div>

      <h4>React Course - Project 1</h4>
    </nav>
  );
}
