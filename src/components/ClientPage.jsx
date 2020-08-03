import React, { useEffect, useState } from "react";
import Table from "./Table";
import axios from "axios";

const ClientPage = (props) => {
  const clientId = props.match.params.id;
  const [clientData, setClientData] = useState([]);
  const [dataPerDay, setDataPerDay] = useState([]);
  useEffect(() => {
    const getClientData = async () => {
      try {
        const { data: clientData } = await axios.get(
          `http://localhost:3000/clients/${clientId}`
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
      <Table dataPerDay={dataPerDay} />
    </React.Fragment>
  );
};

export default ClientPage;
