import React, { useState } from "react";
import { ctr, cpc, cpa, cr } from "../Helper";

export const ClientDataContext = React.createContext();

const ClientDataContextProvider = ({ children }) => {
  const [clientData, setClientData] = useState([]);
  const [dataPerDay, setDataPerDay] = useState([]);

  // Calculating CTR, CPC, CPA and CR from the metrics in dataPerDay
  // and storing everything in dataPerDayExtended
  const dataPerDayExtended = [...dataPerDay];
  for (let element of dataPerDayExtended) {
    const index = dataPerDayExtended.indexOf(element);
    dataPerDayExtended[index] = { ...dataPerDayExtended[index] };
    const { impressions, clicks, cost, conversions } = dataPerDayExtended[
      index
    ];
    dataPerDayExtended[index].CTR = ctr(clicks, impressions);
    dataPerDayExtended[index].CPC = cpc(cost, clicks);
    dataPerDayExtended[index].CPA = cpa(cost, conversions);
    dataPerDayExtended[index].CR = cr(conversions, clicks);
  }

  // Creating an array with the keys of the dataPerDay[0] object
  // ("impressions", "cost", etc). This is so we can dynamically render
  // the options in the metrics dropdown component instead of hardcaoding them
  const keysArray = [];
  for (let key in dataPerDay[0]) keysArray.push(key);

  // Creating an array with the keys of the dataPerDayExtended[0] object
  // We will use this array to dynamically render the table head compoenent
  // We are using keysArrayExtended because we also to include
  // CTR, CPC, CPA and CR in the table
  const keysArrayExtended = [];
  for (let key in dataPerDayExtended[0]) keysArrayExtended.push(key);

  return (
    <ClientDataContext.Provider
      value={{
        clientData,
        dataPerDay,
        dataPerDayExtended,
        keysArray,
        keysArrayExtended,
        setClientData,
        setDataPerDay,
      }}
    >
      {children}
    </ClientDataContext.Provider>
  );
};

export default ClientDataContextProvider;
