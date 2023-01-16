import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface userState {
	user: any;
}

const initialState: userState = {
	user: {},
};

export const userSlice = createSlice({
	name: "user",
	initialState,
	reducers: {
		SETUSER: (state, action: PayloadAction<any>) => {
			state.user = action.payload;
		},
	},
});

export const { SETUSER } = userSlice.actions;

export default userSlice.reducer;
