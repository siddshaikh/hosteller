import { createYoga, createSchema } from "graphql-yoga";
import { NextRequest, NextResponse } from "next/server";
import { createPubSub } from "@graphql-yoga/subscription";
import { Location } from "@/models/Location";
import Hostel from "@/models/Hostel";
import { dataBaseConnection } from "@/utils/mongodb";

const pubSub = createPubSub();

// Define your GraphQL schema
const schema = createSchema({
  typeDefs: `
    type Query {
      hostels(locationId: String!):[Hostel]
      locations:[Location]
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
   
  `,
  resolvers: {
    Query: {
      locations: async () => {
        try {
          await dataBaseConnection();
          const locations = await Location.find({});
          return locations;
        } catch (error) {
          throw new Error("Error while fetching locations");
        }
      },
      hostels: async (_, { locationId }) => {
        try {
          await dataBaseConnection();
          const hostels = await Hostel.find({
            locationId: locationId,
          });
          return hostels;
        } catch (error) {
          throw new Error("Error fetching hostels");
        }
      },
    },
  },
});

const { handleRequest } = createYoga({
  schema,
  graphqlEndpoint: "/api/graphql",
  fetchAPI: { Request: NextRequest, Response: NextResponse },
  subscriptions: {
    protocol: "WS",
  },
});

export { handleRequest as GET, handleRequest as POST };
