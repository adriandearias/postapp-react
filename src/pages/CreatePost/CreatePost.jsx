import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';

import Form from '../../components/Form';

import '../../styles/CreatePost.css';
import Menu from '../../components/Menu';

function CreatePost({ handleAddPost }) {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({ title: '', body: '' });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevFormData) => ({ ...prevFormData, [name]: value }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const response = await fetch('https://jsonplaceholder.typicode.com/posts', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    });
    const data = await response.json();
    console.log('Creando post: ', data);
    handleAddPost(data);
    navigate('/home');
  };

  return (
    <div className="create-post-container">
      <Menu />
      <div className="create-post-form-container">
        <h1>Create Post</h1>
        <Form onSubmit={handleSubmit} onChange={handleChange} data={formData} />
      </div>
    </div>
  );
}

CreatePost.propTypes = {
  handleAddPost: PropTypes.func.isRequired,
};

export default CreatePost;
