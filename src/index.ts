import { ApolloServer } from 'apollo-server'
import { useBook } from '~/book'

const server = new ApolloServer(useBook())

server.listen().then(({ url }) => {
    console.log(`🚀  Server ready at ${url}`)
})
