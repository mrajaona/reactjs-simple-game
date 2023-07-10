import React from "react";

import { Provider } from "react-redux";
import store from "./app/store";
import GameController from "./controller/GameController";
import Bird from "../bird/view/elements/Bird";
import ScrollingPipes from "../bird/view/elements/ScrollingPipes";
import GameBox from "../bird/view/interface/GameBox";
import Page from "../../page/Page";

const App = () => {
	return (
		<Page>
			<Provider store={store}>
				<GameController>
					<GameBox>
						<ScrollingPipes />
						<Bird />
					</GameBox>
				</GameController>
			</Provider>
		</Page>
	);
};

export default App;
