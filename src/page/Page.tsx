import React from "react";
import styles from "./Page.module.scss";
import Footer from "./Footer";
import Header from "./Header";

type Props = {
	children?: React.ReactNode;
};

const Page = ({ children }: Props) => {
	return (
		<div className={styles.page}>
			<Header />
			<div className={styles.content}>{children}</div>
			<Footer />
		</div>
	);
};

export default Page;
