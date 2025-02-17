import React from 'react'

const Login = () => {
  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-100">
      <div className="w-full max-w-md bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-2xl font-semibold text-center mb-4 bg-gray-400 p-2 rounded">Login</h2>
        <form action="" className="space-y-4">
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">
              Email
            </label>
            <input type="email" className="mt-1 p-2 w-full border rounded-md outline" />
          </div>
          <div>
            <label htmlFor="password" className="block text-sm font-medium text-gray-700">
              Password
            </label>
            <input type="password" className="mt-1 p-2 w-full border rounded-lg" />
          </div>
          
            
            <button type='submit' className='w-60 text-center ml-20 bg-blue-500 text-white py-2 px-4 rounded hover:bg-red-400'>Login</button>
              </form>
              <p className='mt-4 text-gray-600'>
                  Already Have an account?
                  <a href="/register" className='text-red-400 font-semibold hover:text-red-600'>Register</a>
              </p>
          </div>
          
      </div>
      
  );
}

export default Login
