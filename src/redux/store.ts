import { configureStore } from "@reduxjs/toolkit";
import genresReducer from "./slices/genresSlice";
import userReducer from "./slices/userSlice";

export const store = configureStore({
	reducer: {
		genres: genresReducer,
		user: userReducer,
	},
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
