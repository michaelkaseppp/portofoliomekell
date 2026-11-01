import React from "react";
import Navbar from "./components/Navbar.jsx";
import Hero from "./sections/Hero.jsx";
import About from "./sections/About.jsx";
import Projects from "./sections/Projects.jsx";
import Services from "./sections/Services.jsx";
import Contact from "./sections/Contact.jsx";

export default function App() {
  return (
    <div className="app-container">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Projects />
        <Services />
        <Contact />
      </main>
    </div>
  );
}