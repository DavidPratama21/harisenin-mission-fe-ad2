import './App.css'
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom'
import Login from './pages/Login';
import Register from './pages/Register';
import Beranda from './pages/Beranda';
import AuthLayout from './layouts/AuthLayout';
import MainLayout from './layouts/MainLayout';

function App() {
  return (
    <Router>
      <Routes>
        {/* Layout untuk login dan register */}
        <Route element={<AuthLayout />}>
          <Route path="/Login" element={<Login />} />
          <Route path="/Register" element={<Register />} />
        </Route>

        {/* Layout utama untuk Beranda */}
        <Route element={<MainLayout />}>
          <Route path="/Beranda" element={<Beranda />} />
        </Route>
      </Routes>
    </Router>
  )
}

export default App
