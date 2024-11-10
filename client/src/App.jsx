// App.jsx

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import "./App.css"
import HomePage from "./pages/HomePage";
import MemberPage from "./pages/MemberPage";


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage/>} />
        <Route path="/member/" element={<MemberPage/>} />
      </Routes>
    </BrowserRouter>
  )
}

export default App;