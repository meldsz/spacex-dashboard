import { useState } from "react";
import dayjs from "dayjs";

export const useSearch = () => {
  const [sortBy, setSortBy] = useState("asc");
  const [date, setDate] = useState({
    from: null,
    to: null
  });
  const updateFromDate = (newDate) => setDate({ ...date, from: newDate });
  const updateToDate = (newDate) => setDate({ ...date, to: newDate });
  const updateSortBy = (event) => setSortBy(event?.target?.defaultValue);
  const getLaunchQuery = () => {
    const dateRange = date.from &&
      date.to && {
        $gte: dayjs(date.from).format("YYYY-MM-DDTHH:MM:SS.00Z"),
        $lte: dayjs(date.to).format("YYYY-MM-DDTHH:MM:SS.00Z")
      };

    const fromDate = date.from &&
      !date.to && { $gte: dayjs(date.from).format("YYYY-MM-DDTHH:MM:SS.00Z") };
    const toDate = date.to &&
      !date.from && { $lte: dayjs(date.to).format("YYYY-MM-DDTHH:MM:SS.00Z") };

    const hasDateFilter = date.from || date.to;
    return {
      options: {
        sort: { flight_number: sortBy }
      },
      ...(hasDateFilter
        ? { query: { date_utc: dateRange || fromDate || toDate } }
        : {})
    };
  };

  return {
    sortBy,
    date,
    updateFromDate,
    updateToDate,
    updateSortBy,
    getLaunchQuery
  };
};