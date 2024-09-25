import { configureStore } from '@reduxjs/toolkit';
import sortReducer from './features/sortSlice';
import modalReducer from './features/modalSlice';
import pokemonReducer from './features/PokemonSlice';


export const store = configureStore({
  reducer: {
    sortReducer,
    modalReducer,
    pokemonReducer
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware()
})


export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch