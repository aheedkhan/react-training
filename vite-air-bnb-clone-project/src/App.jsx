import React from "react";
import "./App.css";
import Header from "./components/Header";
import Section1 from "./components/Section1";
import Cards from "./components/Card";
import data from "./data";
function App() {
  const card = data.map((items) => {
    return <Cards key={items.id} item={items} />;
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
