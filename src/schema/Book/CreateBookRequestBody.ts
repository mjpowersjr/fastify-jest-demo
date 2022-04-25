import { Static, Type } from '@sinclair/typebox'
import { Book, BookSchema } from "./Book";

export const CreateBookRequestBodySchema = Type.Object({
    book: BookSchema,
})

export type CreateBookRequestBody = Static<typeof CreateBookRequestBodySchema>;
