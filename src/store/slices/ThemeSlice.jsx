import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    darkMode: localStorage.getItem("theme-mode") === "true"
}

const themeSlice = createSlice({
    name: "theme",
    initialState,
    reducers: {
        TOGGLE_THEME: (state) => {
            const newMode = !state.darkMode
            localStorage.setItem("theme-mode", newMode)
            return { ...state, darkMode: newMode }
        }
    }
})

const { actions, reducer } = themeSlice
export const { TOGGLE_THEME } = actions
export default reducer