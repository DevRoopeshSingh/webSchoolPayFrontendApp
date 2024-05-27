import { useState } from 'react';

function UserManagement() {
  const [isLogin, setIsLogin] = useState(true);

  const handleSwitch = () => setIsLogin(!isLogin);

  return (
    <div className="container mx-auto p-4">
      {isLogin ? (
        <Login />
      ) : (
        <Register />
      )}
      <button onClick={handleSwitch} className="mt-4 text-blue-500">
        {isLogin ? "Don't have an account? Register" : "Already have an account? Login"}
      </button>
    </div>
  );
}

function Login() {
  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Login</h2>
      <form>
        <input type="email" placeholder="Email" className="border p-2 w-full mb-4" />
        <input type="password" placeholder="Password" className="border p-2 w-full mb-4" />
        <button type="submit" className="bg-blue-500 text-white p-2 w-full">Login</button>
      </form>
    </div>
  );
}

function Register() {
  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Register</h2>
      <form>
        <input type="text" placeholder="Name" className="border p-2 w-full mb-4" />
        <input type="email" placeholder="Email" className="border p-2 w-full mb-4" />
        <input type="password" placeholder="Password" className="border p-2 w-full mb-4" />
        <button type="submit" className="bg-blue-500 text-white p-2 w-full">Register</button>
      </form>
    </div>
  );
}

export default UserManagement;
