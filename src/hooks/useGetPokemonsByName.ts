import { useEffect, useState } from "react";
import { Pokemon } from "../types/pokemon";

const POKEMON_QUERY = `
  query getPokemons($limit: Int!, $name: String) {
    pokemon_v2_pokemon(limit: $limit, where: { name: { _ilike: $name } }) {
      id
      name
      pokemon_v2_pokemonsprites {
        sprites
      }
    }
  }
`;



const useGetPokemonsByName = (searchTerm: string) => {
  const [pokemonList, setPokemonList] = useState<Pokemon[]>([]);

  const fetchPokemons = async (name: string) => {
    try {
      const response = await fetch("https://beta.pokeapi.co/graphql/v1beta", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          query: POKEMON_QUERY,
          variables: { limit: 9, name: `%${name}%` }, // Correcto uso de la interpolación
        }),
      });

      const data = await response.json();
      setPokemonList(data.data.pokemon_v2_pokemon);
    } catch (error) {
      console.error("Error fetching pokemons:", error);
    }
  };

  useEffect(() => {
    fetchPokemons(searchTerm);
  }, [searchTerm]);

  return { pokemonList };
};

export default useGetPokemonsByName;
