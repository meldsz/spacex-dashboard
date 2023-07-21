import { render, screen } from "@testing-library/react";
import NoResults from "./NoResults";

it("renders the NoResults component without crashing", () => {
  const { getByTestId } = render(<NoResults />);
  expect(getByTestId("noResults")).toBeInTheDocument();
  expect(
    screen.getByText("Sorry! No Launches found for your query!")
  ).toBeInTheDocument();
});
