import { useMutation, useQueryClient } from "@tanstack/react-query";
import { postLaunches } from "../api";

export const usePostLaunches = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: postLaunches,
    onSuccess: (data) => {
      queryClient.setQueryData(["launchData"], data);
    }
  });
};
