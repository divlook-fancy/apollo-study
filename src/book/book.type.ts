import { MutationResponse } from '~/global/global.type'

export interface Book {
    title: string
    author?: string
}

export interface PartialBook extends Partial<Book> {}

export interface AddBookResponse extends MutationResponse {
    book?: Book
}
