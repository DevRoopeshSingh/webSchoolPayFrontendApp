import React, { useContext } from 'react';
import { Routes, Route, Navigate, useNavigate } from 'react-router-dom';
import Login from './pages/Login';
import SignUp from './pages/SignUp';
import LandingPage from './pages/LandingPage';
import Logout from './pages/Logout';
import ProtectedRoutes from './ProtectedRoutes';
import { useAuth } from './AuthContext';

function App() {
  const { isLoggedIn, login, logout, user } = useAuth();
  const navigate = useNavigate();

  const handleLoginSuccess = (user) => {
    login(user);
    navigate('/dashboard');
  };

  const handleLogout = () => {
    logout();
    navigate('/login');
  };

  return (
    <Routes>
      <Route path="/login" element={<Login setIsLoggedIn={handleLoginSuccess} />} />
      <Route path="/logout" element={<Logout handleLogout={handleLogout} />} />
      <Route path="/signup" element={<SignUp setIsLoggedIn={handleLoginSuccess} />} />
      <Route path="/" element={isLoggedIn ? <Navigate to="/dashboard" replace /> : <LandingPage />} />
      <Route path="/*" element={isLoggedIn ? <ProtectedRoutes isLoggedIn={isLoggedIn} user={user} /> : <Navigate to="/" replace />} />
    </Routes>
  );
}

export default App;
