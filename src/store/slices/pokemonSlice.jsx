import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    isLoading: false,
    pokemonList: [],
    nextPage: "https://pokeapi.co/api/v2/pokemon/?limit=20&offset=0"
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

            console.log(state.nextPage)

            if(newData.error)
                return {...state, isLoading: false, error: newData.error}
            return {
                ...state,
                isLoading: false,
                pokemonList: [...state.pokemonList, ...newData.results],
                nextPage: newData.next
            }
        }
    }
})

const { actions, reducer } = pokemonSlice

export const { GET_MORE_POKEMONS, SET_MORE_POKEMONS } = actions

export default reducer