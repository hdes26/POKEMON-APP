import React from 'react';
import './style.css';
import arrow from '../../../assets/arrow.svg';
import rightArrow from '../../../assets/right-arrow.svg';
import leftArrow from '../../../assets/left-arrow.svg';

import pokeball from '../../../assets/pokeball.svg';
import Image from '../../atoms/Image/Image';
import Title from '../../atoms/Title/Title';

import useGetPokemon from '../../../hooks/useGetPokemon';
import { useNavigate, useParams } from 'react-router-dom';
import { PokemonTypes } from '../../../types/pokemon';

export const PokemonDetails: React.FC = () => {

    const navigate = useNavigate();



    const { id } = useParams<{ id: string }>();
    const pokemonId = id ? parseInt(id) : 1;
    const { pokemon } = useGetPokemon(pokemonId);

    const hasPokemonData = pokemon && Object.keys(pokemon).length > 0;

    const handleClickArrow = () => {
        navigate('/');
    };

    const handleClickNextPokemon = () => {
        navigate(`/details/${parseInt(pokemon.id) + 1}`);
    };

    const handleClickPreviousPokemon = () => {
        navigate(`/details/${parseInt(pokemon.id) - 1}`);
    };

    const backgroundColors: Record<PokemonTypes, string> = {
        grass: "#74CB48",       // Grass type
        fire: "#F57D31",        // Fire type
        water: "#6493EB",       // Water type
        bug: "#A7B723",         // Bug type
        normal: "#AAA67F",      // Normal type
        electric: "#F9CF30",    // Electric type
        psychic: "#FB5584",     // Psychic type
        ghost: "#70559B",       // Ghost type
    };


    const typeName = hasPokemonData
        ? pokemon.pokemon_v2_pokemontypes[0]?.pokemon_v2_type?.name as PokemonTypes
        : undefined; 

    const backgroundColor = typeName ? backgroundColors[typeName] : "#FFFFFF";



    return (
        <div className="pokemon-details" style={{ backgroundColor: backgroundColor}}>
            {hasPokemonData ? (
                <>
                    <div className='detail-header'>
                        <div className='detail-header-title'>
                            <div className='detail-header-nav'>
                                <div onClick={handleClickArrow}>
                                    <Image src={arrow} width={24} height={24} alt='arrow' />
                                </div>
                                <Title text={pokemon.name} />
                            </div>
                            <Title text={`#${pokemon.id}`} />
                        </div>
                        <div className='detail-header-bg'>
                            <Image alt='pokeball' src={pokeball} width={250} height={250} />
                        </div>
                    </div>

                    {
                        parseInt(pokemon.id) !== 1 ? (
                            <div className='detail-arrows'>
                                <div onClick={handleClickPreviousPokemon}>
                                    <Image src={leftArrow} width={24} height={24} alt='left-arrow' />
                                </div>

                                <div onClick={handleClickNextPokemon}>
                                    <Image src={rightArrow} width={24} height={24} alt='right-arrow' />
                                </div>
                            </div>
                        ) : (
                            <div className='first-detail-arrows'>
                                <div onClick={handleClickNextPokemon}>
                                    <Image src={rightArrow} width={24} height={24} alt='right-arrow' />
                                </div>
                            </div>
                        )
                    }



                    <div className='detail-card'>
                        <Image
                            alt='pokemon'
                            src={pokemon.pokemon_v2_pokemonsprites[0].sprites.other.home.front_default}
                            width={250}
                            height={250}
                        />
                    </div>
                </>
            ) : (
                <p>Loading...</p>
            )}
        </div>
    );
}

export default PokemonDetails;
