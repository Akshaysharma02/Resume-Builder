import React from 'react';
import { Helmet } from 'react-helmet';
import './App.css';
import ResumeState from './Context/ResumeState.js';
import { Routes, Route } from 'react-router-dom';
import Home from './Pages/Home/Home.jsx';
import Navbar from './Components/Navbar/Navbar.jsx';
import About from './Pages/About/About.jsx';

function App() {
  return (
    <ResumeState>
      <div className="App">
        <Helmet>
          <title>Resume Builder - Create Professional Resumes Online</title>
          <meta name="description" content="Build and customize professional resumes online with Resume Builder. Choose from a variety of templates and create your perfect resume easily." />
          <meta name="keywords" content="resume builder, professional resumes, online resumes, resume templates" />
          <meta name="author" content="Akshay Sharma" />
          <meta property="og:title" content="Resume Builder - Create Professional Resumes Online" />
          <meta property="og:description" content="Build and customize professional resumes online with Resume Builder. Choose from a variety of templates and create your perfect resume easily." />
          <meta property="og:image" content="https://avatars.githubusercontent.com/u/87645745?v=4" />
          <meta property="og:url" content="https://quick-resume.netlify.app/" />
          <meta property="og:type" content="website" />
        </Helmet>
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/home" element={<Home />} />
          <Route exact path="/about" element={<About />} />
        </Routes>
      </div>
    </ResumeState>
  );
}

export default App;
