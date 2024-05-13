const formatBook = (bookItem) => {
  const { id, volumeInfo } = bookItem;
  const { title, subtitle, authors, description, imageLinks, categories, publishedDate } =
    volumeInfo;

  const year = publishedDate ? publishedDate.split('-')[0] : '';
  const img = imageLinks ? imageLinks.thumbnail : '';
  return {
    id,
    title,
    subtitle,
    authors,
    year,
    description,
    img,
    categories,
  };
};
function formatSearch(bookList) {
  return {
    total: bookList.totalItems,
    items: bookList.items.map(formatBook),
  };
}
export { formatBook, formatSearch };
