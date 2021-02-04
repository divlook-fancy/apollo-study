import { books } from '~/book/book.db'

export const resolver = {
    Query: {
        books: () => books,
    },
}
