import { gql } from "@apollo/client";

export const typeDefs = gql`
  type Query {
    locations: [Location]
    location(id: ID!): Location
    hostels(locationId: ID!): [Hostel]
  }

  type Location {
    _id: ID!
    name: String!
    image: String!
  }

  type Hostel {
    _id: ID!
    name: String!
    image: String!
    locationId: ID!
  }
`;
