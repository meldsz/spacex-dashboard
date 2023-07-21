import { render, screen } from "@testing-library/react";
import ErrorMessage from "./ErrorMessage";

it("renders the ErrorMessage without crashing", () => {
  const { getByTestId } = render(<ErrorMessage />);
  expect(getByTestId("error")).toBeInTheDocument();
  expect(screen.getByText("Oops! Something went wrong")).toBeInTheDocument();
});