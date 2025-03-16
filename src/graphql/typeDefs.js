import { gql } from "@apollo/client";

export const typeDefs = gql`
  type Query {
    hostels(locationId: String!): [Hostel]
    locations: [Location]
  }
  type Location {
    _id: String
    name: String
    image: String
  }
  type Hostel {
    _id: String
    name: String
    image: String
    price: String
    locationId: String
    availability: Int
  }
`;
