import { ApolloClient, InMemoryCache } from "@apollo/client";

const client = new ApolloClient({
  uri:
    typeof window === "undefined"
      ? `${process.env.NEXT_PUBLIC_API_URL}/api/graphql`
      : "/api/graphql",
  cache: new InMemoryCache(),
});

export default client;
