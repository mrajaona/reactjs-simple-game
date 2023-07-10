import { createSlice } from "@reduxjs/toolkit";
import { GAMEBOX_HEIGHT } from "../view/interface/Gamebox.consts";
import variables from "../view/common/consts.module.scss";

const BIRD_SIZE = parseInt(variables["bird-size"]);

const MIN_Y = 0;
const MAX_Y = GAMEBOX_HEIGHT - BIRD_SIZE;
const GRAVITY = 5;
const JUMP_HEIGHT = 80;

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
