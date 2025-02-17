import React from "react";

const Register = () => {
  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-100">
      <div className="w-full max-w-md bg-white p-6 rounded-lg shadow-md  ">
        <h2 className="text-2xl font-semibold text-center mb-4 p-2 rounded bg-gray-400">
          Register
        </h2>

        <form>
          <label htmlFor="">Name</label>
          <input
            type="text"
            placeholder="Username"
            className="w-full px-3 py-2 border rounded mb-2"
          />
          <label htmlFor="">Email</label>
          <input
            type="email"
            className="w-full px-3 py-2 border rounded mb-2"
          />
          <label htmlFor="">Password</label>
          <input
            type="password"
            placeholder="Password"
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
