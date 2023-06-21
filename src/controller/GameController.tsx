import React from "react";
import styles from "./GameController.module.scss";
import { playerSlice } from "../state/playerSlice";
import { useAppDispatch } from "../app/hooks";

const TICK = 24; // ms

type Props = {
	children?: React.ReactNode;
};

const GameController = ({ children }: Props) => {
	const dispatch = useAppDispatch();

	React.useEffect(() => {
		const i = setInterval(() => {
			dispatch(playerSlice.actions.fall());
		}, TICK);
		return () => {
			clearInterval(i);
		};
	});

	const jump = () => {
		dispatch(playerSlice.actions.jump());
	};

	return (
		<div className={styles.wrapper} onClick={jump}>
			{children}
		</div>
	);
};

export default GameController;
