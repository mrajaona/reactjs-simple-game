import React from "react";
import styles from "./App.module.scss";

import Player from "./components/Player";

function App() {
	return (
		<div className={styles.app}>
			<Player />
		</div>
	);
}

export default App;
