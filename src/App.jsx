import React, { useState } from 'react';
import { Routes, Route, BrowserRouter, Navigate, useNavigate } from 'react-router-dom';
import Navbar from './components/Navbar';
import SuperAdminPage from './pages/SuperAdminPage';
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
import PrivateRoute from './components/PrivateRoute'; 
// import UserForm from './components/UserFormComponent';


function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const navigate = useNavigate();

  const handleLoginSuccess = () => {
    setIsLoggedIn(true);
    navigate('/dashboard');
  };

  const handleSaveUser = (user) => {
    console.log('User saved:', user);
  };

  const handleCancel = () => {
    console.log('Cancel clicked');
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
                  <Route
                    path="/dashboard"
                    element={
                      <PrivateRoute isAuthenticated={isLoggedIn}>
                        <Dashboard />
                      </PrivateRoute>
                    }
                  />
                  <Route
                    path="/superadmin"
                    element={
                      <PrivateRoute isAuthenticated={isLoggedIn}>
                        <SuperAdminPage />
                      </PrivateRoute>
                    }
                  />
                  <Route
                    path="/admin"
                    element={
                      <PrivateRoute isAuthenticated={isLoggedIn}>
                        <AdminDashboard />
                      </PrivateRoute>
                    }
                  />
                  <Route
                    path="/teacher"
                    element={
                      <PrivateRoute isAuthenticated={isLoggedIn}>
                        <TeacherDashboard />
                      </PrivateRoute>
                    }
                  />
                  <Route
                    path="/student"
                    element={
                      <PrivateRoute isAuthenticated={isLoggedIn}>
                        <StudentDashboard />
                      </PrivateRoute>
                    }
                  />
                  <Route
                    path="/parents"
                    element={
                      <PrivateRoute isAuthenticated={isLoggedIn}>
                        <ParentDashboard />
                      </PrivateRoute>
                    }
                  />
                  <Route
                    path="/users"
                    element={
                      <PrivateRoute isAuthenticated={isLoggedIn}>
                        <UserManagement />
                      </PrivateRoute>
                    }
                  />
                  <Route
                    path="/students"
                    element={
                      <PrivateRoute isAuthenticated={isLoggedIn}>
                        <Students />
                      </PrivateRoute>
                    }
                  />
                  <Route
                    path="/fees"
                    element={
                      <PrivateRoute isAuthenticated={isLoggedIn}>
                        <Fees />
                      </PrivateRoute>
                    }
                  />
                  <Route
                    path="/payments"
                    element={
                      <PrivateRoute isAuthenticated={isLoggedIn}>
                        <Payments />
                      </PrivateRoute>
                    }
                  />
                  <Route
                    path="/settings"
                    element={
                      <PrivateRoute isAuthenticated={isLoggedIn}>
                        <Settings />
                      </PrivateRoute>
                    }
                  />
                  <Route
                    path="/logout"
                    element={
                      <PrivateRoute isAuthenticated={isLoggedIn}>
                        <Logout />
                      </PrivateRoute>
                    }
                  />
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
