import { Static, Type } from '@sinclair/typebox'


export const BookSchema = Type.Object({
    id: Type.Optional(Type.String({})),
    title: Type.String(),
    author: Type.String(),
    published: Type.String(),
    inPrint: Type.Boolean(),
});

export type Book = Static<typeof BookSchema>;
