

import { Link, } from "react-router-dom";






const Dashboard = () => {
  
 
  const username = localStorage.getItem("username")


  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-6 rounded-lg shadow-md w-full max-w-md flex flex-col items-center justify-center">
        <h1 className="text-2xl font-bold text-center">
          Welcome {username ? username : "Guest"}
        </h1>
        <h3 className="text-2xl font-semibold text-center text-green-300">this your Dashboard</h3>

        <p className="text-gray-600 text-center mt-2">You are logged in!</p>
        <Link
          to="/"
          className="bg-red-500 text-center items-center justify-center pt-2 p-3 text-amber-50 mt-10 rounded-xl"
       >
          LogOut
        </Link>
      </div>
    </div>
  );
};

export default Dashboard;


