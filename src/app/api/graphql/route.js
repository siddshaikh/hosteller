import { createYoga } from "graphql-yoga";
import { schema } from "@/graphql/schema";
import { resolvers } from "@/graphql/resolvers";

const yoga = createYoga({
  schema,
  resolvers,
  graphqlEndpoint: "/api/graphql",
});

export { yoga as GET, yoga as POST };
