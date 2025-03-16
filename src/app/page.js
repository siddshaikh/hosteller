"use client";
import { gql, useQuery } from "@apollo/client";

const HOSTEL_QUERY = gql`
  query {
    hostels {
      name
    }
  }
`;

export default function Home() {
  const { loading, error, data } = useQuery(HOSTEL_QUERY);
  console.log(error);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  return (
    <div>
      <h1>The Hosteller Locations</h1>
      <ul>{JSON.stringify(data)}</ul>
    </div>
  );
}
