const formatBook = (bookItem) => {
  const { id, volumeInfo } = bookItem;
  const { title, subtitle, authors, description, imageLinks, categories, previewLink } = volumeInfo;

  const img = imageLinks ? imageLinks.smallThumbnail : '';
  const largeImg = imageLinks ? imageLinks.thumbnail : '';
  return {
    id,
    title,
    subtitle,
    authors,
    description,
    img,
    largeImg,
    categories,
    previewLink,
  };
};
function formatSearch(bookList) {
  if (!bookList) return [];
  if (bookList.totalItems == 0) return [];
  return bookList.items.map(formatBook);
}
export { formatBook, formatSearch };
