import React from "react";

import Header from "./components/Header";
import Contacts from "./components/Contacts;";

import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Header branding="The Contact Manager" />
      <div className="container">
        <Contact name="Joe" email="joe@mail.com" phone="(555)555-5555" />
        <Contact name="Mike" email="mike@mail.com" phone="(555)555-5556" />
      </div>
    </div>
  );
}

export default App;
