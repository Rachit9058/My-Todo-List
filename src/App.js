import Header from "./components/Header";
import './App.css';
import Form from "./components/Form";
import React from "react";

function App() {
  return (
    <div className="container">
      <div className="app-wrapper bg-dark">
        <div>
          <Header heading="My Todos - List" />
        </div>
        <div>
          <Form />
        </div>
      </div>
    </div>
  );
}

export default App;
