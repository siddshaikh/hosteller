"use client";
import React from "react";
import { gql, useQuery } from "@apollo/client";
import Image from "next/image";

const LOCATION_QUERY = gql`
  query {
    locations {
      _id
      name
      image
    }
  }
`;
function LocationPage() {
  const { data, loading, error } = useQuery(LOCATION_QUERY);
  if (loading) {
    return <p>Loading...</p>;
  }
  if (error) {
    return <p>{error.message}</p>;
  }
  console.log(data);

  return (
    <div>
      {data?.locations.map((location) => (
        <div key={location._id}>
          {location.name}
          <Image
            height={250}
            width={250}
            alt={location.name}
            src={location.image}
          />
        </div>
      ))}
    </div>
  );
}

export default LocationPage;
