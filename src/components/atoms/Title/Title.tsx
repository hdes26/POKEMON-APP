import React from 'react';
import PropTypes from 'prop-types';
import './style.css';

interface TitleProps {
    text: string;
}
export const Title = (props: TitleProps) => {
    return (
        <h1 className="title">{props.text}</h1>
    );
};

Title.propTypes = {
    text: PropTypes.string.isRequired,
};

export default Title;