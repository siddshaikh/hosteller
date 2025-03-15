import { ApolloServer } from "@apollo/server";
import { startServerAndCreateNextHandler } from "@as-integrations/next";
import { typeDefs } from "@/graphql/schema";
import { resolvers } from "@/graphql/resolvers";
import { dataBaseConnection } from "@/utils/mongodb";

const apolloServer = new ApolloServer({
  typeDefs,
  resolvers,
});

// Connect to MongoDB
await dataBaseConnection();

export const { GET, POST } = startServerAndCreateNextHandler(apolloServer);
