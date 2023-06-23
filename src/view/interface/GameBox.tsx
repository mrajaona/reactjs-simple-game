import React from "react";
import styles from "./GameBox.module.scss";
import { useAppSelector } from "../../app/hooks";

type Props = {
	children?: React.ReactNode;
};

const ScoreBox = () => {
	const score = useAppSelector((state) => state.score.value);
	return <div className={styles.score}>Score: {score}</div>;
};

const GameBox = ({ children }: Props) => {
	return (
		<div className={styles.gamebox}>
			<ScoreBox />
			<div className={styles.scrollbox}>{children}</div>
		</div>
	);
};

export default GameBox;
