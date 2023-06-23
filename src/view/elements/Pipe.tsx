import React from "react";
import styles from "./Pipe.module.scss";

import variables from "../common/consts.module.scss";

const PIPE_WIDTH = parseInt(variables["pipe-width"]);

const Pipe = ({
	pathYPos,
	spawnPos,
}: {
	pathYPos: number;
	spawnPos: number;
}) => {
	const pipeXPos = -1 * PIPE_WIDTH + spawnPos;

	return (
		<div className={styles.pipe} style={{ right: pipeXPos + "px" }}>
			<div className={styles.path} style={{ top: pathYPos + "px" }} />
		</div>
	);
};

export default Pipe;
