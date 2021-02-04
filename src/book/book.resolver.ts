import { Book, PartialBook, AddBookResponse } from '~/book/book.type'
import { books } from '~/book/book.db'

export const resolver = {
    Query: {
        books: () => books,
        book: (_parent, _args: PartialBook, _context, _info) => {
            return books.find((book) => {
                return book.title === _args.title
            })
        },
    },
    Mutation: {
        addBook: (_parent, _args: Book, _context, _info) => {
            const res: AddBookResponse = {
                success: false,
                message: '',
                book: null,
            }

            const book = {
                ..._args,
            }

            if (books.find((row) => row.title === book.title)) {
                return res
            }

            res.success = true
            res.book = book

            books.push(book)

            return res
        },
    },
}
