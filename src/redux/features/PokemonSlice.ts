import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Pokemon } from '../../types/pokemon';


const initialState = {
  pokemons: [] as Pokemon[],
};

export const pokemonSlice = createSlice({
  name: 'select',
  initialState,
  reducers: {
    setPokemons: (state, action: PayloadAction<Pokemon[]>) => {
      state.pokemons = action.payload;
    },
  }
});

export const { setPokemons } = pokemonSlice.actions;

export default pokemonSlice.reducer;