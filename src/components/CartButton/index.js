import React from 'react';
import './Button.css'

const Button = ({ children, onClick,  background}) => {
    return (
        <button style={{background: background}} onClick={onClick} className="Button">
            {children}
        </button>
    );
}

export default Button;