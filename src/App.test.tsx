import React from "react";
import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders App with Dmitry Kulakov text", () => {
  render(<App />);
  const linkElement = screen.getByText(/Dmitry Kulakov/i);
  expect(linkElement).toBeInTheDocument();
});
