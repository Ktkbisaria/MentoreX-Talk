// src/App.jsx
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import MentorProfilePage from './pages/MentorProfilePage';
import LoginPage from './pages/LoginPage';
import SignUpPage from './pages/SignUpPage';


import Dashboard from './pages/Dashboard';

const App = () => {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/mentors/:id" element={<MentorProfilePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/signup" element={<SignUpPage />} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
// hello
//hi
//huhuuhuuu