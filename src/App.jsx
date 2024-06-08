import React, { useState } from 'react';
import { Routes, Route,BrowserRouter, Navigate, useNavigate } from 'react-router-dom';
import Navbar from './components/Navbar';
import AdminDashboard from './pages/AdminDashboard';
import TeacherDashboard from './pages/TeacherDashboard';
import StudentDashboard from './pages/StudentDashboard';
import ParentDashboard from './pages/ParentDashboard';
import Dashboard from './pages/Dashboard';
import UserManagement from './components/UserManagement';
import Fees from './pages/Fees';
import Payments from './pages/Payments';
import Settings from './pages/Settings';
import Logout from './pages/Logout';
import Students from './pages/Students';
import Layout from './components/Layout';
import Login from './pages/Login';
import PrivateRoute from './components/PrivateRoute'; // Make sure to import PrivateRoute

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const navigate = useNavigate(); 

  // Function to handle successful login and navigation to the dashboard
  const handleLoginSuccess = () => {
    setIsLoggedIn(true);
    navigate('/dashboard'); // Navigate to the dashboard page
  };

  return (
    <Routes>
      <Route path="/login" element={<Login setIsLoggedIn={handleLoginSuccess} />} />
      <Route
        path="*"
        element={
          isLoggedIn ? (
            <>
              <Navbar />
              <Layout>
                <Routes>
                  <Route path="/" element={<Dashboard />} />
                  <Route path="/dashboard" element={<PrivateRoute element={<Dashboard />} isAuthenticated={isLoggedIn} />} />
                  <Route path="/admin" element={<PrivateRoute element={<AdminDashboard />} isAuthenticated={isLoggedIn} />} />
                  <Route path="/teacher" element={<PrivateRoute element={<TeacherDashboard />} isAuthenticated={isLoggedIn} />} />
                  <Route path="/student" element={<PrivateRoute element={<StudentDashboard />} isAuthenticated={isLoggedIn} />} />
                  <Route path="/parents" element={<PrivateRoute element={<ParentDashboard />} isAuthenticated={isLoggedIn} />} />
                  <Route path="/user" element={<PrivateRoute element={<UserManagement />} isAuthenticated={isLoggedIn} />} />
                  <Route path="/students" element={<PrivateRoute element={<Students />} isAuthenticated={isLoggedIn} />} />
                  <Route path="/fees" element={<PrivateRoute element={<Fees />} isAuthenticated={isLoggedIn} />} />
                  <Route path="/payments" element={<PrivateRoute element={<Payments />} isAuthenticated={isLoggedIn} />} />
                  <Route path="/settings" element={<PrivateRoute element={<Settings />} isAuthenticated={isLoggedIn} />} />
                  <Route path="/logout" element={<PrivateRoute element={<Logout />} isAuthenticated={isLoggedIn} />} />
                </Routes>
              </Layout>
            </>
          ) : (
            <Navigate to="/login" replace />
          )
        }
      />
    </Routes>
  );
}

export default App;
