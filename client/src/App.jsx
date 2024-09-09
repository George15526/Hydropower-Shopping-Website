// App

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import "./App.css"
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