import React from "react";
import { render, screen } from "@testing-library/react";
import App from "./App";

// this should fail
test("potato appears", () => {
	render(<App />);
	const testText = screen.getByText(/potato/i);
	expect(testText).toBeInTheDocument();
});
