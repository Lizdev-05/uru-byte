import React from "react";
import Nav from "./components/nav/Nav";
import Home from "./pages/home/Home";
import About from "./pages/about/About";
import Feature from "./pages/features/Feature";
import Team from "./pages/team/Team";
import Faq from "./pages/faq/Faq";
import Contact from "./pages/contact/Contact";

function App() {
  return (
    <div>
      <Nav />
      <Home />
      <About />
      <Feature />
      <Team />
      <Faq />
      <Contact />
    </div>
  );
}

export default App;
