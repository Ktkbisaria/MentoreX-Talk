// src/components/Header.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const HeaderWrapper = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
  background-color: #f8f9fa;
`;

const NavLinks = styled.nav`
  display: flex;
  gap: 20px;
`;

const Header = () => {
  return (
    <HeaderWrapper>
      <div>
        <Link to="/">Mentoretalk</Link>
      </div>
      <NavLinks>
        <Link to="/how-it-works">How It Works</Link>
        <Link to="/mentors">Find a Mentor</Link>
        <Link to="/login">Login</Link>
        <Link to="/signup">Sign Up</Link>
      </NavLinks>
    </HeaderWrapper>
  );
};

export default Header;
