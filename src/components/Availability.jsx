"use client";
import { gql, useQuery } from "@apollo/client";
import HostelCard from "./HostelCard";
import { Summary } from "./Summary";
import { useSelector } from "react-redux";
import { ArrowRight } from "lucide-react";
import { format } from "date-fns";

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
  const { startDate, endDate } = useSelector((state) => state.dates || {});

  const startDateObj = new Date(startDate);
  const endDateObj = new Date(endDate);

  const { data, loading } = useQuery(HOSTEL_QUERY, {
    variables: { locationId: id },
  });

  if (loading) return <p>Loading...</p>;

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 w-full gap-6">
      {/* Card Wrapper */}
      <div className="col-span-2 flex flex-col gap-4">
        <div className="flex items-center justify-between">
          <h1 className="uppercase tracking-wider font-bold text-2xl">
            Availability
          </h1>
          <p className="bg-[var(--theme-color)] flex items-center gap-2 px-8 py-2 rounded-2xl">
            <span className="font-bold">
              {format(startDateObj, "dd MM, yyyy")}
            </span>
            <ArrowRight className="h-4 w-4" />
            <span className="font-bold">
              {format(endDateObj, "dd MM, yyyy")}
            </span>
          </p>
        </div>
        {data?.hostels.length ? (
          data.hostels.map((hostel) => (
            <HostelCard key={hostel._id} hostel={hostel} />
          ))
        ) : (
          <div>No Hostel availability in this location!</div>
        )}
      </div>

      {/* Summary Section */}
      <div className="col-span-1 sticky top-5 h-fit p-4 rounded-lg shadow-md bg-white">
        <h1 className="uppercase tracking-wider font-bold text-2xl">Summary</h1>
        <Summary />
      </div>
    </div>
  );
};

export default Availability;
