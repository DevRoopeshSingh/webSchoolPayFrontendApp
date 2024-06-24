import React from 'react';
import { Routes, Route } from 'react-router-dom';
import PrivateRoute from './components/PrivateRoute';
import Navbar from './components/Navbar';
import Layout from './components/Layout';
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
import Students from './pages/Students';
import NotFound from './pages/NotFound';

const ProtectedRoutes = ({ isLoggedIn, user }) => (
  <>
    <Navbar loggedInUser={user || { name: 'Guest Guest', designation: 'User' }} />
    <Layout loggedInUser={user || { name: 'Guest Guest', designation: 'User' }} >
      <Routes>
        <Route path="/superadmin" element={<PrivateRoute isAuthenticated={isLoggedIn}><SuperAdminPage /></PrivateRoute>} />
        <Route path="/admin" element={<PrivateRoute isAuthenticated={isLoggedIn}><AdminDashboard /></PrivateRoute>} />
        <Route path="/teacher" element={<PrivateRoute isAuthenticated={isLoggedIn}><TeacherDashboard /></PrivateRoute>} />
        <Route path="/student" element={<PrivateRoute isAuthenticated={isLoggedIn}><StudentDashboard /></PrivateRoute>} />
        <Route path="/parents" element={<PrivateRoute isAuthenticated={isLoggedIn}><ParentDashboard /></PrivateRoute>} />
        <Route path="/users" element={<PrivateRoute isAuthenticated={isLoggedIn}><UserManagement /></PrivateRoute>} />
        <Route path="/students" element={<PrivateRoute isAuthenticated={isLoggedIn}><Students /></PrivateRoute>} />
        <Route path="/fees" element={<PrivateRoute isAuthenticated={isLoggedIn}><Fees /></PrivateRoute>} />
        <Route path="/payments" element={<PrivateRoute isAuthenticated={isLoggedIn}><Payments /></PrivateRoute>} />
        <Route path="/settings" element={<PrivateRoute isAuthenticated={isLoggedIn}><Settings /></PrivateRoute>} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Layout>
  </>
);

export default ProtectedRoutes;
