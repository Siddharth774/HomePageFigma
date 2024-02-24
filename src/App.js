import React from "react";
import "./App.scss";
import NavBar from "./components/NavBar";
import Home from "./components/Home";

const App = () => {
  return (
    <section className="app">
      <NavBar />
      <Home />
    </section>
  );
};

export default App;
