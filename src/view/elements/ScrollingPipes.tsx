import React from "react";

import variables from "../common/consts.module.scss";
import { GAMEBOX_HEIGHT } from "../interface/Gamebox.consts";

import { useAppSelector } from "../../app/hooks";
import { RootState } from "../../app/store";
import Pipe from "./Pipe";

const PIPE_SPACING = 250;

const PIPE_PATH_HEIGHT = parseInt(variables["pipe-path-height"]);

const PATH_MIN_OFFSET = 50;
const PATH_MIN_Y = PATH_MIN_OFFSET;
const PATH_MAX_Y = GAMEBOX_HEIGHT - PATH_MIN_OFFSET - PIPE_PATH_HEIGHT;

const PipeGenerator = ({ spawnPos }: { spawnPos: number }) => {
	let pathYPos = 0;

	React.useLayoutEffect(() => {
		pathYPos = Math.trunc(
			Math.random() * (PATH_MAX_Y - PATH_MIN_Y) + PATH_MIN_Y
		);
		console.debug(pathYPos);
	}, []);

	return <Pipe pathYPos={pathYPos} spawnPos={spawnPos} />;
};

const ScrollingPipes = () => {
	return null;
};

export default ScrollingPipes;
