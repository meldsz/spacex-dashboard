import React from 'react';
import { renderHook, waitFor } from "@testing-library/react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { useLaunches } from "./useLaunches";
import { postLaunches } from "../api";
import { mockLaunchesData } from "../__fixtures__/mockLaunches";

jest.mock("../api", () => ({
  postLaunches: jest.fn()
}));

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: false
    }
  }
});
const wrapper = ({ children }) => (
  <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
);

describe("useLaunches", () => {
  test("Should return data for successful Mutation ", async () => {
    postLaunches.mockImplementation(() => mockLaunchesData);
    const { result } = renderHook(() => useLaunches(), { wrapper });
    await waitFor(() => expect(result.current.isSuccess).toBeTruthy());
    expect(result.current.data).toEqual(mockLaunchesData);
  });
});
