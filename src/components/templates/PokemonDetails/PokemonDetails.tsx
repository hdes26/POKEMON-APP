import React from 'react';
import './style.css';
import Image from '../../atoms/Image/Image';
import Title from '../../atoms/Title/Title';
import arrow from '../../../assets/arrow.svg';
import pokeball from '../../../assets/pokeball.svg';
import useGetPokemon from '../../../hooks/useGetPokemon';
import { useNavigate, useParams } from 'react-router-dom';
import ImageButton from '../../molecules/ImageButton/ImageButton';

export const PokemonDetails: React.FC = () => {

    const navigate = useNavigate();



    const { id } = useParams<{ id: string }>();
    const pokemonId = id ? parseInt(id) : 1; 
    const { pokemon } = useGetPokemon(pokemonId);

    const hasPokemonData = pokemon && Object.keys(pokemon).length > 0;

    const handleClickArrow = () => {
        navigate('/'); // Redirige a la ruta deseada
    };
    
    /* const handleClickNextPokemon = () => {
        navigate(`/details/${hasPokemonData ?? pokemon.id + 1}`); 
    }; */



    
    return (
        <div className="pokemon-details" style={{ backgroundColor: "#74CB48" }}>
            {hasPokemonData ? (
                <>
                    <div className='detail-header'>
                        <div className='detail-header-title'>
                            <div className='detail-header-nav'>
                                <div onClick={handleClickArrow}>
                                <ImageButton src={arrow} width={24} height={24} alt='arrow'/>
                                </div>
                                <Title text={pokemon.name}  />
                            </div>
                            <Title text={`#${pokemon.id}`} />
                        </div>
                        <div className='detail-header-bg'>
                            <Image alt='pokeball' src={pokeball} width={250} height={250} />
                        </div>
                    </div>

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
