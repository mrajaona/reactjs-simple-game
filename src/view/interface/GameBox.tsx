import React from "react";
import styles from "./GameBox.module.scss";

type Props = {
	children?: React.ReactNode;
};

export const GameBox = ({ children }: Props) => {
	return (
		<div className={styles.gamebox}>
			<div className={styles.container}>{children}</div>
		</div>
	);
};
