import React from "react";

export default function Cards(props) {
  let c = props.item;
  let badgeText;
  if (c.openSpots === 0) {
    badgeText = "SOLD OUT";
  } else if (c.location === "Online") {
    badgeText = "ONLINE";
  }
  return (
    <div className="card">
      {badgeText && <div className="card--badge">{badgeText}</div>}
      <img src={`../images/${c.coverImg}`} className="card--image" />
      <div className="card--stats">
        <img src="../images/star.png" className="card--star" />
        <span>{c.stats.rating}</span>
        <span className="gray">({c.stats.reviewCount}) • </span>
        <span className="gray">{c.location}</span>
      </div>
      <p>{c.title}</p>
      <p>
        <span className="bold">From ${c.price}</span> / person
      </p>
    </div>
  );
}
