import React, { useState } from 'react';
import PropTypes from 'prop-types';
import './style.css';

interface InputProps {
    type: string;
    placeholder: string;
    text: string;
}
export const Input = (props: InputProps) => {

    const [inputValue, setInputValue] = useState(props.text || '');

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setInputValue(event.target.value);
    };

    return (
        <input
            type={props.type}
            placeholder={props.placeholder}
            value={inputValue}
            className="input"
            onChange={handleChange}
        />
    );
};

Input.propTypes = {
    type: PropTypes.string.isRequired,
    placeholder: PropTypes.string.isRequired,
};

export default Input;