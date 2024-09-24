import React, { useEffect, useState } from 'react';
import PokemonCard from '../../molecules/PokemonCard/PokemonCard';
import './style.css';

const API_URL = 'https://beta.pokeapi.co/graphql/v1beta';

// Consulta GraphQL
const POKEMON_QUERY = `
  query getPokemons($limit: Int!) {
    pokemon_v2_pokemon(limit: $limit) {
      id
      name
      pokemon_v2_pokemonsprites {
        sprites
      }
    }
  }
`;
/* const POKEMON_QUERY_IMG = `
  query getPokemons($id: Int!) {
    pokemon_v2_pokemon(where: { id: { _eq: $id } }) {
      pokemon_v2_pokemonsprites {
        sprites
      }
    }
  }
`; */

interface Pokemon {
    id: string;
    name: string;
    pokemon_v2_pokemonsprites: { sprites: { other: { home: { front_default: string } } } }[];
}

export const PokemonList: React.FC = () => {
    const [pokemonList, setPokemonList] = useState<Pokemon[]>([]);

    const fetchPokemons = async () => {
        try {
            const response = await fetch(API_URL, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    query: POKEMON_QUERY,
                    variables: { limit: 9 },
                }),
            });
            const data = await response.json();
            console.log(data.data.pokemon_v2_pokemon[0].pokemon_v2_pokemonsprites[0].sprites.other.home.front_default);

            setPokemonList(data.data.pokemon_v2_pokemon);
        } catch (error) {
            console.error('Error fetching pokemons:', error);
        }
    };

    /*  const fetchPokemonImg = async (id: number) => {
         const response = await fetch(API_URL, {
             method: 'POST',
             headers: {
                 'Content-Type': 'application/json',
             },
             body: JSON.stringify({
                 query: POKEMON_QUERY_IMG,
                 variables: { id }, // Pasar el id como variable
             }),
         });
         const data = await response.json();
         console.log(data, "pppppp");
 
         return data;
     }; */

    useEffect(() => {
        fetchPokemons();
        /* fetchPokemonImg(1); */
    }, []);

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
