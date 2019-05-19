import React from "react";
import Contact from "./components/Contact";
import "./App.css";
import Header from "./components/Header";

function App() {
  return (
    <div className="App">
      <Header branding="The Contact Manager" />
      <Contact name="Joessss" email="joe@mail.com" phone="(555)555-5555" />
    </div>
  );
}

export default App;
