import React from 'react';
import './style.css';
import Image from '../../atoms/Image/Image';
import arrow from '../../../assets/arrow.svg';
import pokeball from '../../../assets/pokeball.svg';
import Title from '../../atoms/Title/Title';
import useGetPokemons from '../../../hooks/useGetPokemons';




export const PokemonDetails = () => {
    return (
        <div className="pokemon-details" style={{ backgroundColor: "#74CB48"}}>
            <div className='detail-header'>
                <div className='detail-header-title'>
                    <div className='detail-header-nav'>
                        <Image alt='arrow' src={arrow} width={24} height={24} />
                        <Title text='Bubasaur'/>
                    </div>
                    <Title text='#001'/>
                </div>
                {/* <div className='detail-header-img'>
                   <Image alt='pokeball' src={pokeball} width={300} height={300} />
                </div> */}
            </div>

            <div className='detail-card'>

            </div>
        </div>
    );
}

export default PokemonDetails;