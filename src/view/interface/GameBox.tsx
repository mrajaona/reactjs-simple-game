import React from "react";
import styles from "./GameBox.module.scss";

type Props = {
	children?: React.ReactNode;
};

const GameBox = ({ children }: Props) => {
	return (
		<div className={styles.gamebox}>
			<div className={styles.container}>{children}</div>
		</div>
	);
};

export default GameBox;
