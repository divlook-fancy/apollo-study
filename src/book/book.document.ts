import { gql } from 'apollo-server'

export const typeDef = gql`
    interface MutationResponse {
        success: Boolean!
        message: String
    }

    type AddBookResponse implements MutationResponse {
        success: Boolean!
        message: String
        book: Book
    }

    type Book {
        title: String!
        author: String
    }

    type Query {
        books: [Book]
        book(title: String!): Book
    }

    type Mutation {
        addBook(title: String!, author: String): AddBookResponse
    }
`
