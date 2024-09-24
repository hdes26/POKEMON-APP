import { useEffect, useState } from "react";


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

interface Pokemon {
    id: string;
    name: string;
    pokemon_v2_pokemonsprites: { sprites: { other: { home: { front_default: string } } } }[];
}

const useGetPokemons = () => {

    const [pokemonList, setPokemonList] = useState<Pokemon[]>([]);

    const fetchPokemons = async () => {
        try {            
            const response = await fetch('https://beta.pokeapi.co/graphql/v1beta', {
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

            setPokemonList(data.data.pokemon_v2_pokemon);
        } catch (error) {
            console.error('Error fetching pokemons:', error);
        }
    };


    useEffect(() => {
        fetchPokemons();
    }, []);

    return { pokemonList }
}

export default useGetPokemons;