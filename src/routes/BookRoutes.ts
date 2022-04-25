import { FastifyInstance, FastifyRegisterOptions, FastifyReply, FastifyRequest } from "fastify";
import { CreateBookReplyBodySchema } from "../schema/Book/CreateBookReplyBody";
import {
    CreateBookRequestBody,
    CreateBookRequestBodySchema,
} from "../schema/Book/CreateBookRequestBody";

export async function BookRoutes(fastify: FastifyInstance, opts: any) {

    fastify.route({
        method: 'POST',
        url: '/create',
        schema: {
            body: CreateBookRequestBodySchema,
            response: {
                200: CreateBookReplyBodySchema,
            },
        },
        handler: CreateBookHandler,
    })

}

export async function CreateBookHandler(
    this: FastifyInstance,
    request: FastifyRequest,
    reply: FastifyReply
) {
    const { bookService } = this;
    const { book } = request.body as CreateBookRequestBody;

    const bookInstance = await bookService.create(book);

    reply
        .status(200)
        .send(bookInstance);
};
