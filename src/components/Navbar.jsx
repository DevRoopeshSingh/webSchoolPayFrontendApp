import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav className="bg-blue-600 p-4 rounded-sm">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="text-white text-lg font-bold">School App</Link>
        <div className="space-x-4">
          <Link to="/admin" className="text-white">Admin</Link>
          <Link to="/teacher" className="text-white">Teacher</Link>
          <Link to="/student" className="text-white">Student</Link>
          <Link to="/parent" className="text-white">Parent</Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
