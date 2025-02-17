
// import { Route, Router, Routes } from 'react-router-dom';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import './App.css'

import Dashboard from './components/Dashboard';

import Login from "./components/Login";
import Register from "./components/Register";

function App() {


  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Login />}/>
          <Route path="/register" element={<Register/> } />
        <Route path='/dashboard' element={<Dashboard/> } />
        </Routes>
      </Router>
      {/* <Login/> */}
    </>
  );
}

export default App
