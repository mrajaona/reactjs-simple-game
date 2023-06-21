import React, { useState } from "react";
import styles from "./GameController.module.scss";
import { playerSlice } from "../state/playerSlice";
import { useAppDispatch } from "../app/hooks";

const TICK = 24; // ms

type Props = {
	children?: React.ReactNode;
};

const GameController = ({ children }: Props) => {
	const [started, setStarted] = useState<boolean>(false);
	const dispatch = useAppDispatch();

	React.useEffect(() => {
		if (started) {
			const i = setInterval(() => {
				dispatch(playerSlice.actions.fall());
			}, TICK);
			return () => {
				clearInterval(i);
			};
		}
	}, [started]);

	const jump = () => {
		dispatch(playerSlice.actions.jump());
	};

	const handleClick = () => {
		!started ? setStarted(true) : jump();
	};

	return (
		<div className={styles.wrapper} onClick={handleClick}>
			{children}
		</div>
	);
};

export default GameController;
