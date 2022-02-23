import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    isLoading: false,
    pokemonList: [],
    nextPage: "https://pokeapi.co/api/v2/pokemon/?limit=50&offset=0",
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
        STOP_LOADING: (state) => {
            return {
                ...state,
                isLoading: false
            }
        },
        FETCH_MORE_POKEMONS_SUCCESS: (state, { payload }) => {
            
            const newData = payload.data

            if(newData.error)
                return {...state, isLoading: false, error: newData.error}
                
            return {
                ...state,
                error: false,
                isLoading: false,
                pokemonList: [...state.pokemonList, ...newData.results],
                searchedPages: [...state.searchedPages, state.nextPage],
                nextPage: newData.next
            }
        },
        FETCH_MORE_POKEMONS_FAILURE: (state) => {
            return {
                ...state,
                isLoading: false,
                error: true
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

export const { GET_MORE_POKEMONS, FETCH_MORE_POKEMONS_SUCCESS, FETCH_MORE_POKEMONS_FAILURE, SET_POKEMON_DATA, STOP_LOADING } = actions

export default reducer