import React from 'react';
import pokeball from '../assets/pokeball.svg'

export const NavBar = () => {


    return (
        <div className='navbar'>
            <img src={pokeball} alt="Logo-pokeball" className='logo' />
            <h1 className='tittle'>Pokédex</h1>
        </div>

    );
};