import { Book, BookSchema } from "./Book";

export type CreateBookReply = Book;

export const CreateBookReplyBodySchema = BookSchema;
