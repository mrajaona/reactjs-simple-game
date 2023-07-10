import React from "react";
import styles from "./Menu.module.scss";
import { Link } from "react-router-dom";
import { type } from "os";

type LinkItem = {
	type: "link";
	name: string;
	link: string;
};

type SubMenuItem = {
	type: "submenu";
	name: string;
	menuList: LinkItem[];
};

type MenuItem = LinkItem | SubMenuItem;

const links: MenuItem[] = [
	{ type: "link", name: "home", link: "/" },
	{
		type: "submenu",
		name: "games",
		menuList: [
			{ type: "link", name: "bird", link: "/game/bird" },
			{ type: "link", name: "test", link: "/game/404" },
		],
	},
];

const Menu = () => {
	const [subMenu, setSubMenu] = React.useState<SubMenuItem | null>(null);

	const renderMenu = React.useCallback(
		(list: MenuItem[]) => {
			return (
				<ul>
					{list.map((item, i) => {
						switch (item.type) {
						case "link":
							return (
								<li key={`link_${i}`}>
									<Link to={item.link} onClick={() => setSubMenu(null)}>
										{item.name}
									</Link>
								</li>
							);
						case "submenu":
							return (
								<li>
									<button
										onClick={() =>
											setSubMenu(subMenu?.name === item.name ? null : item)
										}
										className={
											subMenu?.name === item.name ? styles.active : ""
										}
									>
										{item.name}
									</button>
								</li>
							);
						}
					})}
				</ul>
			);
		},
		[subMenu, setSubMenu]
	);

	const DropdownMenu = ({ subMenu }: { subMenu: SubMenuItem }) => {
		return <div className={styles.submenu}>{renderMenu(subMenu.menuList)}</div>;
	};

	const MainMenu = () => {
		return <div className={styles.mainmenu}>{renderMenu(links)}</div>;
	};

	return (
		<nav className={styles.menu}>
			<MainMenu />
			{subMenu && <DropdownMenu subMenu={subMenu} />}
		</nav>
	);
};

export default Menu;
