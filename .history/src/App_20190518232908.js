import React from "react";
import Contact from "./components/Contact";
import "./App.css";
import Header from "./components/Header";

function App() {
  return (
    <div className="App">
      <Header branding="Contact Manager" />
      <Contact />
    </div>
  );
}

export default App;
