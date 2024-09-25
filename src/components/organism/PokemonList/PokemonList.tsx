import React from 'react';
import PokemonCard from '../../molecules/PokemonCard/PokemonCard';
import './style.css';
import { useAppSelector } from '../../../redux/hooks';
import { Pokemon } from '../../../types/pokemon';

export const PokemonList: React.FC = () => {
    const currentPokemons = useAppSelector((state) => state.pokemonReducer.pokemons);
    
    return (
        <div className="pokemon-list">
            {currentPokemons.length > 0 ? (
                currentPokemons.map((pokemon: Pokemon) => (
                    <PokemonCard
                        src={pokemon.pokemon_v2_pokemonsprites[0].sprites.other.home.front_default}
                        key={pokemon.id}
                        number={pokemon.id}
                        name={pokemon.name}
                    />
                ))
            ) : (
                <p>Searching...</p>
            )}
        </div>
    );
};

export default PokemonList;