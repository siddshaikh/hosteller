import Hostel from "@/models/Hostel";
import { Location } from "@/models/Location";

export const resolvers = {
  Query: {
    locations: async () => await Location.find(),
    location: async (_, { id }) => await Location.findById(id),
    hostels: async (_, { locationId }) => await Hostel.find({ locationId }),
  },
};
