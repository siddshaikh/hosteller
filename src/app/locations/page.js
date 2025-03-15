import React from "react";
import { gql } from "@apollo/client";
import apolloClient from "@/utils/apolloClient";

async function LocationPage() {
  const { data } = await apolloClient.query({
    query: gql`
      query {
        locations {
          id
          name
          image
        }
      }
    `,
  });

  console.log(data);

  return <div>LocationPage</div>;
}

export default LocationPage;
