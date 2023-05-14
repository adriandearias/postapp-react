import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Home from './pages/Home/Home';
import CreatePost from './pages/CreatePost/CreatePost';

function App() {
  const [posts, setPosts] = useState([]);

  const handleAddPost = (newPost) => {
    setPosts((prevPosts) => [newPost, ...prevPosts]);
  };

  return (
    <Router>
      <Routes>
        <Route path="/home" element={<Home posts={posts} />} />
        <Route path="*" element={<Navigate to="/home" />} />
        <Route path="/create-post" element={<CreatePost handleAddPost={handleAddPost} />} />
      </Routes>
    </Router>
  );
}

export default App;
