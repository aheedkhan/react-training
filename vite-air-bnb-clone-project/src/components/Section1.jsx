import React from "react";
import Grid from "/public/images/photo-grid.png";

export default function Section1() {
  return (
    <section className="section1">
      <img src={Grid} className="section1--image" />
      <h1 className="section1--heading">Online Experiences</h1>
      <p className="section1--para">
        Join unique interactive activities led by one-of-a-kind
        <br /> hosts—all without leaving home.
      </p>
    </section>
  );
}
