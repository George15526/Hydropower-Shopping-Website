// App.jsx

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import "./App.css"
import HomePage from "./pages/HomePage";
import RegisterPage from "./pages/RegisterPage";


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage/>} />
        <Route path="/auth/register" element={<RegisterPage/>} />
      </Routes>
    </BrowserRouter>
  )
}

export default App;