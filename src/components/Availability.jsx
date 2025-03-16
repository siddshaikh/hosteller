"use client";
import { gql, useQuery } from "@apollo/client";
import HostelCard from "./HostelCard";
import { Summary } from "./Summary";

const HOSTEL_QUERY = gql`
  query GetHostels($locationId: String!) {
    hostels(locationId: $locationId) {
      _id
      name
      image
      price
      availability
    }
  }
`;

const Availability = ({ id }) => {
  const { data, loading } = useQuery(HOSTEL_QUERY, {
    variables: { locationId: id },
  });
  if (loading) return <p>Loading...</p>;
  return (
    <div className="flex w-full gap-6">
      {/* Card Wrapper */}
      <div className="flex flex-col gap-4 w-[65%]">
        {data?.hostels.length ? (
          data?.hostels.map((hostel) => (
            <HostelCard key={hostel._id} hostel={hostel} />
          ))
        ) : (
          <div>No Hostel availability in this location!</div>
        )}
      </div>

      {/* Summary Section */}
      <div className="w-[35%] sticky top-5 h-fit p-4 rounded-lg shadow-md">
        <Summary />
      </div>
    </div>
  );
};

export default Availability;
