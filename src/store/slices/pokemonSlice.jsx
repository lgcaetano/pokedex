import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    isLoading: false,
    pokemonList: [],
    nextPage: "https://pokeapi.co/api/v2/pokemon/?limit=20&offset=0",
    searchedPages: [], 
    allPokemonData: {}
}

const pokemonSlice = createSlice({
    name: "pokemon",
    initialState,
    reducers: {
        GET_MORE_POKEMONS: (state) => {
            return {...state, isLoading: true}
        },
        SET_MORE_POKEMONS: (state, action) => {
            
            const newData = action.payload.data


            if(newData.error)
                return {...state, isLoading: false, error: newData.error}
            return {
                ...state,
                isLoading: false,
                pokemonList: [...state.pokemonList, ...newData.results],
                searchedPages: [...state.searchedPages, state.nextPage],
                nextPage: newData.next
            }
        },
        SET_POKEMON_DATA: (state, { payload }) => {

            const data = payload
            const name = payload.name

            return {
                ...state, 
                allPokemonData: {
                    ...state.allPokemonData,
                    [name]: data
                }
            }
        }
    }
})

const { actions, reducer } = pokemonSlice

export const { GET_MORE_POKEMONS, SET_MORE_POKEMONS, SET_POKEMON_DATA } = actions

export default reducer