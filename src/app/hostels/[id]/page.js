import React from "react";

const HostelPage = ({ params }) => {
  const { id } = params;
  return <div>HostelPage for ID: {id}</div>;
};

export default HostelPage;
