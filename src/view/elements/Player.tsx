import React from "react";
import styles from "./Player.module.scss";

export const Player = ({ bottom }: { bottom: number }) => {
	return <div className={styles.bird} style={{ bottom: bottom + "px" }}></div>;
};
