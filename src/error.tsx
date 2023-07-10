import React from "react";
import { isRouteErrorResponse, useRouteError } from "react-router-dom";
import Page from "./page/Page";

export default function ErrorPage() {
	const error = useRouteError();
	console.error(error);

	const message = isRouteErrorResponse(error)
		? error.statusText
		: (error as { message?: string }).message;

	return (
		<Page>
			<div id="error-page">
				<h1>Oops!</h1>
				<p>Sorry, an unexpected error has occurred.</p>
				<p>
					<i>{message}</i>
				</p>
			</div>
		</Page>
	);
}
