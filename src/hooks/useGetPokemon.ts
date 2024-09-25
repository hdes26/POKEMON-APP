import { useEffect, useState } from "react";
import { Pokemon } from "../types/pokemon";

const POKEMON_ID_QUERY = `
  query getPokemons($id: Int!) {
    pokemon_v2_pokemon(where: { id: { _eq: $id } }) {
      id
      name
      pokemon_v2_pokemontypes {
        pokemon_v2_type {
          name
        }
      }
      pokemon_v2_pokemonsprites {
        sprites
      }
    }
  }
`;




const useGetPokemon = (id: number) => {

  const [pokemon, setPokemon] = useState<Pokemon>({} as Pokemon);

  const fetchPokemonById = async (id: number) => {
    try {
      const response = await fetch('https://beta.pokeapi.co/graphql/v1beta', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          query: POKEMON_ID_QUERY,
          variables: { id: id },
        }),
      });
      const data = await response.json();

      setPokemon(data.data.pokemon_v2_pokemon[0]);
      return data.data.pokemon_v2_pokemon[0]
    } catch (error) {
      console.error('Error fetching pokemon:', error);
    }
  };


  useEffect(() => {
    fetchPokemonById(id);
  }, [id]);

  return { pokemon, fetchPokemonById }
}

export default useGetPokemon;