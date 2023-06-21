import React from "react";
import styles from "./App.module.scss";

import GameBox from "./view/interface/GameBox";
import Player from "./view/elements/Player";
import PlayerContext from "./controller/PlayerContext";
import GameController from "./controller/GameController";

const App = () => {
	const [playerYPos, setPlayerYPos] = React.useState<number>(250);

	return (
		<PlayerContext.Provider value={{ playerYPos, setPlayerYPos }}>
			<GameController />
			<div className={styles.wrapper}>
				<GameBox>
					<Player />
				</GameBox>
			</div>
		</PlayerContext.Provider>
	);
};

export default App;
