const baseURL = 'http://localhost:3001';

export const searchImages = async (page, query) => {
  const searchResult = await fetch(`${baseURL}/search?page=${page}&search=${query}`);
  const searchResultJSON = await searchResult.json();
  return searchResultJSON;
}