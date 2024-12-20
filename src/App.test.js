import * as React from "react";
import { render, screen } from "@testing-library/react";
import App from "./App";
import "@testing-library/jest-dom";

test("Snapshot test for an App", () => {
  const app = render(<App />);
  expect(app).toMatchSnapshot();
});
test("table should be visible", () => {
  render(<App />);
  const table = screen.getByTestId("table");
  expect(table).toBeInTheDocument();
});
