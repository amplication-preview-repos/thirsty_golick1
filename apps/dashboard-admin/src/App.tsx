import React, { useEffect, useState } from "react";
import { Admin, DataProvider, Resource } from "react-admin";
import buildGraphQLProvider from "./data-provider/graphqlDataProvider";
import { theme } from "./theme/theme";
import Login from "./Login";
import "./App.scss";
import Dashboard from "./pages/Dashboard";
import { DataPointList } from "./dataPoint/DataPointList";
import { DataPointCreate } from "./dataPoint/DataPointCreate";
import { DataPointEdit } from "./dataPoint/DataPointEdit";
import { DataPointShow } from "./dataPoint/DataPointShow";
import { FilterList } from "./filter/FilterList";
import { FilterCreate } from "./filter/FilterCreate";
import { FilterEdit } from "./filter/FilterEdit";
import { FilterShow } from "./filter/FilterShow";
import { jwtAuthProvider } from "./auth-provider/ra-auth-jwt";

const App = (): React.ReactElement => {
  const [dataProvider, setDataProvider] = useState<DataProvider | null>(null);
  useEffect(() => {
    buildGraphQLProvider
      .then((provider: any) => {
        setDataProvider(() => provider);
      })
      .catch((error: any) => {
        console.log(error);
      });
  }, []);
  if (!dataProvider) {
    return <div>Loading</div>;
  }
  return (
    <div className="App">
      <Admin
        title={"Dashboard"}
        dataProvider={dataProvider}
        authProvider={jwtAuthProvider}
        theme={theme}
        dashboard={Dashboard}
        loginPage={Login}
      >
        <Resource
          name="DataPoint"
          list={DataPointList}
          edit={DataPointEdit}
          create={DataPointCreate}
          show={DataPointShow}
        />
        <Resource
          name="Filter"
          list={FilterList}
          edit={FilterEdit}
          create={FilterCreate}
          show={FilterShow}
        />
      </Admin>
    </div>
  );
};

export default App;
