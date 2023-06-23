import React, { useState } from "react";
import styles from "./GameController.module.scss";
import { birdSlice } from "../state/birdSlice";
import { scrollSlice } from "../state/scrollSlice";
import { useAppDispatch, useAppSelector } from "../app/hooks";
import { GAMEBOX_HEIGHT } from "../view/interface/Gamebox.consts";
import { BIRD_SIZE } from "../view/elements/Bird.consts";

export const TICK = 24; // ms

type Props = {
	children?: React.ReactNode;
};

const GameController = ({ children }: Props) => {
	const [started, setStarted] = useState<boolean>(false);
	const [ended, setEnded] = useState<boolean>(false);

	const dispatch = useAppDispatch();

	const birdYPos = useAppSelector((state) => state.bird.birdYPos);

	// detect game over
	React.useEffect(() => {
		if (!started || ended) return;
		if (birdYPos <= 0 || birdYPos >= GAMEBOX_HEIGHT - BIRD_SIZE) setEnded(true);
	}, [birdYPos]);

	// handle scroll and gravity
	React.useEffect(() => {
		if (started && !ended) {
			const i = setInterval(() => {
				dispatch(birdSlice.actions.fall());
				// dispatch(scrollSlice.actions.scroll());
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
