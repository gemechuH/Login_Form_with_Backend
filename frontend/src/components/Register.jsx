import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Register = () => {



  const [username, setUsername] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [error, setError] = useState("")
  const navigate = useNavigate("")

  const handleSubmit = async (e) => {
    e.preventDefault()
    setError("")

    if (!username || !email || !password) {
      setError("All fields are required.")
      return
    }

    try {
      const response = await fetch("http://localhost:5000/api/register",{
        method: "POST",
        headers: { "content-Type": "application/json" },
        body: JSON.stringify({username, email, password})
      })
      const data = await response.json()

      if (response.ok) {
        alert("Registration successful! You can now your dashboard.");
        // Save the username in localStorage
        localStorage.setItem("username", data.username);
        navigate("/dashboard");
      } else {
        setError(data.message || "registration failed.")
      }
    } catch (error) {
      setError("server error. please try again later.")
    }
  }



  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-100">
      <div className="w-full max-w-md bg-white p-6 rounded-lg shadow-md  ">
        <h2 className="text-3xl font-semibold text-center mb-4 p-2 rounded text-blue-700">
          Register
        </h2>
        {error && <p className="text-red-500">{error}</p> }

        <form onSubmit={handleSubmit}>
          <label htmlFor="">Name</label>
          <input
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e)=>setUsername(e.target.value)}
            className="w-full px-3 py-2 border rounded mb-2"
          />
          <label htmlFor="">Email</label>
          <input
            type="email"
            value={email}
            onChange={(e)=>setEmail(e.target.value)}
            className="w-full px-3 py-2 border rounded mb-2"
          />
          <label htmlFor="">Password</label>
          <input
            type="password"
            value={password}
            placeholder="Password"
            onChange={(e)=>setPassword(e.target.value)}
            className="w-full px-3 py-2 border rounded mb-2"
          />
          <button className="w-60 ml-20 text-center bg-red-400 text-white py-2 rounded hover:bg-blue-600">
            Register
          </button>
        </form>
        <p className="mt-3 text-gray-600">
          Already have an account?{" "}
          <a href="/" className="text-blue-500  font-bold hover:text-blue-600">
            Login
          </a>
        </p>
      </div>
    </div>
  );
};

export default Register;
