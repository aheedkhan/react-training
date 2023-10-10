import React from "react";
import "./App.css";
import Header from "./components/Header";
import Section1 from "./components/Section1";
import Cards from "./components/Card";
import data from "./data";
function App() {
  const card = data.map((items) => {
    return (
      <Cards
        img={items.coverImg}
        rating={items.stats.rating}
        reviewCount={items.stats.reviewCount}
        location={items.location}
        title={items.title}
        price={items.price}
      />
    );
  });

  return (
    <>
      <Header />
      <Section1 />
      <section className="card--list"> {card}</section>
    </>
  );
}

export default App;
