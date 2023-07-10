import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ErrorPage from "./error";
import BirdApp from "./games/bird/App";
import Welcome from "./welcome/Welcome";
import Page from "./page/Page";

const router = createBrowserRouter([
	{
		path: "/",
		element: <Welcome />,
		errorElement: <ErrorPage />,
	},
	{
		path: "/game/bird",
		element: <BirdApp />,
		errorElement: <ErrorPage />,
	},
]);

const root = ReactDOM.createRoot(
	document.getElementById("root") as HTMLElement
);
root.render(
	<React.StrictMode>
		<Page>
			<RouterProvider router={router} />
		</Page>
	</React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
