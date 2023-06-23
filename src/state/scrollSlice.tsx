import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { PipeProps } from "../view/elements/Pipe";
import variables from "../view/common/consts.module.scss";

const SCROLL_SPEED = 5;
const SCROLLBOX_WIDTH = parseInt(variables["scrollbox-width"]);

export type ScrollingItem = {
	scrollValue: number;
};

type ScrollState = {
	scrollingPipes: PipeProps[];
};

const initialState: ScrollState = {
	scrollingPipes: [],
};

export const scrollSlice = createSlice({
	name: "scroll",
	initialState,
	reducers: {
		reset: (state) => {
			state.scrollingPipes = [];
		},
		scroll: (state) => {
			state.scrollingPipes = state.scrollingPipes
				.map((item) => {
					return { ...item, scrollValue: item.scrollValue + SCROLL_SPEED };
				})
				.filter((item) => item.scrollValue < SCROLLBOX_WIDTH);
		},
		addItem: (state, action: PayloadAction<PipeProps>) => {
			state.scrollingPipes.push(action.payload);
		},
		removeItem: (state) => {
			state.scrollingPipes.shift();
		},
	},
});

export const { scroll } = scrollSlice.actions;

export default scrollSlice.reducer;
