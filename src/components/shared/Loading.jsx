import { Stack, CircularProgress } from "@mui/material";

const Loading = () => (
  <Stack alignItems="center">
    <CircularProgress data-testid="loading" />
  </Stack>
);
export default Loading;