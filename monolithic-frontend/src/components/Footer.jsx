// src/components/Footer.jsx
import React from 'react';
import styled from 'styled-components';

const FooterWrapper = styled.footer`
  padding: 20px;
  background-color: #f8f9fa;
  text-align: center;
`;

const Footer = () => {
  return (
    <FooterWrapper>
      <p>© 2024 Mentoretalk. All rights reserved.</p>
    </FooterWrapper>
  );
};

export default Footer;
