import * as React from "react";
import { List, Datagrid, ListProps, TextField, DateField } from "react-admin";
import Pagination from "../Components/Pagination";

export const DataPointList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"DataPoints"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show">
        <TextField label="City" source="city" />
        <TextField label="Country" source="country" />
        <DateField source="createdAt" label="Created At" />
        <TextField label="ID" source="id" />
        <TextField label="Intensity" source="intensity" />
        <TextField label="Likelihood" source="likelihood" />
        <TextField label="Region" source="region" />
        <TextField label="Relevance" source="relevance" />
        <TextField label="Topics" source="topics" />
        <DateField source="updatedAt" label="Updated At" />
        <TextField label="Year" source="year" />
      </Datagrid>
    </List>
  );
};
