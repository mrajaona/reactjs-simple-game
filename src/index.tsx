import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import ErrorPage from "./error";
import BirdApp from "./games/bird/App";
import Welcome from "./welcome/Welcome";
import Root from "./root/Root";
import Page from "./page/Page";

const router = createBrowserRouter([
	{
		path: "/",
		element: <Root />,
		errorElement: (
			<Page>
				<ErrorPage />
			</Page>
		),
		children: [
			{ path: "", element: <Welcome /> },
			{
				path: "game",
				element: (
					<div>
						<Outlet />
					</div>
				),
				children: [
					{
						path: "",
						element: <div>games</div>,
					},
					{
						path: "bird",
						element: <BirdApp />,
					},
				],
			},
		],
	},
]);

const root = ReactDOM.createRoot(
	document.getElementById("root") as HTMLElement
);
root.render(
	<React.StrictMode>
		<RouterProvider router={router} />
	</React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
