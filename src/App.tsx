import React from "react";
import styles from "./App.module.scss";
import { GameBox } from "./view/interface/GameBox";
import { Player } from "./view/elements/Player";

function App() {
	return (
		<div className={styles.wrapper}>
			<GameBox>
				<Player />
			</GameBox>
		</div>
	);
}

export default App;
