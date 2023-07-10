import React from "react";

import variables from "../common/consts.module.scss";
import { GAMEBOX_HEIGHT } from "../interface/Gamebox.consts";

import { useAppDispatch, useAppSelector } from "../../app/hooks";
import Pipe from "./Pipe";
import { shallowEqual } from "react-redux";
import { scrollSlice } from "../../state/scrollSlice";

const PIPE_SPACING = 350;
const VISIBLE_PIPES = 3;

const PIPE_PATH_HEIGHT = parseInt(variables["pipe-path-height"]);

const PATH_MIN_OFFSET = 50;
const PATH_MIN_Y = PATH_MIN_OFFSET;
const PATH_MAX_Y = GAMEBOX_HEIGHT - PATH_MIN_OFFSET - PIPE_PATH_HEIGHT;

const ScrollingPipes = () => {
	const scrollingPipes = useAppSelector(
		(state) => state.scroll.scrollingPipes,
		shallowEqual
	);
	const dispatch = useAppDispatch();

	React.useLayoutEffect(() => {
		if (scrollingPipes.length >= VISIBLE_PIPES) return;
		const pathTopPos = Math.trunc(
			Math.random() * (PATH_MAX_Y - PATH_MIN_Y) + PATH_MIN_Y
		);

		const lastPipe = scrollingPipes[scrollingPipes.length - 1];

		const index = lastPipe?.index !== undefined ? lastPipe?.index + 1 : 0;
		const scrollValue =
			lastPipe?.scrollValue !== undefined
				? lastPipe?.scrollValue - PIPE_SPACING
				: 0;

		const props = { index, pathTopPos, scrollValue };

		dispatch(scrollSlice.actions.addItem(props));
	}, [scrollingPipes.length]);

	return (
		<>
			{scrollingPipes.map((item, index) => (
				<Pipe {...item} key={index} />
			))}
		</>
	);
};

export default ScrollingPipes;
