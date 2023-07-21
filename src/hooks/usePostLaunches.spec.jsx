import { renderHook, waitFor, act } from "@testing-library/react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { postLaunches } from "../api";
import { usePostLaunches } from "./usePostLaunches";
import { mockLaunchesData } from "../__fixtures__/mockLaunches";

jest.mock("../api", () => ({
  postLaunches: jest.fn()
}));

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: false
    }
  },
  logger: {
    error: process.env.NODE_ENV === "test" ? () => {} : console.error
  }
});
const wrapper = ({ children }) => (
  <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
);

describe("usePostLaunches", () => {
  test("Should return data for successful Mutation ", async () => {
    postLaunches.mockImplementation(() => ({ mockLaunchesData }));
    const { result } = renderHook(() => usePostLaunches(), { wrapper });
    act(() => {
      result.current.mutate({ query: { page: 2 } });
    });
    await waitFor(() => expect(result.current.isSuccess).toBe(true));
    expect(result.current.isSuccess).toBe(true);
  });
  test("should return an error for unsuccessful mutation", async () => {
    postLaunches.mockImplementation(() => {
      throw new Error("error");
    });
    const { result } = renderHook(() => usePostLaunches(), {
      wrapper: wrapper
    });
    act(() => {
      result.current.mutate({});
    });

    await waitFor(() => expect(result.current.isError).toBe(true));

    expect(result.current.isError).toBe(true);
  });
});
