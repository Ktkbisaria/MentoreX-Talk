// src/components/MentorCard.jsx
import React from 'react';
import styled from 'styled-components';

const Card = styled.div`
  border: 1px solid #ddd;
  padding: 20px;
  margin: 10px;
`;

const MentorCard = () => {
  return (
    <Card>
      <h3>Mentor Name</h3>
      <p>Expertise: Software Engineering</p>
      <button>View Profile</button>
    </Card>
  );
};

export default MentorCard;
