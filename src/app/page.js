"use client";
import ImageCard from "@/components/ImageCard";
import { gql, useQuery } from "@apollo/client";

const LOCATION_QUERY = gql`
  query {
    locations {
      _id
      name
      image
    }
  }
`;

export default function Home() {
  const { data, loading, error } = useQuery(LOCATION_QUERY);
  if (loading) {
    return <p>Loading...</p>;
  }
  if (error) {
    return <p>{error.message}</p>;
  }

  return (
    <div className="px-20 mt-5 flex flex-wrap gap-4">
      {data?.locations.map((location) => (
        <div key={location._id} className="flex-none">
          <ImageCard location={location} />
        </div>
      ))}
    </div>
  );
}
