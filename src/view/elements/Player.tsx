import React from "react";
import styles from "./Player.module.scss";
import PlayerContext from "../../controller/PlayerContext";

const Player = () => {
	const context = React.useContext(PlayerContext);

	return (
		<div
			className={styles.bird}
			style={{ bottom: context.playerYPos + "px" }}
		></div>
	);
};

export default Player;
