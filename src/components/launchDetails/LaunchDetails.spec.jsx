import { render } from "@testing-library/react";
import LaunchDetails from "./LaunchDetails";
import { mockLaunchesData } from "../../__fixtures__/mockLaunches";

describe("LaunchDetails", () => {
  test("renders component", () => {
    const { getByTestId } = render(
      <LaunchDetails flight={mockLaunchesData?.docs[0]} />
    );
    expect(getByTestId("launchDetails")).toBeInTheDocument();
  });
});
