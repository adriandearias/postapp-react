import React from 'react';
import '../styles/Button.css';

function Button({ children, type, onClick, className }) {
    return (
        <button
            type={type}
            onClick={onClick}
            className={`bg-color hover:bg-blue-700 text-color font-bold py-2 px-4 rounded ${className}`}
        >
            {children}
        </button>
    );
}

Button.defaultProps = {
    type: 'button',
    className: '',
};

export default Button;
