import { configureStore } from "@reduxjs/toolkit";
import birdReducer from "../state/birdSlice";
import scrollReducer from "../state/scrollSlice";

const store = configureStore({
	reducer: {
		bird: birdReducer,
		scroll: scrollReducer,
	},
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
