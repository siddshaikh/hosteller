import React from "react";
import { getHostels } from "../api/getHostels";

async function LocationPage() {
  const data = await getHostels();

  return (
    <div>
      {data.map((i) => (
        <div key={i._id}>{i.name}</div>
      ))}
    </div>
  );
}

export default LocationPage;
