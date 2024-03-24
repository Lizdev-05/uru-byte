import React, { useEffect } from "react";
import Nav from "./components/nav/Nav";
import Home from "./pages/home/Home";
import About from "./pages/about/About";
import Feature from "./pages/features/Feature";
import Team from "./pages/team/Team";
import Faq from "./pages/faq/Faq";
import Contact from "./pages/contact/Contact";
import Footer from "./components/footer/Footer";
import AOS from "aos";
import "aos/dist/aos.css";

function App() {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);
  return (
    <div>
      <Nav />
      <Home />
      <About />
      <Feature />
      <Team />
      <Faq />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
