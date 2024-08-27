// src/components/Sidebar.jsx
import React from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

const SidebarWrapper = styled.div`
  width: 250px;
  background-color: #111;
  height: 100vh;
  position: fixed;
  display: flex;
  flex-direction: column;
  padding-top: 20px;
  color: #fff;
`;

const SidebarLink = styled(NavLink)`
  padding: 15px 20px;
  color: #ddd;
  text-decoration: none;
  display: flex;
  align-items: center;

  &:hover {
    background-color: #333;
    color: #fff;
  }

  &.active {
    background-color: #007bff;
    color: #fff;
  }
`;

const Sidebar = () => {
  return (
    <SidebarWrapper>
      <SidebarLink to="/feed">Feed</SidebarLink>
      <SidebarLink to="/search">Search</SidebarLink>
      <SidebarLink to="/mentors">Mentors</SidebarLink>
      <SidebarLink to="/ask">Ask</SidebarLink>
      <SidebarLink to="/roadmaps">Roadmaps</SidebarLink>
      <SidebarLink to="/problems">Problems</SidebarLink>
      <SidebarLink to="/communities">Communities</SidebarLink>
      <SidebarLink to="/sessions">Sessions</SidebarLink>
      <SidebarLink to="/inbox">Inbox</SidebarLink>
      <SidebarLink to="/webinar">Webinar</SidebarLink>
      <SidebarLink to="/bootcamps">Bootcamps</SidebarLink>
      <SidebarLink to="/resume-review">Resume Review</SidebarLink>
      <SidebarLink to="/mock-interviews">Mock Interviews</SidebarLink>
    </SidebarWrapper>
  );
};

export default Sidebar;
