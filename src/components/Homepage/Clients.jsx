import React, { useEffect, useState } from "react";
import axios from "axios";
import Client from "./Client";
import "./clients.css";

const Clients = () => {
  const url = "http://localhost:3000/clients";
  const [clients, setClients] = useState([]);

  // Getting the client list from the API and storing it in the
  // variable clients
  useEffect(() => {
    const getClients = async () => {
      try {
        const { data: clients } = await axios.get(url);
        setClients(clients);
      } catch (error) {
        console.log("getClients error", error);
      }
    };

    getClients();
  }, []);

  return (
    <div className="clients-container">
      <h2 className="clients-heading">Clients</h2>
      <ul className="clients-list">
        {/* Rendering the client list dynamically */}
        {clients.map((client) => (
          <li key={client.id}>
            <Client client={client} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Clients;
