// src/components/Feed.jsx
import React from 'react';
import styled from 'styled-components';

const FeedWrapper = styled.div`
  background-color: #1c1c1c;
  padding: 20px;
  border-radius: 8px;
  margin-bottom: 20px;
  color: #fff;
`;

const Post = styled.div`
  background-color: #2c2c2c;
  padding: 15px;
  border-radius: 8px;
  margin-bottom: 10px;
`;

const Feed = () => {
  return (
    <FeedWrapper>
      <h2>Stay Informed and Inspired</h2>
      <Post>
        <h3>Viraj Domadia</h3>
        <p>Suggest some good resources for learning DSA and web development</p>
        <div>
          <button>Like</button>
          <button>Comment</button>
          <button>Share</button>
        </div>
      </Post>
      {/* Repeat Post component for multiple posts */}
    </FeedWrapper>
  );
};

export default Feed;
