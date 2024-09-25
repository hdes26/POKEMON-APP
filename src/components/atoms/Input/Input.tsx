import React from 'react';
import PropTypes from 'prop-types';
import './style.css';
import usePokemonSearch from '../../../hooks/usePokemonSearch';

interface InputProps {
  type: string;
  placeholder: string;
  text: string;
}

export const Input: React.FC<InputProps> = (props) => {
  const { inputValue, setInputValue } = usePokemonSearch(props.text || '');

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
