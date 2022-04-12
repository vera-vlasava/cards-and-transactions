import { render, screen } from "@testing-library/react";
import App from "./components/App";

test("renders learn react link", () => {
  render(<App />);
  const headline = screen.getByText(/Cards & Transactions/i);
  expect(headline).toBeInTheDocument();
});
