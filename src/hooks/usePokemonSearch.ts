import { useState, useEffect, useMemo } from 'react';
import { useAppDispatch, useAppSelector } from '../redux/hooks';
import { setPokemons } from '../redux/features/PokemonSlice';
import useGetPokemonsByName from './useGetPokemonsByName';
import useGetPokemonsById from './useGetPokemonsById';
import { Pokemon } from '../types/pokemon';

interface UsePokemonSearchResult {
  inputValue: string;
  setInputValue: (value: string) => void;
  pokemonList: Pokemon[];
}

const usePokemonSearch = (initialValue: string = ''): UsePokemonSearchResult => {
  const [inputValue, setInputValue] = useState(initialValue);
  const [debouncedValue, setDebouncedValue] = useState(initialValue);
  const dispatch = useAppDispatch();

  const currentSort = useAppSelector((state: any) => state.sortReducer.selectedSection);

  const { pokemonList: nameList } = useGetPokemonsByName(debouncedValue);
  const { pokemonList: idList } = useGetPokemonsById(debouncedValue);

  const pokemonList = useMemo(() => {
    return currentSort === 'name' ? nameList : idList;
  }, [currentSort, nameList, idList]);

  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedValue(inputValue);

      if (inputValue === '') {
        dispatch(setPokemons(nameList));
      } else {
        dispatch(setPokemons(pokemonList));
      }
    }, 300);

    return () => clearTimeout(handler);
  }, [inputValue, pokemonList, nameList, dispatch]);

  return {
    inputValue,
    setInputValue,
    pokemonList,
  };
};

export default usePokemonSearch;
