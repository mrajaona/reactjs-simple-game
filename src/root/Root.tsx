import React from "react";
import Page from "../page/Page";
import { Outlet } from "react-router-dom";

const Root = () => {
	return (
		<Page>
			<Outlet />
		</Page>
	);
};

export default Root;
