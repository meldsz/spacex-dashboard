import { render } from "@testing-library/react";
import Loading from "./Loading";

it("renders the Loading component without crashing", () => {
  const { getByTestId } = render(<Loading />);
  expect(getByTestId("loading")).toBeInTheDocument();
});