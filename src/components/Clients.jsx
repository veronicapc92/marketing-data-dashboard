import React from "react";
import Client from "./Client";

const Clients = ({ clients }) => {
  return (
    <React.Fragment>
      {clients.map((client) => (
        <Client key={client.id} client={client} />
      ))}
    </React.Fragment>
  );
};

export default Clients;
