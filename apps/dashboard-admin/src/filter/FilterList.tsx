import * as React from "react";
import { List, Datagrid, ListProps, TextField, DateField } from "react-admin";
import Pagination from "../Components/Pagination";

export const FilterList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"Filters"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show">
        <TextField label="City" source="city" />
        <TextField label="Country" source="country" />
        <DateField source="createdAt" label="Created At" />
        <TextField label="End Year" source="endYear" />
        <TextField label="ID" source="id" />
        <TextField label="PEST" source="pest" />
        <TextField label="Region" source="region" />
        <TextField label="Sector" source="sector" />
        <TextField label="Source" source="source" />
        <TextField label="SWOT" source="swot" />
        <TextField label="Topics" source="topics" />
        <DateField source="updatedAt" label="Updated At" />
      </Datagrid>
    </List>
  );
};
