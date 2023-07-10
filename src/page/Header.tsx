import React from "react";
import styles from "./Header.module.scss";
import Menu from "./Menu";

const Header = () => {
	return (
		<header className={styles.header}>
			<h1>This is a header</h1>
			<Menu />
		</header>
	);
};

export default Header;
