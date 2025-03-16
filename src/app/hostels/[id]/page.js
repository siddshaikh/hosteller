import Availability from "@/components/Availability";
import React from "react";

const HostelPage = async ({ params }) => {
  const { id } = await params;
  return (
    <div>
      <Availability id={id} />
    </div>
  );
};

export default HostelPage;
