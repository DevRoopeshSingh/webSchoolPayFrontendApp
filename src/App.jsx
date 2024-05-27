import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import AdminDashboard from './pages/AdminDashboard';
import TeacherDashboard from './pages/TeacherDashboard';
import StudentDashboard from './pages/StudentDashboard';
import ParentDashboard from './pages/ParentDashboard';
 import Dashboard from './pages/Dashboard';
import UserManagement from './components/UserManagement';
import  Fess from './pages/Fees'
import Payments from './pages/Payments';
import Settings from './pages/Settings'
import Logout from './pages/Logout';
import Students from './pages/Students';
import Layout from './components/Layout';

function App() {
  return (
    <Router>
      <Navbar />
      <Layout>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/admin" element={<AdminDashboard />} />
        <Route path="/teacher" element={<TeacherDashboard />} />
        <Route path="/student" element={<StudentDashboard />} />
        <Route path="/parents" element={<ParentDashboard />} />
        <Route path="/user" element={<UserManagement />} />
        <Route path="/students" element={<Students />} />
        <Route path="/fees" element={<Fess />} />
        <Route path="/payments" element={<Payments />} />
        <Route path="/settings" element={<Settings />} />
        <Route path="/logout" element={<Logout />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
