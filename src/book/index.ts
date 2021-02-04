import { resolver } from '~/book/book.resolver'
import { typeDef } from '~/book/book.schema'

export const useBook = (config: any = {}) => {
    if (!Array.isArray(config.typeDefs)) {
        config.typeDefs = []
    }

    if (!config.resolvers) {
        config.resolvers = {}
    }

    config.typeDefs.push(typeDef)

    config.resolvers = {
        ...config.resolvers,
        ...resolver,
    }

    return config
}
