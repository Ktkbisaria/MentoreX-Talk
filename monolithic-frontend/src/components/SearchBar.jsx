// src/components/SearchBar.jsx
import React from 'react';
import styled from 'styled-components';

const SearchWrapper = styled.div`
  margin: 20px auto;
  max-width: 600px;
`;

const SearchBar = () => {
  return (
    <SearchWrapper>
      <input type="text" placeholder="Search for mentors..." />
      <button>Search</button>
    </SearchWrapper>
  );
};

export default SearchBar;
