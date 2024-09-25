import React from 'react';
import Title from '../../atoms/Title/Title';
import Image from '../../atoms/Image/Image';
import pokeball from '../../../assets/pokeball.svg'

import './style.css';


export const Nav = () => {
    return (
        <div className='nav'>
            <Image alt='Logo-pokeball' src={pokeball} width={24} height={24} />
            <Title text='Pokédex' />
        </div>

    );
};

export default Nav;