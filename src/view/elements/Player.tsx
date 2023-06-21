import React from "react";
import styles from "./Player.module.scss";
import { RootState } from "../../app/store";
import { useAppSelector } from "../../app/hooks";

const Player = () => {
	const playerYPos = useAppSelector(
		(state: RootState) => state.player.playerYPos
	);

	return (
		<div className={styles.bird} style={{ bottom: playerYPos + "px" }}></div>
	);
};

export default Player;
