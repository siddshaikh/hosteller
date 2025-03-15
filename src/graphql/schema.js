import { gql } from "graphql-tag";

export const typeDefs = gql`
  type Location {
    id: ID!
    name: String!
    hostels: [Hostel!]
  }

  type Hostel {
    id: ID!
    name: String!
    locationId: ID!
  }

  type Query {
    locations: [Location!]
    location(id: ID!): Location
    hostels(locationId: ID!): [Hostel!]
  }
`;
