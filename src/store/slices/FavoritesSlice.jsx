import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    favorites: localStorage.getItem("favorites") 
        ? JSON.parse(localStorage.getItem("favorites")).array
        : []
}

const favoritesSlice = createSlice({
    name: "favorites",
    initialState,
    reducers: {
        SET_NEW_FAVORITE: (state, { payload }) => {
            const newFavorite = payload
            if(state.favorites.length <= 12){
                const newArray = [...state.favorites, newFavorite]
                localStorage.setItem("favorites", JSON.stringify({ array: newArray }))
                return {
                    ...state,
                    favorites: newArray
                }
            } else{
                return state
            }
        },
        REMOVE_FAVORITE: (state, { payload }) => {
            const newArray = state.favorites.filter(e => e !== payload)
            localStorage.setItem("favorites", JSON.stringify({ array: newArray }))
            return {
                ...state,
                favorites: newArray
            }
        }
    }
})


const { actions, reducer } = favoritesSlice
export const { SET_NEW_FAVORITE, REMOVE_FAVORITE } = actions
export default reducer