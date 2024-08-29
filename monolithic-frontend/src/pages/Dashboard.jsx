// src/pages/Dashboard.jsx
import React from 'react';
import styled from 'styled-components';
import Sidebar from '../components/Sidebar';
import Feed from '../components/Feed';
import SuggestedMentors from '../components/SuggestedMentors';


const DashboardWrapper = styled.div`
  display: flex;
`;

const ContentWrapper = styled.div`
  margin-left: 250px; /* Width of the sidebar */
  padding: 20px;
  flex: 1;
`;

const Dashboard = () => {
  return (
    <DashboardWrapper>
      <Sidebar />
      <ContentWrapper>
        <Feed />
       
        <SuggestedMentors />
      </ContentWrapper>
    </DashboardWrapper>
  );
};

export default Dashboard;
