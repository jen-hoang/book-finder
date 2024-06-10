import { http, HttpResponse } from 'msw';
import { setupServer } from 'msw/node';
import bookList from '@mocks/book-search-result';
import { searchBook } from './book-request';

const server = setupServer(
  http.get('https://www.googleapis.com/books/v1/volumes', () => {
    return HttpResponse.json(bookList);
  }),
);

beforeAll(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());

describe('searchBook', () => {
  it('should return a list of books', async () => {
    const data = await searchBook({ query: 'best book', maxLimit: 20, startIndex: 0 });
    expect(data).toEqual(bookList);
  });

  it('should throw an error if the request fails', async () => {
    server.use(
      http.get('https://www.googleapis.com/books/v1/volumes', () => {
        return new HttpResponse(null, {
          status: 500,
        });
      }),
    );
    await expect(searchBook({ query: 'best book', maxLimit: 20, startIndex: 0 })).rejects.toThrow(
      'Internal server error',
    );
  });

  it('should throw an error if the request fails with a custom message', async () => {
    server.use(
      http.get('https://www.googleapis.com/books/v1/volumes', () => {
        return new HttpResponse(null, { status: 429 });
      }),
    );
    await expect(searchBook({ query: 'best book', maxLimit: 20, startIndex: 0 })).rejects.toThrow(
      'Exceed daily limit requests',
    );
  });

  it('should throw an error message from serve if the request fails with an undefined status message', async () => {
    server.use(
      http.get('https://www.googleapis.com/books/v1/volumes', () => {
        return new HttpResponse(null, { status: 400, statusText: 'Bad Request' });
      }),
    );
    await expect(searchBook({ query: 'best book', maxLimit: 20, startIndex: 0 })).rejects.toThrow(
      'Bad Request',
    );
  });
});
