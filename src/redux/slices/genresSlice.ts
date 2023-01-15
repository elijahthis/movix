import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface genresState {
	genres: { id: number; name: string }[];
}

const initialState: genresState = {
	genres: [],
};

export const genresSlice = createSlice({
	name: "genres",
	initialState,
	reducers: {
		SETGENRES: (
			state,
			action: PayloadAction<{ id: number; name: string }[]>
		) => {
			state.genres = action.payload;
		},
	},
});

export const { SETGENRES } = genresSlice.actions;

export default genresSlice.reducer;
