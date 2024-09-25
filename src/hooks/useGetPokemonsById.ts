import { useEffect, useState } from "react";
import { Pokemon } from "../types/pokemon";

const POKEMON_QUERY = `
  query getPokemons($id: Int!) {
    pokemon_v2_pokemon(where: { id: { _eq: $id } }) {
      id
      name
      pokemon_v2_pokemonsprites {
        sprites
      }
    }
  }
`;
const useGetPokemonsById = (searchTerm: string) => {
    const [pokemonList, setPokemonList] = useState<Pokemon[]>([]);

    const fetchPokemons = async (id: number) => {
        try {
            
            const response = await fetch('https://beta.pokeapi.co/graphql/v1beta', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    query: POKEMON_QUERY,
                    variables: { id },
                }),
            });
            const data = await response.json();
            setPokemonList(data.data.pokemon_v2_pokemon);
        } catch (error) {
            console.error('Error fetching pokemons:', error);
        }
    };

    useEffect(() => {
        if (searchTerm) {
            const id = parseInt(searchTerm);
            if (!isNaN(id)) {
                fetchPokemons(id);
            } else {
                setPokemonList([]);
            }
        } else {
            setPokemonList([]);
        }
    }, [searchTerm]);

    return { pokemonList };
};

export default useGetPokemonsById;