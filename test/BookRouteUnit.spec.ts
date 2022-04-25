import { Book } from '../src/schema/Book/Book';
import { CreateBookHandler } from '../src/routes/BookRoutes'

import { FastifyInstance, FastifyReply, FastifyRequest } from 'fastify';
import { BookService } from '../src/services/BookService';

// jest.mock('../src/services/BookService')

test('create a book (unit)', async () => {
    const book: Book = {
        title: 'Random Book',
        author: 'John Doe',
        published: (new Date(1995, 11, 17)).toISOString(),
        inPrint: true,
    };

    const bookServiceMock = jest
        .spyOn(BookService.prototype, 'create')
        .mockImplementation(async (book: Book) => {
            return {
                ...book,
                id: 'some-id',
            };
        });

    const fastifyInstance = buildMockFastifyInstance();
    const request = buildMockRequest({ book });
    const reply = buildMockReply();

    const handler = CreateBookHandler.bind(fastifyInstance);
    await handler(request as FastifyRequest, reply as FastifyReply);
    
    const response = {
        statusCode: reply.status.mock.calls[0][0],
        body: reply.send.mock.calls[0][0],
    };


    console.log('status code: ', response.statusCode)
    console.log('body: ', JSON.stringify(response.body))

    expect(response.statusCode).toBe(200);
});

function buildMockFastifyInstance() {
    const bookService = new BookService();

    const fastifyInstance = {
        bookService,
    }

    return fastifyInstance as FastifyInstance
}


function buildMockRequest(body: any) {
    return {
        body,
    };
}

function buildMockReply() {
    const reply: any = {
    }
    reply.status = jest.fn(() => reply)
    reply.send = jest.fn(() => reply)
    return reply;
}
