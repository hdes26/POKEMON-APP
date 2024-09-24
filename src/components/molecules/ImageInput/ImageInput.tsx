import React from 'react';
import PropTypes from 'prop-types';

import Input from '../../atoms/Input/Input';
import Image from '../../atoms/Image/Image';

import './style.css';

interface ImageInputProps {
    src: string;
    alt: string;
    width: number;
    height: number;
}
export const ImageInput = (props: ImageInputProps) => {
    return (
        <div className='image-input'>
            <Image alt={props.alt} src={props.src} width={props.width} height={props.height} />
            <Input text='' placeholder='Search' type='text' />
        </div>

    );
};


ImageInput.propTypes = {
    src: PropTypes.string.isRequired,
    alt: PropTypes.string.isRequired,
    width: PropTypes.number.isRequired,
    height: PropTypes.number.isRequired,
}

export default ImageInput;