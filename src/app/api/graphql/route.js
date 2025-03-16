import { createYoga } from "graphql-yoga";
import { NextRequest, NextResponse } from "next/server";
import { schema } from "@/graphql/schema";

const { handleRequest } = createYoga({
  schema: schema,
  graphqlEndpoint: "/api/graphql",
  fetchAPI: { Request: NextRequest, Response: NextResponse },
  subscriptions: {
    protocol: "WS",
  },
});

export { handleRequest as GET, handleRequest as POST };
