import React from 'react';
import PropTypes from 'prop-types';

function Form({ onChange, onSubmit, data }) {
  const handleSubmit = (event) => {
    event.preventDefault();
    onSubmit(event);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="title">Título:</label>
        <input
          type="text"
          name="title"
          id="title"
          value={data.title}
          onChange={onChange}
          required
        />
      </div>
      <div>
        <label htmlFor="body">Contenido:</label>
        <textarea
          name="body"
          id="body"
          rows="5"
          value={data.body}
          onChange={onChange}
          required
        />
      </div>
      <div>
        <button type="submit">Guardar</button>
      </div>
    </form>
  );
}

Form.propTypes = {
  onChange: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired,
  data: PropTypes.shape({
    title: PropTypes.string.isRequired,
    body: PropTypes.string.isRequired,
  }).isRequired,
};

export default Form;
