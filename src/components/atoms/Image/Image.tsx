import React from 'react';
import PropTypes from 'prop-types';
import './style.css';

interface ImageProps {
    src: string;
    alt: string;
    width: number;
    height: number;
}
export const Image = (props: ImageProps) => {
    return (
        <img className="image" src={props.src} alt={props.alt} id={props.alt} width={props.width} height={props.height} />
    );
};

Image.propTypes = {
    src: PropTypes.string.isRequired,
    alt: PropTypes.string.isRequired,
    width: PropTypes.number.isRequired,
    height: PropTypes.number.isRequired,
};

export default Image;