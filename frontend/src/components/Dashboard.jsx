import React, { useState } from "react";
import { Link } from "react-router-dom";

const Dashboard = () => {
  const username = localStorage.getItem("username");

  // Sample student data (replace with actual data from your backend)
  const [students] = useState([
    {
      id: 220,
      name: username,
      grade: "Grade 12",
      section: "A",
      
      performance: "N/A",
      schoolName: "Ethio Parent School",
    }
    
  ]);

  return (
    <div className="min-h-screen bg-green-50">
      {/* Header */}
      <header className="bg-green-600 text-white p-4 shadow-md">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="flex items-center space-x-4">
            <img
              src="https://media.istockphoto.com/id/998124024/photo/back-to-school-colorful-text.jpg?s=2048x2048&w=is&k=20&c=YXZL7-2_imFXBmi5NNQlhmRUN4lBcBggQO3nL62MfI4="
              alt="School Logo"
              className="h-12 w-auto"
            />
            <h1 className="text-2xl font-bold">Ethio Parent School Portal</h1>
          </div>
          <div className="flex items-center space-x-4">
            <span className="font-semibold">
              Welcome, {username || "Guest"}
            </span>
            <Link
              to="/"
              className="bg-white text-green-600 px-4 py-2 rounded-lg hover:bg-green-100 transition duration-300"
            >
              Logout
            </Link>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto p-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          {/* Summary Cards */}
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-2">Total Students</h3>
            <p className="text-3xl font-bold text-green-600">1250</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-2">Average Attendance</h3>
            <p className="text-3xl font-bold text-green-600">94%</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-2">Performance Index</h3>
            <p className="text-3xl font-bold text-green-600">8.5/10</p>
          </div>
        </div>

        {/* Student List */}
        <div className="bg-white rounded-lg shadow-md overflow-hidden">
          <div className="p-6 border-b">
            <h2 className="text-2xl font-bold text-gray-800">
              Student Information
            </h2>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Name
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Grade
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Section
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Attendance
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Performance
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Parent Name
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {students.map((student) => (
                  <tr key={student.id} className="hover:bg-gray-50">
                    <td className="px-6 py-4 whitespace-nowrap">
                      {student.name}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      {student.grade || "N/A"}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      {student.section || "N/A"}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      {student.attendance || "N/A"}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      {student.performance || "N/A"}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      {student.schoolName || "N/A"}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Dashboard;
