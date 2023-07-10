import React, { useState } from "react";
import styles from "./GameController.module.scss";
import { birdSlice } from "../state/birdSlice";
import { scrollSlice } from "../state/scrollSlice";
import { scoreSlice } from "../state/scoreSlice";
import { useAppDispatch, useAppSelector } from "../app/hooks";
import { GAMEBOX_HEIGHT } from "../view/interface/Gamebox.consts";
import variables from "../view/common/consts.module.scss";
import { shallowEqual } from "react-redux";

export const TICK = 24; // ms

const SCROLLBOX_WIDTH = parseInt(variables["scrollbox-width"]);

const BIRD_LEFT_POS = parseInt(variables["bird-left"]);
const BIRD_SIZE = parseInt(variables["bird-size"]);

const PIPE_WIDTH = parseInt(variables["pipe-width"]);
const PIPE_PATH_HEIGHT = parseInt(variables["pipe-path-height"]);

type Props = {
	children?: React.ReactNode;
};

const GameController = ({ children }: Props) => {
	const [started, setStarted] = useState<boolean>(false);
	const [ended, setEnded] = useState<boolean>(false);
	const [lastPassed, setLastPassed] = useState<number>(-1);

	const dispatch = useAppDispatch();

	const birdYPos = useAppSelector((state) => state.bird.birdYPos);
	const scrollingPipes = useAppSelector(
		(state) => state.scroll.scrollingPipes,
		shallowEqual
	);

	// handle score
	React.useEffect(() => {
		const closestPipe = scrollingPipes[0];
		if (!closestPipe) return;

		// calc from right
		const birdLeft = SCROLLBOX_WIDTH - BIRD_LEFT_POS;
		const pipeRight = closestPipe.scrollValue;

		if (closestPipe.index !== lastPassed && pipeRight > birdLeft) {
			setLastPassed(closestPipe.index);
			dispatch(scoreSlice.actions.up());
		}
	}, [scrollingPipes]);

	// detect game over
	React.useEffect(() => {
		if (!started || ended) return;

		// detect border collision
		if (birdYPos <= 0 || birdYPos >= GAMEBOX_HEIGHT - BIRD_SIZE) setEnded(true);

		const closestPipe = scrollingPipes[0];

		if (!closestPipe) return;

		// calc from right
		const pipeLeft = closestPipe.scrollValue + PIPE_WIDTH;
		const pipeRight = closestPipe.scrollValue;

		const birdLeft = SCROLLBOX_WIDTH - BIRD_LEFT_POS;
		const birdRight = SCROLLBOX_WIDTH - (BIRD_LEFT_POS + BIRD_SIZE);

		// calc from bottom
		const pathTop = GAMEBOX_HEIGHT - closestPipe.pathTopPos;
		const pathBottom =
			GAMEBOX_HEIGHT - (closestPipe.pathTopPos + PIPE_PATH_HEIGHT);

		const birdTop = birdYPos + BIRD_SIZE;
		const birdBottom = birdYPos;

		// detect pipe collision
		if (
			pipeLeft > birdRight &&
			pipeRight < birdLeft &&
			(birdTop > pathTop || birdBottom < pathBottom)
		)
			setEnded(true);
	}, [birdYPos, scrollingPipes]);

	// handle scroll and gravity
	React.useEffect(() => {
		if (started && !ended) {
			const i = setInterval(() => {
				dispatch(birdSlice.actions.fall());
				dispatch(scrollSlice.actions.scroll());
			}, TICK);
			return () => {
				clearInterval(i);
			};
		}
	}, [started, ended]);

	const jump = () => {
		dispatch(birdSlice.actions.jump());
	};

	const handleClick = () => {
		if (ended) {
			setStarted(false);
			dispatch(birdSlice.actions.reset());
			dispatch(scrollSlice.actions.reset());
			dispatch(scoreSlice.actions.reset());

			setEnded(false);
			return;
		}

		!started ? setStarted(true) : jump();
	};

	return (
		<div className={styles.wrapper} onClick={handleClick}>
			{children}
		</div>
	);
};

export default GameController;
