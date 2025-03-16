import Hostel from "@/models/Hostel";
import { Location } from "@/models/Location";
import { dataBaseConnection } from "@/utils/mongodb";

export const resolvers = {
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
};
