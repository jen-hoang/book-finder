import { formatBook, formatSearch } from './book-format';
import bookItem from '@mocks/book-item';
describe('formatBook', () => {
  it('should return a book object with the appropriate properties', () => {
    const formattedBook = formatBook(bookItem);
    expect(formattedBook).toHaveProperty('id');
    expect(formattedBook).toHaveProperty('title');
    expect(formattedBook).toHaveProperty('subtitle');
    expect(formattedBook).toHaveProperty('authors');
    expect(formattedBook).toHaveProperty('description');
    expect(formattedBook).toHaveProperty('img');
    expect(formattedBook).toHaveProperty('largeImg');
    expect(formattedBook).toHaveProperty('categories');
    expect(formattedBook).toHaveProperty('previewLink');
  });

  it('should return empty string if imageLinks is not provided', () => {
    const bookItemWithoutImageLinks = {
      ...bookItem,
      volumeInfo: { ...bookItem.volumeInfo, imageLinks: null },
    };
    const formattedBook = formatBook(bookItemWithoutImageLinks);
    expect(formattedBook.img).toBe('');
    expect(formattedBook.largeImg).toBe('');
  });
});

describe('formatSearch', () => {
  it('should return an empty array if bookList is falsy', () => {
    expect(formatSearch(null)).toEqual([]);
  });
  it('should return an empty array if bookList.totalItems is 0', () => {
    const bookList = { totalItems: 0, items: [] };
    expect(formatSearch(bookList)).toEqual([]);
  });
  it('should return an array of formatted books', () => {
    const bookList = {
      totalItems: 1,
      items: [bookItem],
    };
    const formattedBooks = formatSearch(bookList);
    expect(formattedBooks).toHaveLength(1);
    expect(formattedBooks[0]).toHaveProperty('id');
    expect(formattedBooks[0]).toHaveProperty('title');
    expect(formattedBooks[0]).toHaveProperty('subtitle');
    expect(formattedBooks[0]).toHaveProperty('authors');
    expect(formattedBooks[0]).toHaveProperty('description');
    expect(formattedBooks[0]).toHaveProperty('img');
    expect(formattedBooks[0]).toHaveProperty('largeImg');
    expect(formattedBooks[0]).toHaveProperty('categories');
    expect(formattedBooks[0]).toHaveProperty('previewLink');
  });
});
