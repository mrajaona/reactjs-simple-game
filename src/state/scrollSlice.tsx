import { PayloadAction, createSlice } from "@reduxjs/toolkit";

const SCROLL_SPEED = 5;

type ScrollingItem = {
	id: string; // todo: do better
	scrollValue: number;
};

type ScrollState = {
	ScrollingItems: ScrollingItem[];
};

const initialState: ScrollState = {
	ScrollingItems: [],
};

export const scrollSlice = createSlice({
	name: "scroll",
	initialState,
	reducers: {
		scroll: (state) => {
			state.ScrollingItems = state.ScrollingItems.map((item) => {
				return { ...item, scrollValue: item.scrollValue + SCROLL_SPEED };
			});
		},
		addItem: (state, action: PayloadAction<ScrollingItem>) => {
			state.ScrollingItems.push(action.payload);
		},
		removeItem: (state) => {
			state.ScrollingItems.shift();
		},
	},
});

export const { scroll } = scrollSlice.actions;

export default scrollSlice.reducer;
