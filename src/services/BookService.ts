import { Book } from "../schema/Book/Book";
import { randomUUID } from "crypto";

export class BookService {
    async create(book: Book) {
        console.log(`creating book: ${book.title}...`);

        // TODO: save to db etc.
        const bookInstance = {
            id: randomUUID(),
            ...book,
        }

        return bookInstance;
    }
}
