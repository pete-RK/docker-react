import { render, screen } from "@testing-library/react";
import App from "./App";
import { act } from "react";

test("renders learn react link", () => {
  act(() => {
    render(<App />);
  });
<<<<<<< HEAD
  const linkElement = screen.getByText(/Always Shaik Gandu in feature/i);
=======
  const linkElement = screen.getByText(/Always a gandu/i);
>>>>>>> e280a5386b1479d53f9946232a56d2ab9e1ad7b7
  expect(linkElement).toBeInTheDocument();
});
