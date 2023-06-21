import React from "react";

import GameBox from "./view/interface/GameBox";
import Player from "./view/elements/Player";
import GameController from "./controller/GameController";
import { Provider } from "react-redux";
import store from "./app/store";

const App = () => {
	return (
		<Provider store={store}>
			<GameController>
				<GameBox>
					<Player />
				</GameBox>
			</GameController>
		</Provider>
	);
};

export default App;
