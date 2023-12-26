import { ApolloServer } from "@apollo/server"
import { startStandaloneServer } from "@apollo/server/standalone"
import { typeDefs, resolvers } from './schemas/schemas.js'
import service from "./service.js"

const server = new ApolloServer({
  typeDefs,
  resolvers
})

const { url } = await startStandaloneServer(server, 
  {
    context: async (req) => ({
      dataSource: service
    }),
    listen: {port: 3001}
  })

console.log(`🚀 Server ready at ${url}`)