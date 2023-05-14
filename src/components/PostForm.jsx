import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { useHistory } from 'react-router-dom';
import Form from '../../components/Form/Form';

function PostForm({ onSubmit }) {
  const [formData, setFormData] = useState({ title: '', body: '' });
  const history = useHistory();

  const handleSubmit = (event) => {
    event.preventDefault();
    onSubmit(formData);
    setFormData({ title: '', body: '' });
    history.push('/home');
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevFormData) => ({ ...prevFormData, [name]: value }));
  };

  return (
    <div>
      <h1>Create a Post</h1>
      <Form onChange={handleChange} onSubmit={handleSubmit} data={formData} />
    </div>
  );
}

PostForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

export default PostForm;
