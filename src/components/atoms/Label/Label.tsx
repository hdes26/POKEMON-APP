import React from 'react';
import PropTypes from 'prop-types';
import './style.css';

interface LabelProps {
    text: string | number;
}
export const Label = (props: LabelProps) => {
    return (
        <span className="label">{props.text}</span>

    );
};

Label.propTypes = {
    text: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.number,
    ]).isRequired,
};

export default Label;