import { BookService } from './src/services/BookService';

declare module 'fastify' {
    interface FastifyInstance {
        bookService: BookService
    }
}
