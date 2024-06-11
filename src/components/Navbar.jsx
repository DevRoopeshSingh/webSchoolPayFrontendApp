import { Link } from 'react-router-dom';

function Navbar() {
  return (
    // <nav className="bg-blue-600 p-4 rounded-sm">
    //   <div className="container mx-auto flex justify-between items-center">
    //     <Link to="/" className="text-white text-lg font-bold">School App</Link>
    //     <div className="space-x-4">
    //       <Link to="/users" className="text-white">User Management</Link>
    //       <Link to="/admin" className="text-white">Admin</Link>
    //       <Link to="/teacher" className="text-white">Teacher</Link>
    //       <Link to="/student" className="text-white">Student</Link>
    //       <Link to="/parent" className="text-white">Parent</Link>
    //     </div>
    //   </div>
    // </nav>
    <div className="flex items-center justify-between h-16 px-4 bg-blue-500">
            <Link to="/" className="text-white text-lg font-bold">School Pay App</Link>
            <div className="flex items-center text-white">
              <Link to="/users" className="ml-4 hover:text-gray-300">User Management</Link>
              <Link to="/admin" className="ml-4 hover:text-gray-300">Admin</Link>
              <Link to="/teacher" className="ml-4 hover:text-gray-300">Teacher</Link>
              <Link to="/student" className="ml-4 hover:text-gray-300">Student</Link>
              <Link to="/parent" className="ml-4 hover:text-gray-300">Parent</Link>
            </div>
          </div>
  );
}

export default Navbar;
