import React from "react";
import Nav from "./components/nav/Nav";
import Home from "./pages/home/Home";
import About from "./pages/about/About";
import Feature from "./pages/features/Feature";
import Team from "./pages/team/Team";

function App() {
  return (
    <div>
      <Nav />
      <Home />
      <About />
      <Feature />
      <Team />
    </div>
  );
}

export default App;
