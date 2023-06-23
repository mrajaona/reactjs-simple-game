import { createSlice } from "@reduxjs/toolkit";

type ScoreState = {
	value: number;
};

const initialState: ScoreState = {
	value: 0,
};

export const scoreSlice = createSlice({
	name: "score",
	initialState,
	reducers: {
		up: (state) => {
			state.value += 1;
		},
		reset: (state) => {
			state.value = 0;
		},
	},
});

export const { up, reset } = scoreSlice.actions;

export default scoreSlice.reducer;
