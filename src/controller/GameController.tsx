import React from "react";
import PlayerContext from "./PlayerContext";
import { BIRD_SIZE, GAMEBOX_HEIGHT } from "../view/common/consts";

const MIN_Y = 0;
const MAX_Y = GAMEBOX_HEIGHT - BIRD_SIZE;
const GRAVITY = 3;
const TICK = 24; // ms

const GameController = () => {
	const playerContext = React.useContext(PlayerContext);

	React.useEffect(() => {
		const i = setInterval(() => {
			if (playerContext.playerYPos > MIN_Y)
				playerContext.setPlayerYPos(
					Math.max(MIN_Y, playerContext.playerYPos - GRAVITY)
				);
		}, TICK);
		return () => {
			clearInterval(i);
		};
	});

	return null;
};

export default GameController;
