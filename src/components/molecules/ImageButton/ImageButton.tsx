import React from 'react';
import PropTypes from 'prop-types';

import Image from '../../atoms/Image/Image';

import './style.css';

interface ImageButtonProps {
    src: string;
    alt: string;
    width: number;
    height: number;
}

export const ImageButton = (props: ImageButtonProps) => {
    return (
        <button className='image-button'>
            <Image alt='len' src={props.src} width={props.width} height={props.height} />
        </button>

    );
};

ImageButton.propTypes = {
    src: PropTypes.string.isRequired,
    alt: PropTypes.string.isRequired,
    width: PropTypes.number.isRequired,
    height: PropTypes.number.isRequired,
};

export default ImageButton;