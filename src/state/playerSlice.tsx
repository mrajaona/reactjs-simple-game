import { createSlice } from "@reduxjs/toolkit";
import { BIRD_SIZE, GAMEBOX_HEIGHT } from "../view/common/consts";

const MIN_Y = 0;
const MAX_Y = GAMEBOX_HEIGHT - BIRD_SIZE;
const GRAVITY = 3;
const JUMP_HEIGHT = 100;

type playerState = {
	playerYPos: number;
};

const initialState: playerState = {
	playerYPos: 250,
};

export const playerSlice = createSlice({
	name: "player",
	initialState,
	reducers: {
		fall: (state) => {
			if (state.playerYPos > MIN_Y)
				state.playerYPos = Math.max(MIN_Y, state.playerYPos - GRAVITY);
		},
		jump: (state) => {
			if (state.playerYPos < MAX_Y)
				state.playerYPos = Math.min(MAX_Y, state.playerYPos + JUMP_HEIGHT);
		},
	},
});

export const { fall, jump } = playerSlice.actions;

export default playerSlice.reducer;
