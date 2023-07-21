import Pagination from "@mui/material/Pagination";
import LaunchList from "../launchList/LaunchList";
import Loading from "../shared/Loading";
import ErrorMessage from "../shared/ErrorMessage";
import NoResults from "../shared/NoResults";
import { useLaunches } from "../../hooks/useLaunches";
import { usePostLaunches } from "../../hooks/usePostLaunches";

export default () => {
  const { isLoading, isError, data } = useLaunches();
  const { mutate } = usePostLaunches();

  const handlePaginaton = (e, page) => {
    const payload = { options: { page } };
    mutate(payload);
  };
  return isLoading ? (
    <Loading />
  ) : isError ? (
    <ErrorMessage />
  ) : data?.docs.length > 0 ? (
    <>
      <LaunchList launches={data?.docs} />
      <Pagination
        count={data?.totalPages}
        sx={{ mx: "auto", width: 400 }}
        onChange={handlePaginaton}
      />
    </>
  ) : (
    <NoResults />
  );
};
