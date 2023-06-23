import React from "react";

import GameBox from "./view/interface/GameBox";
import Bird from "./view/elements/Bird";
import GameController from "./controller/GameController";
import { Provider } from "react-redux";
import store from "./app/store";
import ScrollingPipes from "./view/elements/ScrollingPipes";

const App = () => {
	return (
		<Provider store={store}>
			<GameController>
				<GameBox>
					<ScrollingPipes />
					<Bird />
				</GameBox>
			</GameController>
		</Provider>
	);
};

export default App;
