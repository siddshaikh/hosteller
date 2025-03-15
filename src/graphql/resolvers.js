export const resolvers = {
  Query: {
    locations: async () => {
      const locations = await LocationModel.find({});
      return locations;
    },
    hostels: async (_, { locationId }) => {
      const hostels = await HostelModel.find({ locationId });
      return hostels;
    },
  },
};
