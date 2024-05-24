const searchBook = async ({ query, maxLimit, startIndex }) => {
  const queries = new URLSearchParams({
    q: query,
    maxResults: maxLimit,
    startIndex,
  });
  const url = `${import.meta.env.VITE_API_URL}?${queries}`;
  const response = await fetch(url);
  const data = await response.json();
  return data;
};
export { searchBook };
