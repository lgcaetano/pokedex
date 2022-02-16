import { combineReducers } from "@reduxjs/toolkit";
import pokemonSlice from "./pokemonSlice"
import favoritesSlice from "./FavoritesSlice"
import themeSlice from "./ThemeSlice";

const rootReducer = combineReducers({
  pokemons: pokemonSlice,
  theme: themeSlice,
  favorites: favoritesSlice
});

export default rootReducer