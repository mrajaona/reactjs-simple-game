import { createSlice } from "@reduxjs/toolkit";
import { BIRD_SIZE } from "../view/elements/Bird.consts";
import { GAMEBOX_HEIGHT } from "../view/interface/Gamebox.consts";

const MIN_Y = 0;
const MAX_Y = GAMEBOX_HEIGHT - BIRD_SIZE;
const GRAVITY = 3;
const JUMP_HEIGHT = 100;

const DEFAULT_POS = 250;

type BirdState = {
	birdYPos: number;
};

const initialState: BirdState = {
	birdYPos: DEFAULT_POS,
};

export const birdSlice = createSlice({
	name: "bird",
	initialState,
	reducers: {
		fall: (state) => {
			if (state.birdYPos > MIN_Y)
				state.birdYPos = Math.max(MIN_Y, state.birdYPos - GRAVITY);
		},
		jump: (state) => {
			if (state.birdYPos < MAX_Y)
				state.birdYPos = Math.min(MAX_Y, state.birdYPos + JUMP_HEIGHT);
		},
		reset: (state) => {
			state.birdYPos = DEFAULT_POS;
		},
	},
});

export const { fall, jump } = birdSlice.actions;

export default birdSlice.reducer;
