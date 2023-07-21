import { useQuery } from "@tanstack/react-query";
import { postLaunches } from "../api";

const QUERY_KEY = ["launchData"];

export const useLaunches = (params = {}) => {
  return useQuery({
    queryKey: QUERY_KEY,
    queryFn: () => postLaunches(params)
  });
};