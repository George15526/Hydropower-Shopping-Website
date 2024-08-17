// App

import React from "react";
import HelloWorld from "./HelloWorld";
import "./App.css"
import Home from "./pages/Home";
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";

function App() {
  return (
    <>
      <HomePage />
      <LoginPage />
    </>
  );
}

export default App;