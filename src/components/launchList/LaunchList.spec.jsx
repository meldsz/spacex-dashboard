import { render } from "@testing-library/react";
import LaunchList from "./LaunchList";
import { mockLaunchesData } from "../../__fixtures__/mockLaunches";

describe("LaunchList", () => {
  test("renders component", () => {
    const { getByTestId } = render(
      <LaunchList launches={mockLaunchesData?.docs} />
    );
    expect(getByTestId("launchList")).toBeInTheDocument();
    expect(getByTestId("launchDetails")).toBeInTheDocument();
  });
});
