import React from "react";

export const PlayerContext = React.createContext({
	playerYPos: 0,
	setPlayerYPos: (value: number) => {
		void value;
		console.warn("setPlayerYPos not overriden");
	},
});

export default PlayerContext;
