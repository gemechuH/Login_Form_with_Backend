import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import BASE_URL from '../baseUrl';




const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    if (!email || !password) {
      setError("both fields are required.");
      return;
    }

    try {
      const response = await fetch(`${BASE_URL}/api/login`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });
      const data = await response.json();
      console.log(data);
      if (response.ok) {
        // alert("login successful!.");
        localStorage.setItem("username", data.username);
        navigate("/dashboard");
      } else {
        setError(data.message || "login failed.");
      }
    } catch (error) {
      setError("server error. please try agin later.");
    }
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-green-50">
      <div className="w-full max-w-md bg-white p-8 rounded-lg shadow-lg border-t-4 border-green-600">
        <div className="flex justify-center mb-6">
          <img
            src="https://media.istockphoto.com/id/998124024/photo/back-to-school-colorful-text.jpg?s=2048x2048&w=is&k=20&c=YXZL7-2_imFXBmi5NNQlhmRUN4lBcBggQO3nL62MfI4="
            alt="Ethio Parent School"
            className="h-20 w-auto"
          />
        </div>
        <h2 className="text-3xl font-bold text-center mb-6 text-green-700">
          Ethio Parent School Login
        </h2>
        {error && <p className="text-red-500 mb-4 text-center">{error}</p>}

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-gray-700 font-semibold mb-2">
              Email Address
            </label>
            <input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
            />
          </div>
          <div>
            <label className="block text-gray-700 font-semibold mb-2">
              Password
            </label>
            <input
              type="password"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-green-600 text-white py-3 rounded-lg font-semibold hover:bg-green-700 transition duration-300"
          >
            Login
          </button>
        </form>
        <p className="mt-6 text-center text-gray-600">
          Don't have an account?{" "}
          <a
            href="/register"
            className="text-green-600 font-bold hover:text-green-700"
          >
            Register here
          </a>
        </p>
      </div>
    </div>
  );
};

export default Login;
