import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    theme: "light",
}

export const pageStylesSlice = createSlice({
    name: "pageStyles",
    initialState,
    reducers: {
        toggleTheme: (state) => {
            state.theme = state.theme === "light" ? "dark" : "light";
        }
    }
});

export const { toggleTheme } = pageStylesSlice.actions;
export default pageStylesSlice.reducer;