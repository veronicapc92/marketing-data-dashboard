import React, { useEffect, useState } from "react";
import { Route, Switch } from "react-router-dom";
import axios from "axios";
import Clients from "./components/Clients";
import ClientPage from "./components/ClientPage";
import Header from "./components/Header";
import "./fonts/fonts.css";
import "./App.css";

function App() {
  const url = "http://localhost:3000/clients";
  const [clients, setClients] = useState([]);

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
    <div className="App">
      <Header />
      <Switch>
        <Route path="/clients/:id" component={ClientPage} />
        <Route
          path="/"
          render={(props) => <Clients {...props} clients={clients} />}
        />
      </Switch>
    </div>
  );
}

export default App;
