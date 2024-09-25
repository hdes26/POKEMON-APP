import React from 'react';
import PropTypes from 'prop-types';
import Label from '../../atoms/Label/Label';
import Image from '../../atoms/Image/Image';

import './style.css';
import { useNavigate } from 'react-router-dom';

interface PokemonCardProps {
    number: string | number;
    name: string;
    src: string;
}

export const PokemonCard = (props: PokemonCardProps) => {
    const navigate = useNavigate();

    const handleClick = () => {
        navigate(`/details/${props.number}`); // Redirige a la ruta deseada
    };

    return (
        <div className='pokemon-card' onClick={handleClick}>
            <div className='number'>
                <Label text={props.number} />
            </div>
            <div className='photo'>
                <Image alt='bulbasaur' src={props.src} width={95} height={95} />
            </div>
            <div className='name'>
                <Label text={props.name} />
            </div>
        </div>

    );
};

PokemonCard.propTypes = {
    number: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.number,
    ]).isRequired,
    name: PropTypes.string.isRequired,
    src: PropTypes.string.isRequired,
};

export default PokemonCard;