import React from 'react';
import PokemonCard from '../../molecules/PokemonCard/PokemonCard';
import useGetPokemons from '../../../hooks/useGetPokemons'
import './style.css';



export const PokemonList: React.FC = () => {
    const { pokemonList } = useGetPokemons()

    return (
        <div className="pokemon-list">
            {pokemonList.length > 0 ? (
                pokemonList.map((pokemon) => (
                    <PokemonCard
                        src={pokemon.pokemon_v2_pokemonsprites[0].sprites.other.home.front_default}
                        key={pokemon.id}
                        number={pokemon.id}
                        name={pokemon.name}
                    />
                ))
            ) : (
                <p>Loading...</p>
            )}
        </div>
    );
};

export default PokemonList;
