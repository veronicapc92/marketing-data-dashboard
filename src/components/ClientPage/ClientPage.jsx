import React, { useEffect, useContext } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { ClientDataContext } from "../../contexts/clientDataContext";
import Table from "./Table/Table";
import Chart from "./Chart/Chart";
import "./client-page.css";

const ClientPage = (props) => {
  const clientId = props.match.params.id;
  const { clientData, setClientData, setDataPerDay } = useContext(
    ClientDataContext
  );

  // Getting client data from the API and storing it in the
  // variable clientData
  useEffect(() => {
    const getClientData = async (id) => {
      try {
        const { data: clientData } = await axios.get(
          `http://localhost:3000/clients/${id}`
        );
        setClientData(clientData);
        setDataPerDay(clientData.data);
      } catch (error) {
        console.log("getClientData error", error);
      }
    };
    getClientData(clientId);
  }, []);

  return (
    <React.Fragment>
      <div className="link-to-homepage">
        <Link to="/">{"< "}Back to homepage</Link>
      </div>
      <div className="client-name-container">
        <img className="logo" src={clientData.logo} alt={clientData.name} />
        <h2 className="client-name">{clientData.name}</h2>
      </div>
      <Chart />
      <Table />
    </React.Fragment>
  );
};

export default ClientPage;
