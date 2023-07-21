import { getValueFromSessionStorage } from "./utils/helpers";
const LAUNCH_API_URL = "https://api.spacexdata.com/v5/launches/query";
const DEFAULT_OPTIONS = {
  limit: 12,
  sort: {
    flight_number: "asc"
  }
};

export const postLaunches = async (params = {}) => {
  const filter = getValueFromSessionStorage("filter") || {};
  const search = getValueFromSessionStorage("search") || {};

  const requestBody = {
    query: {
      ...filter.query,
      ...search.query,
      ...params.query
    },
    options: {
      ...DEFAULT_OPTIONS,
      ...(params.options || {})
    }
  };

  return await (
    await fetch(LAUNCH_API_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(requestBody)
    })
  ).json();
};
