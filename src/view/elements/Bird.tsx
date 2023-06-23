import React from "react";
import styles from "./Bird.module.scss";
import { RootState } from "../../app/store";
import { useAppSelector } from "../../app/hooks";

const Bird = () => {
	const birdYPos = useAppSelector((state: RootState) => state.bird.birdYPos);

	return <div className={styles.bird} style={{ bottom: birdYPos + "px" }} />;
};

export default Bird;
