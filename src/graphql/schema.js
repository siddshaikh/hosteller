import { gql } from "graphql-tag";

export const typeDefs = gql`
  type Location {
    id: ID!
    name: String!
    image: String!
  }

  type Hostel {
    id: ID!
    name: String!
    image: String!
    locationId: ID!
  }

  type Query {
    locations: [Location]
    hostels(locationId: ID!): [Hostel]
  }
`;
