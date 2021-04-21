import React from "react";
import logo from "./logo.png";
import Dictionary from "./components/Dictionary";
import Footer from "./components/Footer";
import "./App.css";

function App() {
  return (
    <div className="App">
      <div className="container">
        <header className="App-header">
          <img src={logo} className="App-logo img-fluid" alt="logo" />
        </header>
        <Dictionary defaultKeyword="wine" />
        <Footer />
      </div>
    </div>
  );
}

export default App;
