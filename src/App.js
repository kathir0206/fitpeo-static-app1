import React from "react";
import "./App.css";
import Dashboard from "./Dashboard/Dashboard";
import Header from "./main/header/Header";

function App() {
  return (
    <div className="App">
      <Dashboard />
      <div className="content">
        <Header />
      </div>
    </div>
  );
}

export default App;
