/**
 * Parses a JSON string stored in the sessionStorage and returns an object
 *
 * @param {string} key - key to get the data from sessionStorage.
 *
 * @returns {object} - parsed object
 */
export const getValueFromSessionStorage = (key) =>
  JSON.parse(sessionStorage.getItem(key));