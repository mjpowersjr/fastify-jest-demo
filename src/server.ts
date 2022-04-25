import fastify from "fastify";
import { BookService } from "./services/BookService";
import { BookRoutes } from "./routes/BookRoutes";

const server = fastify();

server.register(BookRoutes, {
    prefix: '/book'
});

const bookService = new BookService();

server.decorate('bookService', bookService);


// update fastify type to include service decorators
declare module 'fastify' {
    interface FastifyInstance {
        bookService: BookService
    }
}


export { server }
