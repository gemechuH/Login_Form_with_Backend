import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'



const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    if (!email || !password) {
      setError("both fields are required.");
      return;
    }

    try {
      const response = await fetch("http://localhost:5000/api/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });
      const data = await response.json();
      console.log(data);
      if (response.ok) {
        // alert("login successful!.");
        localStorage.setItem("username", data.username)
        navigate("/dashboard");
      } else {
        setError(data.message || "login failed.");
      }
    } catch (error) {
      setError("server error. please try agin later.");
    }
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-100">
      <div className="w-full max-w-md bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-2xl font-semibold text-center mb-4 text-red-500 p-2 rounded">
          Login
        </h2>
        {error && <p className="text-red-500">{error}</p>}
        <form action="" className="space-y-4" onSubmit={handleSubmit}>
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700"
            >
              Email
            </label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="mt-1 p-2 w-full border rounded-md outline"
            />
          </div>
          <div>
            <label
              htmlFor="password"
              className="block text-sm font-medium text-gray-700"
            >
              Password
            </label>
            <input
              type="password"
              className="mt-1 p-2 w-full border rounded-lg"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          <button
            type="submit"
            className="w-60 text-center ml-20 bg-blue-500 text-white py-2 px-4 rounded hover:bg-red-400"
          >
            Login
          </button>
        </form>
        <p className="mt-4 text-gray-600">
          Already Have an account?
          <a
            href="/register"
            className="text-red-400 font-semibold hover:text-red-600"
          >
            Register Now
          </a>
        </p>
      </div>
    </div>
  );
};

export default Login
