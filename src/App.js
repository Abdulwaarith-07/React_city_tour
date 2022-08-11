import React, { Component } from "react";
import Navbar from "./components/Navbar/Navbar";
import "./App.scss";
import Tour from "./components/Tour/Tour";

class App extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <Tour />
      </div>
    );
  }
}

export default App;
