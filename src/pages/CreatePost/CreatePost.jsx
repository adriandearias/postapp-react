import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { useHistory } from 'react-router-dom';
import Form from '../../components/Form';

function CreatePost({ handleAddPost }) {
  const history = useHistory();
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
    handleAddPost(data);
    history.push('/home');
  };

  return (
    <div>
      <h1>Create Post</h1>
      <Form onSubmit={handleSubmit} onChange={handleChange} data={formData} />
    </div>
  );
}

CreatePost.propTypes = {
  handleAddPost: PropTypes.func.isRequired,
};

export { CreatePost };
