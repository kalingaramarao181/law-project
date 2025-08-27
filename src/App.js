import React from "react";
import Header from "./Components/Header";
import Hero from "./Components/Hero";
import About from "./Components/About";
import Services from "./Components/Services";
import Contact from "./Components/Contact";
import "./App.css";
import Footer from "./Components/Footer";
import PhoneButton from "./Components/PhoneButton";

function App() {
  return (
    <div className="app">
      <Header />
      <Hero />
      <Services />
      <About />
      <Contact />
      <Footer />
      <PhoneButton />
    </div>
  );
}

export default App;
