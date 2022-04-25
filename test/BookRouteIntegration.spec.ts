import { Book } from '../src/schema/Book/Book';
import { server } from '../src/server';

test('create a book (integration)', async () => {
    const book: Book = {
        title: 'Random Book',
        author: 'John Doe',
        published: (new Date(1995, 11, 17)).toISOString(),
        inPrint: true,
    };

    const response = await server.inject({
        method: 'POST',
        url: '/book/create',
        payload: {
            book
        }
    });

    console.log('status code: ', response.statusCode)
    console.log('body: ', JSON.stringify(response.body))

    expect(response.statusCode).toBe(200);
});
