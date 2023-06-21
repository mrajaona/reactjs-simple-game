import React from "react";
import styles from "./App.module.scss";

import { GameBox } from "./view/interface/GameBox";
import { Player } from "./view/elements/Player";
import { BIRD_SIZE, GAMEBOX_HEIGHT } from "./view/common/consts";

const MIN_Y = 0;
const MAX_Y = GAMEBOX_HEIGHT - BIRD_SIZE;
const GRAVITY = 3;
const TICK = 24; // ms

function App() {
	const [playerYPos, setPlayerYPos] = React.useState<number>(250);

	React.useEffect(() => {
		const i = setInterval(() => {
			if (playerYPos > MIN_Y)
				setPlayerYPos((playerYPos) => Math.max(MIN_Y, playerYPos - GRAVITY));
		}, TICK);
		return () => {
			clearInterval(i);
		};
	});

	return (
		<div className={styles.wrapper}>
			<GameBox>
				<Player bottom={playerYPos} />
			</GameBox>
		</div>
	);
}

export default App;
