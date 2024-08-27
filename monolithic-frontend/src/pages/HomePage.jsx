// src/pages/HomePage.jsx
import React from 'react';
import styled from 'styled-components';
import MentorCard from '../components/MentorCard';
import SearchBar from '../components/SearchBar';

const HeroSection = styled.section`
  padding: 40px;
  background-color: #e9ecef;
  text-align: center;
`;

const HomePage = () => {
  return (
    <div>
      <HeroSection>
        <h1>Connect with Experts & Mentors</h1>
        <p>Find the right mentor for your career growth.</p>
        <SearchBar />
      </HeroSection>
      {/* More sections like How It Works, Featured Mentors, etc. */}
      {/* Example Mentor Cards */}
      <MentorCard />
      <MentorCard />
      <MentorCard />
    </div>
  );
};

export default HomePage;
