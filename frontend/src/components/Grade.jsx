import React from 'react'

const Grade = () => {
  return (
    <div>
      Grade
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
            Ethio Parent School Registration
          </h2>
          {error && <p className="text-red-500 mb-4 text-center">{error}</p>}

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-gray-700 font-semibold mb-2">
                Full Name
              </label>
              <input
                type="text"
                placeholder="Enter your full name"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
              />
            </div>
            <div>
              <label className="block text-gray-700 font-semibold mb-2">
                school email address for student only
              </label>
              <input
                type="email"
                placeholder="Enter your school email"
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
                placeholder="Create a password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
              />
            </div>
            <button className="w-full bg-green-600 text-white py-3 rounded-lg font-semibold hover:bg-green-700 transition duration-300">
              Register
            </button>
          </form>
          <p className="mt-6 text-center text-gray-600">
            Already have an account or i am existing student?{" "}
            <a
              href="/"
              className="text-green-600 font-bold hover:text-green-700"
            >
              Login here
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Grade