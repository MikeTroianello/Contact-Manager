import React from "react";
import Contact from "./components/Contact";
import "./App.css";
import Header from "./components/Header";

function App() {
  return (
    <div className="App">
      <Header branding="The Contact Manager" />
      <Contact name="Joe" email="joe@mail.com" phone="(555)555-5555" />
      <Contact name="Mike" email="mike@mail.com" phone="(555)555-5556" />
    </div>
  );
}

export default App;
