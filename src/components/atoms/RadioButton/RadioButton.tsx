import React from 'react';
import PropTypes from 'prop-types';
import './style.css';

interface RadioButtonProps {
    id: number;
    checked: boolean;
    onChange: (checked: boolean) => void;
}
export const RadioButton = ({ checked, onChange, id }: RadioButtonProps) => {
    const handleRadioChange = () => {
        onChange(!checked);
    };
    return (
        <div className="custom-radio-container">
            <input
                type="radio"
                id={`custom-radio-${id}`}
                name="custom-radio-group"
                className="custom-radio"
                checked={checked}
                onChange={handleRadioChange}
            />
            <label htmlFor={`custom-radio-${id}`} className="custom-radio-label">
                <span className="custom-radio-label-inner"></span>
            </label>
        </div>
    );
};

RadioButton.propTypes = {
    id: PropTypes.number.isRequired,
    checked: PropTypes.bool.isRequired
};

export default RadioButton;