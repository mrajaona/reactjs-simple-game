import { configureStore } from "@reduxjs/toolkit";
import birdReducer from "../state/birdSlice";
import scrollReducer from "../state/scrollSlice";
import scoreReducer from "../state/scoreSlice";

const store = configureStore({
	reducer: {
		bird: birdReducer,
		scroll: scrollReducer,
		score: scoreReducer,
	},
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
