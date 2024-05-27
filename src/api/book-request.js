const errorMessageList = {
  429: 'Exceed daily limit requests',
  500: 'Internal server error',
};

const searchBook = async ({ query, maxLimit, startIndex }) => {
  const queries = new URLSearchParams({
    q: query,
    maxResults: maxLimit,
    startIndex,
  });
  const url = `${import.meta.env.VITE_API_URL}?${queries}`;
  const response = await fetch(url);
  if (response.ok) {
    const data = await response.json();
    return data;
  }
  // Check error
  const errorMessage = errorMessageList[response.status];
  if (errorMessage) {
    throw new Error(errorMessage);
  }
};
export { searchBook };
