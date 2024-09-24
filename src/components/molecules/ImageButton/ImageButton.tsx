import React, { useState } from 'react';
import PropTypes from 'prop-types';

import Image from '../../atoms/Image/Image';
import SortCard from '../../organism/SortCard/SortCard';

import './style.css';

interface ImageButtonProps {
    src: string;
    alt: string;
    width: number;
    height: number;
}

export const ImageButton = (props: ImageButtonProps) => {
    const [isSortCardOpen, setIsSortCardOpen] = useState(false);

    const handleOpenModal = () => {
        setIsSortCardOpen(true);
    };

    const handleCloseModal = () => {
        setIsSortCardOpen(false);
    };

    return (
        <button className='image-button' onClick={handleOpenModal}>
            <Image alt='len' src={props.src} width={props.width} height={props.height} />
            <SortCard isVisible={isSortCardOpen} onClose={handleCloseModal} />
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