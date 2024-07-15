import { render, screen } from "@testing-library/react";
import App from "./App";
import { act } from "react";

test("renders learn react link", () => {
  act(() => {
    render(<App />);
  });
  const linkElement = screen.getByText(/Alway's Shaik Gandu in feature/i);
  expect(linkElement).toBeInTheDocument();
});
