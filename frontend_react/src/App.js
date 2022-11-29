import React from "react";

//import { Header, About, Skills, Work, Testimonials, Footer } from './container';
import { NavBar } from "./components";
import { Header, About, Work, Skills, Testimonials, Footer } from "./container";
import "./App.scss";

const App = () => {
  return (
    <div className="app">
      <NavBar />
      <Header />
      <About />
      <Skills />
      <Work />
      <Testimonials />
      <Footer />
    </div>
  );
};

export default App;
