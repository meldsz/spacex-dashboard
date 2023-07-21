import { render, screen } from "@testing-library/react";
import Header from "./Header";

jest.mock("../../hooks/usePostLaunches", () => ({
  usePostLaunches: () => ({ mutate: jest.fn() })
}));

describe("Header", () => {
  afterEach(() => {
    jest.clearAllMocks();
  });
  test("renders Header component", () => {
    render(<Header />);
    expect(screen.getByText("SpaceX Launch Dashboard")).toBeInTheDocument();
  });
});
