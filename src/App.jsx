// App

import React, { createElement } from "react";
import { BrowserRouter, Routes, Route, createBrowserRouter, createRoutesFromElements, RouterProvider } from 'react-router-dom';
import HelloWorld from "./HelloWorld";
import "./App.css"
import Home from "./pages/Home";
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage/>} />
        <Route path="/auth/loginpage" element={<LoginPage/>} />
        <Route path="/auth/registerpage" element={<RegisterPage/>} />
      </Routes>
    </BrowserRouter>
  )
}

export default App;