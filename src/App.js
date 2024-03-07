import React from "react";
import Nav from "./components/nav/Nav";
import Home from "./pages/home/Home";
import About from "./pages/about/About";
import Feature from "./pages/features/Feature";

function App() {
  return (
    <div>
      <Nav />
      <Home />
      <About />
      <Feature />
    </div>
  );
}

export default App;
