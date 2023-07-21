import { useState } from "react";
export const useFilter = () => {
  const [filter, setFilter] = useState({
    upcoming: false,
    unsuccessful: false,
    past: false
  });

  const filterChange = (event) => {
    setFilter({
      ...filter,
      [event.target.name]: event.target.checked
    });
  };
  const getFilterQuery = () => {
    const { past, upcoming, unsuccessful } = filter;
    if (past && upcoming && unsuccessful) {
      return { success: false };
    }
    if (unsuccessful && past) {
      return {
        success: false,
        upcoming: false
      };
    }
    if (unsuccessful && upcoming) {
      return {
        success: false,
        upcoming: true
      };
    }
    if (past && upcoming) {
      return {};
    }
    if (upcoming) {
      return { upcoming: true };
    }
    if (past) {
      return { upcoming: false };
    }
    if (unsuccessful) {
      return { success: false };
    }
    return {};
  };
  return { filter, getFilterQuery, filterChange };
};