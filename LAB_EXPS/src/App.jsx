import React, { useState } from 'react'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import Layout1 from './components/Layout1'
import Layout2 from './components/Layout2'
import Lab_2 from './components/Lab_2'
import FSADlabs from './components/FSADlabs'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'
import UserProfile from './components/UserProfile'

const App = () => {
  const [userData, setUserData] = useState({
    name: "John Doe",
    age: 25,
    location: "Vijayawada"
  });

  const handleUpdateProfile = (newData) => {
    setUserData(newData);
  };

  return (
    <Router>
      <div>
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
          <div className="container">
            <Link className="navbar-brand" to="/">FSAD Labs</Link>
            <button 
              className="navbar-toggler" 
              type="button" 
              data-bs-toggle="collapse" 
              data-bs-target="#navbarNav"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav ms-auto">
                <li className="nav-item">
                  <Link className="nav-link fs-5" to="/lab1">LAB_1</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link fs-5" to="/lab2">LAB_2</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link fs-5" to="/lab3">LAB_3</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link fs-5" to="/lab4">LAB_4</Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>

        <div className="container mt-4">
          <Routes>
            <Route path="/" element={<FSADlabs />} />
            <Route path="/lab1" element={
              <div className="row">
                <div className="col-12">
                  <h2 className="text-center mb-4">This is Layout1</h2>
                  <Layout1 />
                  <h2 className="text-center my-4">This is Layout2</h2>
                  <Layout2 />
                </div>
              </div>
            } />
            <Route path="/lab2" element={<Lab_2/>} />
            <Route path="/lab4" element={<Lab_2/>} />

            <Route path="/lab3" element={
              <div className="d-flex justify-content-center align-items-center" style={{ minHeight: '80vh' }}>
                <div className="col-md-10">
                  <UserProfile 
                    userData={userData} 
                    onUpdateProfile={handleUpdateProfile}
                  />
                </div>
              </div>
            } />
          </Routes>
        </div>
      </div>
    </Router>
  )
}

export default App
