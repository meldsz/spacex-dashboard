import { render } from "@testing-library/react";
import Launches from "./Launches";
import {
  mockLaunchesData,
  mockLaunchesNoResults
} from "../../__fixtures__/mockLaunches";
import { useLaunches } from "../../hooks/useLaunches";
import { usePostLaunches } from "../../hooks/usePostLaunches";

jest.mock("../../hooks/usePostLaunches", () => ({
  usePostLaunches: jest.fn()
}));
jest.mock("../../hooks/useLaunches", () => ({
  useLaunches: jest.fn()
}));

describe("Launches", () => {
  beforeEach(() => {
    useLaunches.mockImplementation(() => ({}));
    usePostLaunches.mockImplementation(() => ({}));
  });
  afterEach(() => {
    jest.clearAllMocks();
  });

  describe("while API call is loading", () => {
    test("displays Loading component", () => {
      useLaunches.mockImplementation(() => ({
        isLoading: true
      }));
      usePostLaunches.mockImplementation(() => ({
        mutate: jest.fn()
      }));
      const { getByTestId } = render(<Launches />);
      expect(getByTestId("loading")).toBeInTheDocument();
    });
  });
  describe("while Api gives an error", () => {
    test("renders ErrorMessage component", () => {
      useLaunches.mockImplementation(() => ({
        isError: true,
        error: {
          message: "something went wrong"
        }
      }));
      const { getByTestId } = render(<Launches />);
      expect(getByTestId("error")).toBeInTheDocument();
    });
  });
  describe("when API call is successful", () => {
    test("renders LaunchList component when data is available", () => {
      useLaunches.mockImplementation(() => ({
        data: mockLaunchesData
      }));
      const { getByTestId } = render(<Launches />);
      expect(getByTestId("launchList")).toBeInTheDocument();
    });
    test("renders LaunchList component when there are no results", () => {
      useLaunches.mockImplementation(() => ({
        data: mockLaunchesNoResults
      }));
      const { getByTestId } = render(<Launches />);
      expect(getByTestId("noResults")).toBeInTheDocument();
    });
  });
});
