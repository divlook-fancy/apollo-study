import { ApolloServer, Config } from 'apollo-server'
import { bookConfig } from '~/book'

const typeDefs = [bookConfig.typeDef]

const resolvers = [bookConfig.resolver]

const apolloConfig: Config = {
    typeDefs,
    resolvers,
}

const server = new ApolloServer(apolloConfig)

server.listen().then(({ url }) => {
    console.log(`🚀  Server ready at ${url}`)
})
