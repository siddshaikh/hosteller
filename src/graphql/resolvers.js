import Hostel from "@/models/Hostel";
import { Location } from "@/models/Location";

export const resolvers = {
  Query: {
    locations: async () => {
      try {
        const locations = await Location.find();
        console.log("Locations:", locations);
        return locations;
      } catch (error) {
        console.error("Error fetching locations:", error);
        throw new Error("Error fetching locations");
      }
    },
    location: async (_, { id }) => {
      try {
        const location = await Location.findById(id);
        if (!location) throw new Error("Location not found");
        console.log("Location:", location);
        // return location;
      } catch (error) {
        console.error("Error fetching location:", error);
        throw new Error("Error fetching location");
      }
    },
    hostels: async (_, { locationId }) => {
      try {
        const hostels = await Hostel.find({ locationId });
        console.log("Hostels:", hostels);
        return hostels;
      } catch (error) {
        console.error("Error fetching hostels:", error);
        throw new Error("Error fetching hostels");
      }
    },
  },
};
