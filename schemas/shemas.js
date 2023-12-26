export const typeDefs = `#graphql
  type Pais {
    code: String!,
    name: String!,
    capital: [String!],
    population: Int!,
    borderCodes: [String!]!
    borders: [Pais!]!
  }

  type Query {
    pais(code: String!): Pais,
  }
`

export const resolvers = {
  Query: {
    pais : (_ , args, context) => {
      return context.dataSource.find(args.code)
    }
  },
  Pais: {
    borders: (parent, _ , context) => {
      return parent.borderCodes.map(each => context.dataSource.find(each))
    }
  }
}