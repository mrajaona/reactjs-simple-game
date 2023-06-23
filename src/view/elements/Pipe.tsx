import React from "react";
import styles from "./Pipe.module.scss";
import { ScrollingItem } from "../../state/scrollSlice";

export type PipeProps = {
	pathTopPos: number;
} & ScrollingItem;

const Pipe = ({ pathTopPos, scrollValue }: PipeProps) => {
	return (
		<div className={styles.pipe} style={{ right: scrollValue + "px" }}>
			<div className={styles.path} style={{ top: pathTopPos + "px" }} />
		</div>
	);
};

export default Pipe;
