import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import "./App.css";

function Courses (){
  return (
    <div className='container'>
         <div className="d-none d-lg-flex align-items-center">
            <span className="header-text">Free Courses 🌟 Sale Ends Soon, Get It Now →</span>
          </div>
         
    <nav className="navbar navbar-expand-lg navbar-custom">
      <div className="container">
        {/* Brand Logo */}
        <a className="navbar-brand" href="#">
          <img
            src="path-to-logo.png" // Replace with the path to your logo
            alt="Logo"
            width="30"
            height="30"
          />
        </a>

        {/* Sale Banner */}
        <span className="header-text d-lg-none mb-2">Free Courses 🌟 Sale Ends Soon, Get It Now →</span>

        {/* Toggler for Mobile */}
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Navbar Links */}
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav mx-auto">
            <li className="nav-item">
              <a className="nav-link" href="#">
                Home
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Courses
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                About Us
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Pricing
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Contact
              </a>
            </li>
          </ul>
          <div className="ml-lg-4">
            <a className="btn btn-outline-light mr-2" href="#">
              Sign Up
            </a>
            <a className="btn btn-warning" href="#">
              Login
            </a>
          </div>
        </div>
      </div>
    </nav>
    
    <div className='divi'>
    <h1>Online Courses on Design and <br/> Development</h1>
    </div>
    <div>
        <p>Welcome to our online course page, where you can enhance your skills in design and development. Choose from our carefully 
            curated selection of 10 courses designed to provide you with comprehensive knowledge
             and practical experience. Explore the courses below and find the perfect fit for your learning journey.</p>
    </div>
</div>
    

  );
};

export default Courses;
