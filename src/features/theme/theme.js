import { createSlice } from '@reduxjs/toolkit';

const initialValue = "";

export const themeSlice = createSlice({
    name: 'theme',
    initialState: { value: initialValue },
    reducers: {
        changeColorTheme: (state, action) => {
            state.value = action.payload
        }
    }
})

export const { changeColorTheme  } = themeSlice.actions;
export default themeSlice.reducer