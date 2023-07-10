import React from "react";
import styles from "./Menu.module.scss";

const links: { link: string; name: string }[] = [
	{ link: "/", name: "home" },
	{ link: "/game/bird", name: "bird" },
	{ link: "/game/404", name: "test" },
];

const Menu = () => {
	return (
		<nav className={styles.menu}>
			<ul>
				{links.map((item, i) => {
					return (
						<li key={`link_${i}`}>
							<a href={item.link}>{item.name}</a>
						</li>
					);
				})}
			</ul>
		</nav>
	);
};

export default Menu;
