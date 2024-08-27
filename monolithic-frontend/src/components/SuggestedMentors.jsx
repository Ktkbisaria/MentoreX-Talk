// src/components/SuggestedMentors.jsx
import React from 'react';
import styled from 'styled-components';

const MentorsWrapper = styled.div`
  background-color: #1c1c1c;
  padding: 20px;
  border-radius: 8px;
  color: #fff;
`;

const MentorCard = styled.div`
  background-color: #2c2c2c;
  padding: 15px;
  border-radius: 8px;
  margin-bottom: 10px;
`;

const SuggestedMentors = () => {
  return (
    <MentorsWrapper>
      <h2>Suggested Mentors</h2>
      <MentorCard>
        <h3>Vidit @Viditchitkara97</h3>
        <p>Software Engineer at Google</p>
        <p>3+ years of Experience at Google, Coding ninjas</p>
        <p>Ratings: 5.0, Sessions: 23</p>
        <button>View Profile</button>
      </MentorCard>
      {/* Repeat MentorCard component for multiple mentors */}
    </MentorsWrapper>
  );
};

export default SuggestedMentors;
