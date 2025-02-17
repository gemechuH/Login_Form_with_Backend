// import { useEffect, useState } from "react";

import { Link } from "react-router-dom";

// const Dashboard = () => {
//   const [user, setUser] = useState(null);

//   useEffect(() => {
//     const token = localStorage.getItem("token");

//     if (!token) {
//       window.location.href = "/"; // Redirect to login if not authenticated
//     } else {
//       fetch("http://localhost:5000/api/user", {
//         headers: { Authorization: `Bearer ${token}` },
//       })
//         .then((res) => res.json())
//         .then((data) => setUser(data))
//         .catch(() => {
//           localStorage.removeItem("token");
//           window.location.href = "/";
//         });
//     }
//   }, []);

//   return (
//     <div className="flex items-center justify-center min-h-screen bg-gray-100">
//       <div className="p-6 bg-white shadow-md rounded-md">
//         <h2 className="text-2xl font-bold">Welcome to Dashboard</h2>
//         {user ? (
//           <p className="mt-2 text-gray-700">Hello, {user.email}!</p>
//         ) : (
//           <p className="mt-2 text-red-500">Loading user data...</p>
//         )}
//         <button
//           onClick={() => {
//             localStorage.removeItem("token");
//             window.location.href = "/";
//           }}
//           className="mt-4 bg-red-500 text-white py-2 px-4 rounded hover:bg-red-600"
//         >
//           Logout
//         </button>
//       </div>
//     </div>
//   );
// };

// export default Dashboard;



// import { useEffect } from "react";
// import { useNavigate } from "react-router-dom";

// const Dashboard = () => {
//   const navigate = useNavigate();

//   useEffect(() => {
//     // Check if the user is authenticated
//     const token = localStorage.getItem("token");
//     if (!token) {
//       alert("Unauthorized access! Please log in.");
//       navigate("/"); // Redirect to login if not authenticated
//     }
//   }, [navigate]);

//   const handleLogout = () => {
//     localStorage.removeItem("token"); // Remove token
//     navigate("/"); // Redirect to login
//   };

//   return (
//     <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
//       <div className="bg-white p-6 rounded-lg shadow-md w-full max-w-md">
//         <h2 className="text-2xl font-semibold text-center">
//           Welcome to Dashboard
//         </h2>
//         <p className="text-gray-600 text-center mt-2">You are logged in!</p>
//         <button
//           onClick={handleLogout}
//           className="w-full mt-4 bg-red-500 text-white py-2 px-4 rounded hover:bg-red-600"
//         >
//           Logout
//         </button>
//       </div>
//     </div>
//   );
// };

// export default Dashboard;


const Dashboard = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-6 rounded-lg shadow-md w-full max-w-md flex flex-col items-center justify-center">
        <h2 className="text-2xl font-semibold text-center">
          Welcome to Dashboard
        </h2>
        <p className="text-gray-600 text-center mt-2">You are logged in!</p>
        <Link to="/" className="bg-red-500 text-center items-center justify-center pt-2 p-3 text-amber-50 mt-10 rounded-xl">
          LogOut
        </Link>
      </div>
    </div>
  );
};

export default Dashboard;


