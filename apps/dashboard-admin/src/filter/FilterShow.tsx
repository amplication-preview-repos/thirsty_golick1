import * as React from "react";
import {
  Show,
  SimpleShowLayout,
  ShowProps,
  TextField,
  DateField,
} from "react-admin";

export const FilterShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
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
      </SimpleShowLayout>
    </Show>
  );
};
